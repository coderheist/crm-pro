import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { verifyToken } from "@/lib/auth"
import { ObjectId } from "mongodb"

export async function PUT(request) {
  try {
    const { userId, newRole } = await request.json()
    
    // Get token from authorization header
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const token = authHeader.substring(7)
    const decoded = verifyToken(token)
    
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ error: "Admin access required" }, { status: 403 })
    }

    if (!userId || !newRole) {
      return NextResponse.json({ error: "User ID and new role are required" }, { status: 400 })
    }

    const validRoles = ['admin', 'marketing_manager', 'support_agent', 'viewer']
    if (!validRoles.includes(newRole)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("ecommerce_crm")
    const users = db.collection("users")

    // Update user role
    const result = await users.updateOne(
      { _id: new ObjectId(userId) },
      { 
        $set: { 
          role: newRole,
          updatedAt: new Date(),
          updatedBy: decoded.userId
        }
      }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: "User role updated successfully"
    })
  } catch (error) {
    console.error("Role update error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request) {
  try {
    // Get token from authorization header
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const token = authHeader.substring(7)
    const decoded = verifyToken(token)
    
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ error: "Admin access required" }, { status: 403 })
    }

    const client = await clientPromise
    const db = client.db("ecommerce_crm")
    const users = db.collection("users")

    // Get all users (excluding passwords)
    const allUsers = await users.find(
      {},
      { 
        projection: { 
          password: 0 // Exclude password field
        }
      }
    ).toArray()

    const formattedUsers = allUsers.map(user => ({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      provider: user.provider || 'email',
      photoURL: user.photoURL,
      createdAt: user.createdAt,
      lastLogin: user.lastLogin,
      isActive: user.isActive !== false
    }))

    return NextResponse.json({
      success: true,
      users: formattedUsers
    })
  } catch (error) {
    console.error("Get users error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
