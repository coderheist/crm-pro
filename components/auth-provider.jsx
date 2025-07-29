"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { auth, googleProvider } from "@/lib/firebase"
import { signInWithPopup, signOut } from "firebase/auth"

const AuthContext = createContext(undefined)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Only run on client side to avoid hydration mismatch
    if (typeof window === 'undefined') {
      setLoading(false)
      return
    }
    
    const token = localStorage.getItem('crm_token')
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]))
        if (decodedToken.exp * 1000 > Date.now()) {
          setUser(decodedToken)
          // Since we removed role selection, no need to check for onboarding
        } else {
          localStorage.removeItem('crm_token')
          localStorage.removeItem('crm_user')
        }
      } catch (error) {
        console.error('Error decoding token:', error)
        localStorage.removeItem('crm_token')
        localStorage.removeItem('crm_user')
      }
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (data.success) {
        setUser(data.user)
        if (typeof window !== "undefined") {
          localStorage.setItem("crm_token", data.token)
          localStorage.setItem("crm_user", JSON.stringify(data.user))
        }
        return { success: true }
      } else {
        return { success: false, error: data.error }
      }
    } catch (error) {
      console.error("Login error:", error)
      return { success: false, error: "Network error occurred" }
    }
  }

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const { user: firebaseUser } = result

      // Send user data to our backend
      const response = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: firebaseUser.email,
          name: firebaseUser.displayName,
          uid: firebaseUser.uid,
          photoURL: firebaseUser.photoURL,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setUser(data.user)
        if (typeof window !== "undefined") {
          localStorage.setItem("crm_token", data.token)
          localStorage.setItem("crm_user", JSON.stringify(data.user))
        }
        
        // No longer need onboarding since everyone gets admin role
        
        return { success: true }
      } else {
        // Sign out from Firebase if backend auth failed
        await signOut(auth)
        return { success: false, error: data.error }
      }
    } catch (error) {
      console.error("Google login error:", error)
      return { success: false, error: "Failed to sign in with Google" }
    }
  }

  const signup = async (name, email, password) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await response.json()

      if (data.success) {
        setUser(data.user)
        if (typeof window !== "undefined") {
          localStorage.setItem("crm_token", data.token)
          localStorage.setItem("crm_user", JSON.stringify(data.user))
        }
        return { success: true }
      } else {
        return { success: false, error: data.error }
      }
    } catch (error) {
      console.error("Signup error:", error)
      return { success: false, error: "Network error occurred" }
    }
  }

  const updateUserRole = async (userId, newRole) => {
    try {
      const token = localStorage.getItem("crm_token")
      if (!token) {
        return { success: false, error: "Not authenticated" }
      }

      const response = await fetch("/api/auth/roles", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ userId, newRole }),
      })

      const data = await response.json()
      return data
    } catch (error) {
      console.error("Role update error:", error)
      return { success: false, error: "Network error occurred" }
    }
  }

  const getAllUsers = async () => {
    try {
      const token = localStorage.getItem("crm_token")
      if (!token) {
        return { success: false, error: "Not authenticated" }
      }

      const response = await fetch("/api/auth/roles", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })

      const data = await response.json()
      return data
    } catch (error) {
      console.error("Get users error:", error)
      return { success: false, error: "Network error occurred" }
    }
  }

  const logout = async () => {
    try {
      // Sign out from Firebase if user was signed in with Google
      if (user?.provider === "google") {
        await signOut(auth)
      }
    } catch (error) {
      console.error("Firebase signout error:", error)
    } finally {
      setUser(null)
      if (typeof window !== "undefined") {
        localStorage.removeItem("crm_token")
        localStorage.removeItem("crm_user")
      }
    }
  }

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        login, 
        loginWithGoogle, 
        signup, 
        logout, 
        updateUserRole, 
        getAllUsers, 
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
