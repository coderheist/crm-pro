"use client"

import { LandingPage } from "@/components/landing-page"
import { useRouter } from "next/navigation"

export default function Landing() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push("/auth")
  }

  return <LandingPage onGetStarted={handleGetStarted} />
}
