"use client"

import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date()
      const hours = now.getHours()
      setIsOpen(hours >= 16 && hours < 20)
    }

    checkOpenStatus()
    const interval = setInterval(checkOpenStatus, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-card via-card to-secondary/50 border-b border-border/50 shadow-lg shadow-primary/5">
      <div className="flex items-center justify-between px-4 py-4 max-w-lg mx-auto">
        <div className="flex items-center gap-2">
          <div className="relative">
            <span className="text-3xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              ElbEats
            </span>
            <Sparkles className="absolute -top-1 -right-4 w-4 h-4 text-primary animate-pulse" />
          </div>
        </div>
        <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
          <span
            className={`inline-block w-2.5 h-2.5 rounded-full ${
              isOpen 
                ? "bg-primary shadow-lg shadow-primary/50 animate-pulse" 
                : "bg-destructive shadow-lg shadow-destructive/50"
            }`}
          />
          <span className={`text-sm font-semibold ${isOpen ? "text-primary" : "text-destructive"}`}>
            {isOpen ? "Jetzt offen!" : "Geschlossen"} 
          </span>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-60" />
    </header>
  )
}
