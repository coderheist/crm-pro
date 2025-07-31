import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("ecommerce_crm")
    const users = db.collection("users")

    const userList = await users.find({}).toArray()

    return NextResponse.json({
      success: true,
      users: userList,
    })
  } catch (error) {
    console.error("Get users error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { name, email, role } = await request.json()

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("ecommerce_crm")
    const users = db.collection("users")

    // Check if user already exists
    const existingUser = await users.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ error: "User already exists with this email" }, { status: 400 })
    }

    const userData = {
      name,
      email,
      role: role || "admin", // Default to admin since we removed role selection
      status: "active",
      createdAt: new Date(),
      lastLogin: null,
    }

    const result = await users.insertOne(userData)

    return NextResponse.json({
      success: true,
      message: "User created successfully",
      userId: result.insertedId,
    })
  } catch (error) {
    console.error("Create user error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}