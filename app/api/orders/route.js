import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("ecommerce_crm")
    const orders = db.collection("orders")

    const orderList = await orders.find({}).toArray()

    return NextResponse.json({
      success: true,
      orders: orderList,
    })
  } catch (error) {
    console.error("Get orders error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { customerId, customerName, customerEmail, items, total, paymentMethod, shippingAddress } =
      await request.json()

    if (!customerId || !customerName || !total) {
      return NextResponse.json({ error: "Customer ID, name, and total are required" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("ecommerce_crm")
    const orders = db.collection("orders")

    // Generate order ID
    const orderCount = await orders.countDocuments()
    const orderId = `ORD-${new Date().getFullYear()}-${String(orderCount + 1).padStart(3, "0")}`

    const orderData = {
      orderId,
      customerId,
      customerName,
      customerEmail: customerEmail || "",
      date: new Date().toISOString().split("T")[0],
      status: "new",
      total,
      items: items || 1,
      paymentMethod: paymentMethod || "UPI",
      shippingAddress: shippingAddress || "",
      trackingId: null,
      createdAt: new Date(),
    }

    const result = await orders.insertOne(orderData)

    return NextResponse.json({
      success: true,
      order: { ...orderData, _id: result.insertedId },
    })
  } catch (error) {
    console.error("Create order error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
