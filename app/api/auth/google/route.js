import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { generateToken } from "@/lib/auth"

export async function POST(request) {
  try {
    const { email, name, uid, photoURL } = await request.json()

    if (!email || !name || !uid) {
      return NextResponse.json({ error: "Missing required user information" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("ecommerce_crm")
    const users = db.collection("users")

    // Check if user already exists
    let user = await users.findOne({ email })
    let isNewUser = false

    if (!user) {
      isNewUser = true
      // Create new user with admin role
      const newUser = {
        name,
        email,
        firebaseUid: uid,
        photoURL: photoURL || null,
        role: "admin", // Everyone gets admin role
        provider: "google",
        createdAt: new Date(),
        lastLogin: new Date(),
        isActive: true
      }

      const result = await users.insertOne(newUser)
      user = { ...newUser, _id: result.insertedId }
    } else {
      // Update existing user's last login and Firebase UID if not set
      const updateData = { 
        lastLogin: new Date(),
        name: name, // Update name in case it changed
        photoURL: photoURL || user.photoURL
      }

      if (!user.firebaseUid) {
        updateData.firebaseUid = uid
      }

      await users.updateOne({ _id: user._id }, { $set: updateData })
    }

    // Generate JWT token
    const token = generateToken(user._id.toString(), user.email, user.role)

    const userData = {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      photoURL: user.photoURL,
      provider: user.provider || "google"
    }

    return NextResponse.json({
      success: true,
      user: userData,
      token,
    })
  } catch (error) {
    console.error("Google auth error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
