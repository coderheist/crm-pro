import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { hashPassword, generateToken } from "@/lib/auth"

export async function POST(request) {
  try {
    const { name, email, password } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, email, and password are required" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("ecommerce_crm")
    const users = db.collection("users")

    // Check if user already exists
    const existingUser = await users.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ error: "User already exists with this email" }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create user with admin role
    const result = await users.insertOne({
      name,
      email,
      password: hashedPassword,
      role: "admin", // Everyone gets admin role
      status: "active",
      createdAt: new Date(),
      lastLogin: null,
    })

    // Generate token
    const token = generateToken(result.insertedId.toString(), email, "admin")

    const user = {
      id: result.insertedId.toString(),
      name,
      email,
      role: "admin"
    }

    const response = NextResponse.json({
      message: "User created successfully",
      user: user,
    }, { status: 201 })

    // Set HTTP-only cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })

    return response

  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
