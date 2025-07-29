"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, Package, Mail, MessageSquare } from "lucide-react"

export function Analytics() {
  const salesData = [
    { month: "Jan", revenue: 45000, orders: 320 },
    { month: "Feb", revenue: 52000, orders: 380 },
    { month: "Mar", revenue: 48000, orders: 340 },
    { month: "Apr", revenue: 61000, orders: 420 },
    { month: "May", revenue: 55000, orders: 390 },
    { month: "Jun", revenue: 67000, orders: 480 },
  ]

  const customerGrowthData = [
    { month: "Jan", new: 150, returning: 280 },
    { month: "Feb", new: 180, returning: 320 },
    { month: "Mar", new: 160, returning: 300 },
    { month: "Apr", new: 220, returning: 380 },
    { month: "May", new: 190, returning: 350 },
    { month: "Jun", new: 250, returning: 420 },
  ]

  const regionData = [
    { name: "Mumbai", value: 35, color: "#FF6B6B" },
    { name: "Delhi", value: 25, color: "#4ECDC4" },
    { name: "Bangalore", value: 20, color: "#45B7D1" },
    { name: "Chennai", value: 12, color: "#96CEB4" },
    { name: "Others", value: 8, color: "#FFEAA7" },
  ]

  const topProducts = [
    { name: "Smartphone XYZ", sales: 1250, revenue: "₹15,62,500" },
    { name: "Laptop ABC", sales: 890, revenue: "₹44,50,000" },
    { name: "Headphones DEF", sales: 2100, revenue: "₹10,50,000" },
    { name: "Smart Watch GHI", sales: 750, revenue: "₹11,25,000" },
    { name: "Tablet JKL", sales: 650, revenue: "₹19,50,000" },
  ]

  const marketingMetrics = [
    { channel: "Email", campaigns: 12, openRate: 68, clickRate: 15, conversions: 234 },
    { channel: "SMS", campaigns: 8, openRate: 92, clickRate: 28, conversions: 189 },
    { channel: "Social Media", campaigns: 15, openRate: 45, clickRate: 8, conversions: 156 },
    { channel: "Push Notifications", campaigns: 20, openRate: 78, clickRate: 22, conversions: 298 },
  ]

  const kpiData = [
    {
      title: "Total Revenue",
      value: "₹3,28,000",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Total Orders",
      value: "2,330",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingCart,
      color: "text-blue-600",
    },
    {
      title: "New Customers",
      value: "1,150",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Avg Order Value",
      value: "₹1,408",
      change: "-2.1%",
      trend: "down",
      icon: Package,
      color: "text-orange-600",
    },
  ]

  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">Analytics Dashboard</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-1">Comprehensive insights into your e-commerce performance</p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi, index) => (
          <Card key={kpi.title} className={`bg-gradient-to-br ${
            index === 0 ? 'from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20 border-blue-200/50 dark:border-blue-800/30' :
            index === 1 ? 'from-green-50 to-green-100/50 dark:from-green-950/30 dark:to-green-900/20 border-green-200/50 dark:border-green-800/30' :
            index === 2 ? 'from-purple-50 to-purple-100/50 dark:from-purple-950/30 dark:to-purple-900/20 border-purple-200/50 dark:border-purple-800/30' :
            'from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20 border-orange-200/50 dark:border-orange-800/30'
          } hover:shadow-lg transition-all duration-200`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">{kpi.title}</CardTitle>
              <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">{kpi.value}</div>
              <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
                {kpi.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-600" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-600" />
                )}
                <span className={kpi.trend === "up" ? "text-green-600" : "text-red-600"}>{kpi.change}</span>
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Revenue Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue and order volume</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  formatter={(value, name) => [
                    name === "revenue" ? `₹${value.toLocaleString()}` : value,
                    name === "revenue" ? "Revenue" : "Orders",
                  ]}
                />
                <Bar dataKey="revenue" fill="#8884d8" />
                <Bar dataKey="orders" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Customer Growth */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Growth</CardTitle>
            <CardDescription>New vs returning customers</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={customerGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="new" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="returning" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Regional Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Sales by Region</CardTitle>
            <CardDescription>Geographic distribution of sales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={regionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {regionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {regionData.map((region) => (
                <div key={region.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: region.color }} />
                    <span className="text-sm">{region.name}</span>
                  </div>
                  <span className="text-sm font-medium">{region.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
            <CardDescription>Best performing products this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                      <span className="text-sm font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.sales} units sold</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{product.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Marketing Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Marketing Channel Performance</CardTitle>
          <CardDescription>Performance metrics across different marketing channels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {marketingMetrics.map((metric) => (
              <div key={metric.channel} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {metric.channel === "Email" && <Mail className="h-4 w-4" />}
                    {metric.channel === "SMS" && <MessageSquare className="h-4 w-4" />}
                    {metric.channel === "Social Media" && <Users className="h-4 w-4" />}
                    {metric.channel === "Push Notifications" && <Package className="h-4 w-4" />}
                    <span className="font-medium">{metric.channel}</span>
                  </div>
                  <Badge variant="outline">{metric.campaigns} campaigns</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Open Rate</span>
                      <span className="text-sm font-medium">{metric.openRate}%</span>
                    </div>
                    <Progress value={metric.openRate} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Click Rate</span>
                      <span className="text-sm font-medium">{metric.clickRate}%</span>
                    </div>
                    <Progress value={metric.clickRate} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Conversions</span>
                      <span className="text-sm font-medium">{metric.conversions}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Customer Insights */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Customer Lifetime Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹4,250</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 text-green-600" />
              <span className="text-green-600">+8.5%</span> from last quarter
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>VIP Customers</span>
                <span>₹8,500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Regular Customers</span>
                <span>₹3,200</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>New Customers</span>
                <span>₹1,800</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Churn Risk Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">High Risk</span>
                <Badge variant="destructive">156 customers</Badge>
              </div>
              <Progress value={12} className="h-2" />
              <div className="flex items-center justify-between">
                <span className="text-sm">Medium Risk</span>
                <Badge variant="outline">324 customers</Badge>
              </div>
              <Progress value={25} className="h-2" />
              <div className="flex items-center justify-between">
                <span className="text-sm">Low Risk</span>
                <Badge className="bg-green-100 text-green-800">820 customers</Badge>
              </div>
              <Progress value={63} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Support Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Avg Response Time</span>
                  <span className="font-medium">2.3 hours</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Resolution Rate</span>
                  <span className="font-medium">94%</span>
                </div>
                <Progress value={94} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Customer Satisfaction</span>
                  <span className="font-medium">4.6/5</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
