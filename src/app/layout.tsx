import type { Metadata } from 'next'
import './globals.css'
import { Header } from "@/components/Header"
import ClientBody from "./ClientBody"
import Script from "next/script"

// Force dynamic rendering for the entire application
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'BirthdayGen - Make Every Birthday Special',
  description: 'Create personalized birthday cards, plan amazing parties, and discover perfect gifts with BirthdayGen - your ultimate birthday celebration platform.',
  keywords: 'birthday, cards, party planning, gifts, celebrations, birthday generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          <Header />
          <main>{children}</main>
          <footer className="bg-gray-900 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-display font-bold text-xl text-birthday-yellow mb-4">BirthdayGen</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Making every birthday special with personalized cards, party planning tools, and gift recommendations.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Tools</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li><a href="/cards" className="hover:text-birthday-pink transition-colors">Card Generator</a></li>
                    <li><a href="/party" className="hover:text-birthday-pink transition-colors">Party Planner</a></li>
                    <li><a href="/gifts" className="hover:text-birthday-pink transition-colors">Gift Guide</a></li>
                    <li><a href="/automation" className="hover:text-birthday-pink transition-colors">Automation</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Community</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li><a href="/showcase" className="hover:text-birthday-pink transition-colors">Card Showcase</a></li>
                    <li><a href="/blog" className="hover:text-birthday-pink transition-colors">Birthday Blog</a></li>
                    <li><a href="/community" className="hover:text-birthday-pink transition-colors">Community</a></li>
                    <li><a href="/inspiration" className="hover:text-birthday-pink transition-colors">Inspiration</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Company</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li><a href="/about" className="hover:text-birthday-pink transition-colors">About Us</a></li>
                    <li><a href="/contact" className="hover:text-birthday-pink transition-colors">Contact</a></li>
                    <li><a href="/privacy" className="hover:text-birthday-pink transition-colors">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:text-birthday-pink transition-colors">Terms of Service</a></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
                <p>&copy; 2025 BirthdayGen. All rights reserved. Made with ❤️ for birthday celebrations worldwide.</p>
              </div>
            </div>
          </footer>
        </ClientBody>
      </body>
    </html>
  )
}
