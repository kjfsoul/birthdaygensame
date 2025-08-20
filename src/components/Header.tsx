'use client'

import { Button } from "@/components/ui/button"
import {
  Gift,
  Calendar,
  PartyPopper,
  Cake,
  Heart,
  Sparkles,
  User,
  LogIn,
  Menu
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      {/* Top bar with logo and shop links */}
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

      {/* Main navigation */}
      <header className="bg-white shadow-lg border-b-4 border-birthday-orange">
        <div className="max-w-7xl mx-auto px-4">
          {/* Logo and mobile menu button */}
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

            {/* Desktop auth buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button size="sm" className="bg-birthday-pink hover:bg-birthday-purple text-white">
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Desktop navigation */}
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

          {/* Mobile navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden border-t border-gray-200 py-4">
              <div className="grid grid-cols-2 gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-birthday-yellow/20 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5 text-birthday-orange" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 flex space-x-3">
                <Button variant="ghost" size="sm" className="flex-1">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <Button size="sm" className="flex-1 bg-birthday-pink hover:bg-birthday-purple text-white">
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
