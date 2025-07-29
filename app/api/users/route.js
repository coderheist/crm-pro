import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { verifyToken } from "@/lib/auth"

export async function GET(request) {
  try {
    // Verify token from cookies
    const token = request.cookies.get("token")?.value
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db("ecommerce_crm")
    const users = db.collection("users")

    // Fetch all users (excluding passwords)
    const allUsers = await users.find({}, {
      projection: {
        password: 0 // Exclude password from results
      }
    }).toArray()

    return NextResponse.json({
      users: allUsers
    })

  } catch (error) {
    console.error("Users API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
