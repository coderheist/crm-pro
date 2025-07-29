"use client"

import { useAuth } from "@/components/auth-provider"
import { SupportTickets } from "@/components/support-tickets"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { NoSSR } from "@/components/no-ssr"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Loader2 } from "lucide-react"

export default function SupportPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/landing")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <NoSSR fallback={
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    }>
      <SidebarProvider defaultOpen={true}>
        <div className="flex h-screen w-full" suppressHydrationWarning>
          <AppSidebar />
          <SidebarInset className="flex-1">
            <DashboardHeader />
            <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 overflow-auto">
              <SupportTickets />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </NoSSR>
  )
}
