"use client"

import { LoginForm } from "@/components/login-form"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { useEffect } from "react"

export default function Auth() {
  const router = useRouter()
  const { user, needsOnboarding } = useAuth()

  useEffect(() => {
    if (user) {
      if (needsOnboarding) {
        router.push("/onboarding")
      } else {
        router.push("/dashboard")
      }
    }
  }, [user, needsOnboarding, router])

  const handleBack = () => {
    router.push("/landing")
  }

  // Don't render login form if user is already authenticated
  if (user) {
    return null
  }

  return <LoginForm onBack={handleBack} />
}
