"use client"

import { useAuth } from "@/components/auth-provider"

export default function DebugPage() {
  const { user, loading, needsOnboarding } = useAuth()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Debug Information</h1>
      <div className="space-y-2">
        <p><strong>Loading:</strong> {loading ? "true" : "false"}</p>
        <p><strong>User:</strong> {user ? JSON.stringify(user, null, 2) : "null"}</p>
        <p><strong>Needs Onboarding:</strong> {needsOnboarding ? "true" : "false"}</p>
      </div>
    </div>
  )
}
