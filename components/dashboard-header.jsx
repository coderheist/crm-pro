"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/components/auth-provider"

export function DashboardHeader() {
  const { user } = useAuth()

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-gradient-to-r from-slate-50/50 to-blue-50/50 dark:from-slate-900/50 dark:to-blue-900/20 border-b border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm" suppressHydrationWarning>
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors" suppressHydrationWarning />
        <Separator orientation="vertical" className="mr-2 h-4 bg-gradient-to-b from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-slate-700 dark:text-slate-300 font-medium">Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="ml-auto flex items-center gap-2 px-4">
        <div className="relative hidden md:block" suppressHydrationWarning>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" />
          <Input 
            placeholder="Search customers, orders..." 
            className="pl-9 w-64 bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 backdrop-blur-sm transition-all duration-200 placeholder:text-slate-400 dark:placeholder:text-slate-500" 
            suppressHydrationWarning
          />
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors relative"
          suppressHydrationWarning
        >
          <Bell className="h-4 w-4 text-slate-600 dark:text-slate-400" />
          <div className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
        </Button>
        <Separator orientation="vertical" className="mx-2 h-4 bg-gradient-to-b from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700" />
        <div className="flex items-center gap-3" suppressHydrationWarning>
          <div className="hidden md:block text-right">
            <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{user?.name}</div>
            <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">Administrator</div>
          </div>
          <Avatar className="h-8 w-8 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
            <AvatarImage src={user?.photoURL} />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold">
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
