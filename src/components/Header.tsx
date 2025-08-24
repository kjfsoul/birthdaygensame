'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Gift,
  Calendar,
  PartyPopper,
  Cake,
  Heart,
  Sparkles,
  User,
  LogIn
} from "lucide-react"
import Link from "next/link"

export function Header() {
  const navItems = [
    { name: "Home", href: "/", icon: Cake },
    { name: "Card Maker", href: "/cards", icon: Heart },
    { name: "Automation", href: "/automation", icon: Sparkles },
    { name: "Party Planner", href: "/party", icon: PartyPopper },
    { name: "Gift Guide", href: "/gifts", icon: Gift },
    { name: "Showcase", href: "/showcase", icon: Calendar },
  ]

  return (
    <>
      <div className="bg-birthday-gradient text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <Link href="/shop" className="hover:text-birthday-yellow transition-colors">
              🎁 Gift Shop
            </Link>
            <Link href="/about" className="hover:text-birthday-yellow transition-colors">
              About Us
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/blog" className="hover:text-birthday-yellow transition-colors">
              Birthday Blog
            </Link>
            <Link href="/community" className="hover:text-birthday-yellow transition-colors">
              Community
            </Link>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-lg border-b-4 border-birthday-orange">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-birthday-card-gradient p-3 rounded-full">
                <Cake className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-display font-bold text-birthday-purple">
                  BirthdayGen
                </h1>
                <p className="text-sm text-muted-foreground">Make Every Birthday Special</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button size="sm" className="bg-birthday-pink hover:bg-birthday-purple text-white" asChild>
                <Link href="/auth">
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </Link>
              </Button>
            </div>
          </div>

          <nav className="hidden md:block border-t border-gray-200">
            <div className="flex items-center justify-center space-x-8 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex flex-col items-center space-y-1 group hover:text-birthday-orange transition-colors"
                >
                  <div className="p-2 rounded-lg group-hover:bg-birthday-yellow/20 transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
