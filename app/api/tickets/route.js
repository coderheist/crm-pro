import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("ecommerce_crm")
    const tickets = db.collection("tickets")

    const ticketList = await tickets.find({}).toArray()

    return NextResponse.json({
      success: true,
      tickets: ticketList,
    })
  } catch (error) {
    console.error("Get tickets error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { customerName, customerEmail, subject, description, category, priority } = await request.json()

    if (!customerName || !customerEmail || !subject || !description) {
      return NextResponse.json(
        { error: "Customer name, email, subject, and description are required" },
        { status: 400 },
      )
    }

    const client = await clientPromise
    const db = client.db("ecommerce_crm")
    const tickets = db.collection("tickets")

    // Generate ticket ID
    const ticketCount = await tickets.countDocuments()
    const ticketId = `TKT-${String(ticketCount + 1).padStart(3, "0")}`

    const ticketData = {
      ticketId,
      customerName,
      customerEmail,
      subject,
      description,
      status: "open",
      priority: priority || "medium",
      category: category || "general",
      createdDate: new Date().toISOString().split("T")[0],
      lastUpdate: new Date().toISOString().split("T")[0],
      assignedTo: "Unassigned",
      slaStatus: "within_sla",
      createdAt: new Date(),
    }

    const result = await tickets.insertOne(ticketData)

    return NextResponse.json({
      success: true,
      ticket: { ...ticketData, _id: result.insertedId },
    })
  } catch (error) {
    console.error("Create ticket error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
