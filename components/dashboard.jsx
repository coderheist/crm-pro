"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardOverview } from "@/components/dashboard-overview"
import { useAuth } from "@/components/auth-provider"

export function Dashboard() {
  const { user } = useAuth()

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <DashboardHeader />
          <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 overflow-auto">
            <DashboardOverview />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
