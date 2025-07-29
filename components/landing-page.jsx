"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Store, 
  Users, 
  ShoppingCart, 
  MessageSquare, 
  Mail, 
  BarChart3, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  TrendingUp,
  Clock,
  PhoneCall
} from "lucide-react"

export function LandingPage({ onGetStarted }) {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: Users,
      title: "Customer Management",
      description: "Unified customer profiles with journey tracking and segmentation",
      color: "text-blue-600"
    },
    {
      icon: ShoppingCart,
      title: "Order & Inventory",
      description: "Real-time order tracking and inventory management",
      color: "text-green-600"
    },
    {
      icon: MessageSquare,
      title: "Support Ticketing",
      description: "Comprehensive support system with SLA tracking",
      color: "text-purple-600"
    },
    {
      icon: Mail,
      title: "Marketing Automation",
      description: "Email/SMS campaigns with automated triggers",
      color: "text-orange-600"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time insights and performance metrics",
      color: "text-red-600"
    },
    {
      icon: Shield,
      title: "User Management",
      description: "Role-based access control and security",
      color: "text-indigo-600"
    }
  ]

  const testimonials = [
    {
      name: "Rajesh Sharma",
      company: "Mumbai Electronics",
      role: "Founder",
      content: "This CRM transformed our business operations. Customer satisfaction increased by 40%!",
      rating: 5
    },
    {
      name: "Priya Patel",
      company: "Gujarat Fashion",
      role: "Marketing Manager",
      content: "The marketing automation features helped us triple our campaign effectiveness.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      company: "Delhi Mart",
      role: "Operations Head",
      content: "Order management became seamless. We reduced processing time by 60%.",
      rating: 5
    }
  ]

  const stats = [
    { number: "10,000+", label: "Active Businesses" },
    { number: "50M+", label: "Orders Processed" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 scroll-smooth text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Store className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">CRM Pro India</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors">Reviews</a>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white" onClick={onGetStarted}>Sign In</Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={onGetStarted}>Get Started</Button>
            </div>
            <div className="md:hidden">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={onGetStarted}>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-900/50 text-blue-300 border-blue-700">
                #1 CRM for Indian E-commerce
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Grow Your
                <span className="text-blue-400"> E-commerce Business</span> with Smart CRM
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Designed specifically for Indian businesses. Manage customers, orders, support, and marketing 
                campaigns all in one powerful platform. Scale your operations with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={onGetStarted}>
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Book Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  No setup fees
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  14-day free trial
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  Cancel anytime
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300 border border-gray-700">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Dashboard Overview</h3>
                    <Badge className="bg-white/20 text-white border-white/20">Live</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-3">
                      <Users className="h-6 w-6 mb-2" />
                      <div className="text-2xl font-bold">12,847</div>
                      <div className="text-sm opacity-80">Customers</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <ShoppingCart className="h-6 w-6 mb-2" />
                      <div className="text-2xl font-bold">3,421</div>
                      <div className="text-sm opacity-80">Orders</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-900/50 text-green-300 border-green-700">Features</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Everything You Need to Scale
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools designed for the unique needs of Indian e-commerce businesses
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveFeature(index)}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-900/50 text-purple-300 border-purple-700">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Built for Indian Businesses
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Multi-language Support</h3>
                    <p className="text-gray-300">Support for Hindi, English, and regional languages</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-900/50 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Lightning Fast</h3>
                    <p className="text-gray-300">Optimized for Indian internet speeds and mobile devices</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-900/50 flex items-center justify-center flex-shrink-0">
                    <Building className="h-4 w-4 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Local Compliance</h3>
                    <p className="text-gray-300">GST integration and compliance with Indian regulations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-700 rounded-2xl shadow-xl p-8 border border-gray-600">
                <div className="text-center mb-6">
                  <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white">Growth Analytics</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Customer Growth</span>
                    <span className="text-green-400 font-semibold">+23%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Revenue Growth</span>
                    <span className="text-green-400 font-semibold">+45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Support Efficiency</span>
                    <span className="text-green-400 font-semibold">+60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-900/50 text-yellow-300 border-yellow-700">Testimonials</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Loved by Indian Businesses
            </h2>
            <p className="text-xl text-gray-300">
              See what our customers say about their experience
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-900/50 text-indigo-300 border-indigo-700">Pricing</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your business size
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gray-700 border-gray-600">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-white">Starter</CardTitle>
                <div className="text-3xl font-bold text-white mt-4">₹999<span className="text-sm font-normal text-gray-400">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Up to 1,000 customers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Basic support tickets</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Email campaigns</span>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white" onClick={onGetStarted}>
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-blue-600 text-white shadow-xl scale-105 border-blue-500">
              <CardHeader className="text-center">
                <Badge className="mb-2 bg-white text-blue-600">Most Popular</Badge>
                <CardTitle className="text-xl">Professional</CardTitle>
                <div className="text-3xl font-bold mt-4">₹2,499<span className="text-sm font-normal opacity-80">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4" />
                  <span>Up to 10,000 customers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4" />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4" />
                  <span>Marketing automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4" />
                  <span>Priority support</span>
                </div>
                <Button className="w-full mt-6 bg-white text-blue-600 hover:bg-gray-100" onClick={onGetStarted}>
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-white">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-white mt-4">Custom</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Unlimited customers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Custom integrations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Dedicated support</span>
                </div>
                <Button className="w-full mt-6 border-gray-500 text-gray-300 hover:bg-gray-600 hover:text-white" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of Indian businesses already growing with CRM Pro India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={onGetStarted}>
              Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <PhoneCall className="mr-2 h-4 w-4" />
              Talk to Sales
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm opacity-80">
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              14-day free trial
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              Setup in 5 minutes
            </div>
            <div className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              Bank-level security
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Store className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">CRM Pro India</span>
              </div>
              <p className="text-gray-400 mb-4">
                The leading CRM solution for Indian e-commerce businesses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-blue-400 cursor-pointer transition-colors">Features</div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">Pricing</div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">Integrations</div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">API</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-blue-400 cursor-pointer transition-colors">About</div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">Careers</div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">Contact</div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">Privacy</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Support</h3>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-blue-400 cursor-pointer transition-colors">Help Center</div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">Documentation</div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">Community</div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">Status</div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <div>© 2025 CRM Pro India. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <div className="hover:text-blue-400 cursor-pointer transition-colors">Terms</div>
              <div className="hover:text-blue-400 cursor-pointer transition-colors">Privacy</div>
              <div className="hover:text-blue-400 cursor-pointer transition-colors">Cookies</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
