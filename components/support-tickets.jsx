"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Search, Plus, MessageSquare, Clock, CheckCircle, AlertCircle, User } from "lucide-react"

export function SupportTickets() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterPriority, setFilterPriority] = useState("all")

  const tickets = [
    {
      id: "TKT-001",
      customer: "Rajesh Kumar",
      customerEmail: "rajesh.kumar@email.com",
      subject: "Order delivery issue",
      description:
        "My order was supposed to be delivered yesterday but I haven't received it yet. Can you please check the status?",
      status: "open",
      priority: "high",
      category: "delivery",
      createdDate: "2024-01-18",
      lastUpdate: "2024-01-18",
      assignedTo: "Amit Singh",
      slaStatus: "within_sla",
    },
    {
      id: "TKT-002",
      customer: "Priya Sharma",
      customerEmail: "priya.sharma@email.com",
      subject: "Product quality concern",
      description: "The product I received doesn't match the description on the website. I would like to return it.",
      status: "in_progress",
      priority: "medium",
      category: "product",
      createdDate: "2024-01-17",
      lastUpdate: "2024-01-18",
      assignedTo: "Sneha Patel",
      slaStatus: "within_sla",
    },
    {
      id: "TKT-003",
      customer: "Amit Singh",
      customerEmail: "amit.singh@email.com",
      subject: "Payment refund request",
      description: "I cancelled my order but the refund hasn't been processed yet. It's been 5 days.",
      status: "resolved",
      priority: "high",
      category: "payment",
      createdDate: "2024-01-15",
      lastUpdate: "2024-01-17",
      assignedTo: "Vikram Reddy",
      slaStatus: "resolved",
    },
    {
      id: "TKT-004",
      customer: "Sneha Patel",
      customerEmail: "sneha.patel@email.com",
      subject: "Account login issues",
      description: "I'm unable to log into my account. The password reset link is not working.",
      status: "open",
      priority: "low",
      category: "account",
      createdDate: "2024-01-16",
      lastUpdate: "2024-01-16",
      assignedTo: "Amit Singh",
      slaStatus: "approaching_sla",
    },
    {
      id: "TKT-005",
      customer: "Vikram Reddy",
      customerEmail: "vikram.reddy@email.com",
      subject: "Bulk order inquiry",
      description:
        "I need to place a bulk order for my business. Can someone help me with pricing and delivery options?",
      status: "in_progress",
      priority: "medium",
      category: "sales",
      createdDate: "2024-01-14",
      lastUpdate: "2024-01-18",
      assignedTo: "Priya Sharma",
      slaStatus: "within_sla",
    },
  ]

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || ticket.status === filterStatus
    const matchesPriority = filterPriority === "all" || ticket.priority === filterPriority

    return matchesSearch && matchesStatus && matchesPriority
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "bg-red-100 text-red-800"
      case "in_progress":
        return "bg-yellow-100 text-yellow-800"
      case "resolved":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getSlaColor = (slaStatus) => {
    switch (slaStatus) {
      case "within_sla":
        return "bg-green-100 text-green-800"
      case "approaching_sla":
        return "bg-yellow-100 text-yellow-800"
      case "breached_sla":
        return "bg-red-100 text-red-800"
      case "resolved":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "open":
        return <AlertCircle className="h-4 w-4" />
      case "in_progress":
        return <Clock className="h-4 w-4" />
      case "resolved":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <MessageSquare className="h-4 w-4" />
    }
  }

  const ticketStats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === "open").length,
    inProgress: tickets.filter((t) => t.status === "in_progress").length,
    resolved: tickets.filter((t) => t.status === "resolved").length,
    highPriority: tickets.filter((t) => t.priority === "high").length,
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">Support Tickets</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage customer support requests and track resolution times</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md transition-all duration-200">
              <Plus className="mr-2 h-4 w-4" />
              Create Ticket
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Support Ticket</DialogTitle>
              <DialogDescription>Create a new support ticket for customer assistance.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Customer Name" />
              <Input placeholder="Customer Email" type="email" />
              <Input placeholder="Subject" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="delivery">Delivery</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                  <SelectItem value="payment">Payment</SelectItem>
                  <SelectItem value="account">Account</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Describe the issue..." />
              <Button className="w-full">Create Ticket</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Ticket Stats */}
      <div className="grid gap-4 md:grid-cols-5">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20 border-blue-200/50 dark:border-blue-800/30 hover:shadow-lg transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">Total Tickets</CardTitle>
            <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{ticketStats.total}</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-950/30 dark:to-red-900/20 border-red-200/50 dark:border-red-800/30 hover:shadow-lg transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">Open</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">{ticketStats.open}</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 dark:from-yellow-950/30 dark:to-yellow-900/20 border-yellow-200/50 dark:border-yellow-800/30 hover:shadow-lg transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{ticketStats.inProgress}</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/30 dark:to-green-900/20 border-green-200/50 dark:border-green-800/30 hover:shadow-lg transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">Resolved</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{ticketStats.resolved}</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20 border-orange-200/50 dark:border-orange-800/30 hover:shadow-lg transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">High Priority</CardTitle>
            <AlertCircle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{ticketStats.highPriority}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filter Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tickets by ID, customer, or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterPriority} onValueChange={setFilterPriority}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Tickets Table */}
      <Card>
        <CardHeader>
          <CardTitle>Support Tickets</CardTitle>
          <CardDescription>
            Showing {filteredTickets.length} of {tickets.length} tickets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>SLA Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-medium">{ticket.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{ticket.customer}</div>
                      <div className="text-sm text-muted-foreground">{ticket.customerEmail}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-xs">
                      <div className="font-medium truncate">{ticket.subject}</div>
                      <div className="text-sm text-muted-foreground truncate">{ticket.description}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(ticket.status)}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(ticket.status)}
                        {ticket.status.replace("_", " ")}
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
                  </TableCell>
                  <TableCell className="capitalize">{ticket.category}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {ticket.assignedTo}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getSlaColor(ticket.slaStatus)}>{ticket.slaStatus.replace("_", " ")}</Badge>
                  </TableCell>
                  <TableCell>{ticket.createdDate}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Ticket Details - {ticket.id}</DialogTitle>
                          <DialogDescription>Complete ticket information and resolution history</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium">Customer</label>
                              <p className="text-sm text-muted-foreground">{ticket.customer}</p>
                              <p className="text-sm text-muted-foreground">{ticket.customerEmail}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Created Date</label>
                              <p className="text-sm text-muted-foreground">{ticket.createdDate}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Status</label>
                              <Badge className={getStatusColor(ticket.status)}>{ticket.status.replace("_", " ")}</Badge>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Priority</label>
                              <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Category</label>
                              <p className="text-sm text-muted-foreground capitalize">{ticket.category}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Assigned To</label>
                              <p className="text-sm text-muted-foreground">{ticket.assignedTo}</p>
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium">Subject</label>
                            <p className="text-sm text-muted-foreground">{ticket.subject}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium">Description</label>
                            <p className="text-sm text-muted-foreground">{ticket.description}</p>
                          </div>
                          <div className="border-t pt-4">
                            <label className="text-sm font-medium">Add Response</label>
                            <Textarea placeholder="Type your response here..." className="mt-2" />
                            <div className="flex gap-2 mt-2">
                              <Button size="sm">Send Response</Button>
                              <Select>
                                <SelectTrigger className="w-48">
                                  <SelectValue placeholder="Update Status" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="open">Open</SelectItem>
                                  <SelectItem value="in_progress">In Progress</SelectItem>
                                  <SelectItem value="resolved">Resolved</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
