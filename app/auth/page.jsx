"use client"

import { LoginForm } from "@/components/login-form"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { useEffect } from "react"

export default function Auth() {
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      // Since we removed onboarding, always redirect to dashboard
      router.push("/dashboard")
    }
  }, [user, router])

  const handleBack = () => {
    router.push("/landing")
  }

  // Don't render login form if user is already authenticated
  if (user) {
    return null
  }

  return <LoginForm onBack={handleBack} />
}
