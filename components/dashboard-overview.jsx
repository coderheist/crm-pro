"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, ShoppingCart, DollarSign, TrendingUp, MessageSquare, Mail, Package, AlertCircle } from "lucide-react"
import { useAuth } from "@/components/auth-provider"

export function DashboardOverview() {
  const { user } = useAuth()

  const stats = [
    {
      title: "Total Customers",
      value: "12,847",
      change: "+12.5%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Monthly Orders",
      value: "3,421",
      change: "+8.2%",
      icon: ShoppingCart,
      color: "text-green-600",
    },
    {
      title: "Revenue",
      value: "₹8,45,230",
      change: "+15.3%",
      icon: DollarSign,
      color: "text-orange-600",
    },
    {
      title: "Growth Rate",
      value: "23.4%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ]

  const recentActivities = [
    {
      type: "order",
      message: "New order #ORD-2024-001 from Mumbai",
      time: "2 minutes ago",
      status: "new",
    },
    {
      type: "support",
      message: "Support ticket resolved for customer in Delhi",
      time: "15 minutes ago",
      status: "resolved",
    },
    {
      type: "marketing",
      message: "Email campaign sent to 5,000 customers",
      time: "1 hour ago",
      status: "sent",
    },
    {
      type: "customer",
      message: "New customer registration from Bangalore",
      time: "2 hours ago",
      status: "new",
    },
  ]

  const getActivityIcon = (type) => {
    switch (type) {
      case "order":
        return <ShoppingCart className="h-4 w-4" />
      case "support":
        return <MessageSquare className="h-4 w-4" />
      case "marketing":
        return <Mail className="h-4 w-4" />
      case "customer":
        return <Users className="h-4 w-4" />
      default:
        return <Package className="h-4 w-4" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700"
      case "resolved":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700"
      case "sent":
        return "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/30 dark:text-gray-300 dark:border-gray-700"
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
      {/* Welcome Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 p-8 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold tracking-tight mb-2">
            Welcome back, {user?.name?.split(" ")[0]}! 👋
          </h2>
          <p className="text-blue-100 text-lg">
            Here's what's happening with your e-commerce business today.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">System Online</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">Performance: Excellent</span>
            </div>
          </div>
        </div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"></div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={stat.title} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800 dark:to-slate-900/50">
            <div className={`absolute inset-0 bg-gradient-to-br ${
              index % 4 === 0 ? 'from-blue-500/10 to-blue-600/5' :
              index % 4 === 1 ? 'from-green-500/10 to-green-600/5' :
              index % 4 === 2 ? 'from-orange-500/10 to-orange-600/5' :
              'from-purple-500/10 to-purple-600/5'
            }`} />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative z-10">
              <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-300">{stat.title}</CardTitle>
              <div className={`p-2 rounded-full bg-gradient-to-br ${
                index % 4 === 0 ? 'from-blue-500 to-blue-600' :
                index % 4 === 1 ? 'from-green-500 to-green-600' :
                index % 4 === 2 ? 'from-orange-500 to-orange-600' :
                'from-purple-500 to-purple-600'
              } shadow-lg`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold text-slate-800 dark:text-white mb-1">{stat.value}</div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
                <span className="text-sm text-slate-500">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Enhanced Recent Activities */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800 dark:to-slate-900/50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Recent Activities</CardTitle>
                <CardDescription>Latest updates from your CRM system</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="group flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all duration-200 cursor-pointer">
                  <div className={`flex-shrink-0 p-2 rounded-lg bg-gradient-to-br ${
                    activity.type === 'order' ? 'from-green-500 to-green-600' :
                    activity.type === 'support' ? 'from-purple-500 to-purple-600' :
                    activity.type === 'marketing' ? 'from-orange-500 to-orange-600' :
                    'from-blue-500 to-blue-600'
                  } shadow-sm`}>
                    <div className="text-white">
                      {getActivityIcon(activity.type)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      {activity.message}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{activity.time}</p>
                  </div>
                  <Badge className={`${getStatusColor(activity.status)} border-0 shadow-sm font-medium`}>
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
              <button 
                className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 py-2 rounded-lg transition-all duration-200"
                suppressHydrationWarning
              >
                View All Activities →
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Performance Metrics */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800 dark:to-slate-900/50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Performance Metrics</CardTitle>
                <CardDescription>Key performance indicators for this month</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {[
                { label: "Customer Satisfaction", value: 92, color: "bg-gradient-to-r from-green-500 to-green-600" },
                { label: "Order Fulfillment", value: 87, color: "bg-gradient-to-r from-blue-500 to-blue-600" },
                { label: "Marketing ROI", value: 156, displayValue: 100, color: "bg-gradient-to-r from-purple-500 to-purple-600" },
                { label: "Support Response Time", value: 78, displayTime: "2.3 hrs", color: "bg-gradient-to-r from-orange-500 to-orange-600" }
              ].map((metric, index) => (
                <div key={metric.label} className="group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{metric.label}</span>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {metric.label === "Marketing ROI" ? "156%" : metric.displayTime || `${metric.value}%`}
                    </span>
                  </div>
                  <div className="relative">
                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${metric.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                        style={{ 
                          width: `${metric.displayValue || metric.value}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced System Alerts */}
      {user?.role === "admin" && (
        <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800 dark:to-slate-900/50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg">
                <AlertCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">System Alerts</CardTitle>
                <CardDescription>Important notifications requiring your attention</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-4 border-l-4 border-yellow-400 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-500 rounded-lg">
                      <Package className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Low inventory alert</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">15 products are running low on stock</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700">
                      Action Required
                    </Badge>
                  </div>
                </div>
                <div className="absolute -right-2 -top-2 w-16 h-16 bg-yellow-400/10 rounded-full blur-xl"></div>
              </div>
              
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 border-l-4 border-green-400 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500 rounded-lg">
                      <Package className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Database backup completed</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Last backup: Today at 3:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700">
                      Completed
                    </Badge>
                  </div>
                </div>
                <div className="absolute -right-2 -top-2 w-16 h-16 bg-green-400/10 rounded-full blur-xl"></div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
              <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 py-2 rounded-lg transition-all duration-200">
                View All Alerts →
              </button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
