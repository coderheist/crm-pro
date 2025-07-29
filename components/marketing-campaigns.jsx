"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
import { Textarea } from "@/components/ui/textarea"
import { Search, Plus, Mail, MessageSquare, Users, TrendingUp, Eye, Send } from "lucide-react"

export function MarketingCampaigns() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterType, setFilterType] = useState("all")

  const campaigns = [
    {
      id: "CAMP-001",
      name: "Welcome Series - New Customers",
      type: "email",
      status: "active",
      audience: "New Customers",
      audienceSize: 1250,
      sent: 1180,
      opened: 826,
      clicked: 165,
      converted: 42,
      revenue: "₹1,26,500",
      createdDate: "2024-01-15",
      lastSent: "2024-01-18",
      openRate: 70,
      clickRate: 14,
      conversionRate: 3.6,
    },
    {
      id: "CAMP-002",
      name: "Abandoned Cart Recovery",
      type: "email",
      status: "active",
      audience: "Cart Abandoners",
      audienceSize: 890,
      sent: 845,
      opened: 507,
      clicked: 152,
      converted: 67,
      revenue: "₹2,34,800",
      createdDate: "2024-01-10",
      lastSent: "2024-01-18",
      openRate: 60,
      clickRate: 18,
      conversionRate: 7.9,
    },
    {
      id: "CAMP-003",
      name: "Festival Sale Promotion",
      type: "sms",
      status: "completed",
      audience: "All Active Customers",
      audienceSize: 5420,
      sent: 5420,
      opened: 4876,
      clicked: 1463,
      converted: 234,
      revenue: "₹8,76,400",
      createdDate: "2024-01-05",
      lastSent: "2024-01-08",
      openRate: 90,
      clickRate: 27,
      conversionRate: 4.3,
    },
    {
      id: "CAMP-004",
      name: "Product Recommendation",
      type: "email",
      status: "draft",
      audience: "VIP Customers",
      audienceSize: 320,
      sent: 0,
      opened: 0,
      clicked: 0,
      converted: 0,
      revenue: "₹0",
      createdDate: "2024-01-17",
      lastSent: null,
      openRate: 0,
      clickRate: 0,
      conversionRate: 0,
    },
    {
      id: "CAMP-005",
      name: "Re-engagement Campaign",
      type: "email",
      status: "scheduled",
      audience: "Inactive Customers",
      audienceSize: 2100,
      sent: 0,
      opened: 0,
      clicked: 0,
      converted: 0,
      revenue: "₹0",
      createdDate: "2024-01-16",
      lastSent: null,
      openRate: 0,
      clickRate: 0,
      conversionRate: 0,
    },
  ]

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch =
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || campaign.status === filterStatus
    const matchesType = filterType === "all" || campaign.type === filterType

    return matchesSearch && matchesStatus && matchesType
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "draft":
        return "bg-gray-100 text-gray-800"
      case "scheduled":
        return "bg-yellow-100 text-yellow-800"
      case "paused":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case "email":
        return <Mail className="h-4 w-4" />
      case "sms":
        return <MessageSquare className="h-4 w-4" />
      default:
        return <Mail className="h-4 w-4" />
    }
  }

  const campaignStats = {
    total: campaigns.length,
    active: campaigns.filter((c) => c.status === "active").length,
    completed: campaigns.filter((c) => c.status === "completed").length,
    totalRevenue: campaigns.reduce((sum, c) => sum + Number.parseInt(c.revenue.replace(/[₹,]/g, "")), 0),
    avgOpenRate: Math.round(
      campaigns.filter((c) => c.openRate > 0).reduce((sum, c) => sum + c.openRate, 0) /
        campaigns.filter((c) => c.openRate > 0).length,
    ),
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">Marketing Campaigns</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Create and manage email and SMS marketing campaigns</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md transition-all duration-200">
              <Plus className="mr-2 h-4 w-4" />
              Create Campaign
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Campaign</DialogTitle>
              <DialogDescription>Set up a new marketing campaign to engage your customers.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Campaign Name" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Campaign Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email Campaign</SelectItem>
                  <SelectItem value="sms">SMS Campaign</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Target Audience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Customers</SelectItem>
                  <SelectItem value="new">New Customers</SelectItem>
                  <SelectItem value="vip">VIP Customers</SelectItem>
                  <SelectItem value="inactive">Inactive Customers</SelectItem>
                  <SelectItem value="cart_abandoners">Cart Abandoners</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Subject Line" />
              <Textarea placeholder="Campaign Content" rows={6} />
              <div className="flex gap-2">
                <Button className="flex-1">Save as Draft</Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Schedule Campaign
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Campaign Stats */}
      <div className="grid gap-4 md:grid-cols-5">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{campaignStats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{campaignStats.active}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <Mail className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{campaignStats.completed}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{campaignStats.totalRevenue.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Open Rate</CardTitle>
            <Eye className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{campaignStats.avgOpenRate}%</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filter Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search campaigns by name or ID..."
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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="sms">SMS</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Campaigns Table */}
      <Card>
        <CardHeader>
          <CardTitle>Campaign List</CardTitle>
          <CardDescription>
            Showing {filteredCampaigns.length} of {campaigns.length} campaigns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Audience</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCampaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{campaign.name}</div>
                      <div className="text-sm text-muted-foreground">{campaign.id}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getTypeIcon(campaign.type)}
                      <span className="capitalize">{campaign.type}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(campaign.status)}>{campaign.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{campaign.audience}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {campaign.audienceSize.toLocaleString()} customers
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {campaign.sent > 0 ? (
                      <div className="space-y-1">
                        <div className="text-sm">
                          <span className="font-medium">Open:</span> {campaign.openRate}%
                        </div>
                        <Progress value={campaign.openRate} className="h-1" />
                        <div className="text-sm">
                          <span className="font-medium">Click:</span> {campaign.clickRate}%
                        </div>
                        <Progress value={campaign.clickRate} className="h-1" />
                      </div>
                    ) : (
                      <span className="text-sm text-muted-foreground">Not sent yet</span>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{campaign.revenue}</TableCell>
                  <TableCell>{campaign.createdDate}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>Campaign Details - {campaign.name}</DialogTitle>
                            <DialogDescription>Complete campaign performance and analytics</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium">Campaign Name</label>
                                <p className="text-sm text-muted-foreground">{campaign.name}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Campaign ID</label>
                                <p className="text-sm text-muted-foreground">{campaign.id}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Type</label>
                                <div className="flex items-center gap-2">
                                  {getTypeIcon(campaign.type)}
                                  <span className="text-sm capitalize">{campaign.type}</span>
                                </div>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Status</label>
                                <Badge className={getStatusColor(campaign.status)}>{campaign.status}</Badge>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Target Audience</label>
                                <p className="text-sm text-muted-foreground">{campaign.audience}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Audience Size</label>
                                <p className="text-sm text-muted-foreground">
                                  {campaign.audienceSize.toLocaleString()} customers
                                </p>
                              </div>
                            </div>

                            {campaign.sent > 0 && (
                              <div>
                                <h4 className="font-medium mb-4">Performance Metrics</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-sm">Sent</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      <div className="text-2xl font-bold">{campaign.sent.toLocaleString()}</div>
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-sm">Opened</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      <div className="text-2xl font-bold">{campaign.opened.toLocaleString()}</div>
                                      <p className="text-xs text-muted-foreground">{campaign.openRate}% rate</p>
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-sm">Clicked</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      <div className="text-2xl font-bold">{campaign.clicked.toLocaleString()}</div>
                                      <p className="text-xs text-muted-foreground">{campaign.clickRate}% rate</p>
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-sm">Converted</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      <div className="text-2xl font-bold">{campaign.converted.toLocaleString()}</div>
                                      <p className="text-xs text-muted-foreground">{campaign.conversionRate}% rate</p>
                                    </CardContent>
                                  </Card>
                                </div>
                              </div>
                            )}

                            <div className="flex gap-2">
                              {campaign.status === "draft" && (
                                <>
                                  <Button size="sm">
                                    <Send className="mr-2 h-4 w-4" />
                                    Send Now
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    Schedule
                                  </Button>
                                </>
                              )}
                              {campaign.status === "active" && (
                                <Button variant="outline" size="sm">
                                  Pause Campaign
                                </Button>
                              )}
                              <Button variant="outline" size="sm">
                                Duplicate Campaign
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
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
