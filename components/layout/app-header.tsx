"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = currentTime.getHours().toString().padStart(2, "0")
  const minutes = currentTime.getMinutes().toString().padStart(2, "0")
  const seconds = currentTime.getSeconds().toString().padStart(2, "0")
  const ampm = currentTime.get

  return (
    <div className="flex items-center justify-center space-x-1">
      <div className="flex items-center">
        {hours.split("").map((digit, index) => (
          <Card
            key={`hour-${index}`}
            className="w-8 h-10 mx-0.5 flex items-center justify-center bg-muted shadow-md"
          >
            <span className="text-xl font-bold text-foreground">{digit}</span>
          </Card>
        ))}
      </div>
      <div className="text-xl font-bold text-foreground">:</div>
      <div className="flex items-center">
        {minutes.split("").map((digit, index) => (
          <Card
            key={`min-${index}`}
            className="w-8 h-10 mx-0.5 flex items-center justify-center bg-muted shadow-md"
          >
            <span className="text-xl font-bold text-foreground">{digit}</span>
          </Card>
        ))}
      </div>
      <div className="text-xl font-bold text-foreground">:</div>
      <div className="flex items-center">
        {seconds.split("").map((digit, index) => (
          <Card
            key={`sec-${index}`}
            className="w-8 h-10 mx-0.5 flex items-center justify-center bg-muted shadow-md"
          >
            <span className="text-xl font-bold text-foreground">{digit}</span>
          </Card>
        ))}
      </div>
    </div>
  )
}

interface AppHeaderProps {
  onMenuClick: () => void
}

export function AppHeader({ onMenuClick }: AppHeaderProps) {
  // Mock user data
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "user",
  }

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b bg-background/95 backdrop-blur px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open sidebar</span>
      </Button>

      {/* Separator */}
      <div className="h-6 w-px bg-border lg:hidden" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex flex-1 h-full justify-center items-center">
          <DigitalClock />
        </div>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
