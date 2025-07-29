import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("ecommerce_crm")
    const customers = db.collection("customers")

    const customerList = await customers.find({}).toArray()

    return NextResponse.json({
      success: true,
      customers: customerList,
    })
  } catch (error) {
    console.error("Get customers error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { name, email, phone, region } = await request.json()

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("ecommerce_crm")
    const customers = db.collection("customers")

    // Check if customer already exists
    const existingCustomer = await customers.findOne({ email })
    if (existingCustomer) {
      return NextResponse.json({ error: "Customer already exists with this email" }, { status: 400 })
    }

    const customerData = {
      name,
      email,
      phone: phone || "",
      region: region || "",
      status: "active",
      totalOrders: 0,
      totalSpent: 0,
      lastOrder: null,
      segment: "New",
      joinDate: new Date(),
      createdAt: new Date(),
    }

    const result = await customers.insertOne(customerData)

    return NextResponse.json({
      success: true,
      customer: { ...customerData, _id: result.insertedId },
    })
  } catch (error) {
    console.error("Create customer error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
