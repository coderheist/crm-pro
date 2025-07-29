"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useAuth } from "@/components/auth-provider"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  BarChart3,
  Users,
  ShoppingCart,
  MessageSquare,
  Mail,
  LogOut,
  Store,
  Home,
  UserCog,
  ChevronUp,
} from "lucide-react"

export function AppSidebar() {
  const { user, logout } = useAuth()
  const pathname = usePathname()

  const getMenuItems = () => {
    const baseItems = [
      {
        title: "Overview",
        url: "/",
        icon: Home,
        roles: ["admin", "marketing_manager", "support_agent", "viewer"],
      },
      {
        title: "Customers",
        url: "/customers",
        icon: Users,
        roles: ["admin", "marketing_manager", "support_agent", "viewer"],
      },
      {
        title: "Orders",
        url: "/orders",
        icon: ShoppingCart,
        roles: ["admin", "marketing_manager", "support_agent", "viewer"],
      },
      {
        title: "Support Tickets",
        url: "/support",
        icon: MessageSquare,
        roles: ["admin", "support_agent"],
      },
      {
        title: "Marketing",
        url: "/marketing",
        icon: Mail,
        roles: ["admin", "marketing_manager"],
      },
      {
        title: "Analytics",
        url: "/analytics",
        icon: BarChart3,
        roles: ["admin", "marketing_manager"],
      },
      {
        title: "User Management",
        url: "/users",
        icon: UserCog,
        roles: ["admin"],
      },
    ]

    // Since everyone is admin now, return all items
    return baseItems
  }

  return (
    <Sidebar collapsible="icon" className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border-r border-slate-200/50 dark:border-slate-700/50">
      <SidebarHeader className="border-b border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-r from-blue-50/50 to-white dark:from-blue-950/30 dark:to-slate-900">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="flex items-center gap-2">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md">
                  <Store className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-slate-800 dark:text-slate-100">India E-Commerce</span>
                  <span className="truncate text-xs text-blue-600 dark:text-blue-400 font-medium">CRM Portal</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-950/50">
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-600 dark:text-slate-400 font-semibold px-4 py-2">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 px-2">
              {getMenuItems().map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={pathname === item.url}
                    className={`
                      rounded-lg transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-950/30
                      ${pathname === item.url 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md hover:from-blue-600 hover:to-blue-700' 
                        : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                      }
                    `}
                  >
                    <Link href={item.url} className="flex items-center gap-2 w-full">
                      <item.icon className="size-4" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-r from-slate-50/50 to-white dark:from-slate-950/50 dark:to-slate-900">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-blue-50 dark:data-[state=open]:bg-blue-950/30 data-[state=open]:text-blue-600 dark:data-[state=open]:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors rounded-lg"
                  suppressHydrationWarning
                >
                  <Avatar className="h-8 w-8 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                    <AvatarFallback className="rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold">
                      {user?.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("") || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold text-slate-700 dark:text-slate-200">{user?.name}</span>
                    <span className="truncate text-xs text-blue-600 dark:text-blue-400 font-medium">Administrator</span>
                  </div>
                  <ChevronUp className="ml-auto size-4 text-slate-500 dark:text-slate-400" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-slate-200 dark:border-slate-700"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem 
                  onClick={logout}
                  className="hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
