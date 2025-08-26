import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const dynamic = 'force-dynamic'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-birthday-purple mb-4">
            BirthdayGen Privacy Policy
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Effective Date: August 25, 2025</span>
            <span>•</span>
            <span>Version: 1.0</span>
          </div>
        </div>

        <Card className="mb-8 border-birthday-pink/20 shadow-lg">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed mb-6">
              BirthdayGen celebrates your uniqueness through personalized birthday messages, gifting insights, and seasonal profiles. To make this magic happen, we collect information like your name, birthday, astrological details, preferences, and gift recipients.
            </p>
            
            <div className="space-y-4 mb-6">
              <h3 className="font-semibold text-birthday-purple">We use your data to:</h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-birthday-pink mr-2">•</span>
                  <span>Personalize birthday greetings and holiday card suggestions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-birthday-pink mr-2">•</span>
                  <span>Recommend gifts, playlists, or party ideas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-birthday-pink mr-2">•</span>
                  <span>Deliver AI-powered celebrations and astrology insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-birthday-pink mr-2">•</span>
                  <span>Improve our service based on anonymized usage</span>
                </li>
              </ul>
            </div>

            <div className="bg-birthday-purple/5 p-4 rounded-lg">
              <p className="font-semibold text-birthday-purple mb-2">Your data is yours.</p>
              <p>You can manage or delete it anytime via your account settings.</p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-display font-bold text-birthday-purple mb-4">
              1. What We Collect (And Why)
            </h2>
            <p className="mb-4">
              BirthdayGen exists to help you celebrate yourself and others. We collect limited personal data to generate fun, meaningful, and personalized digital and physical experiences.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-birthday-pink/20">
                    <th className="text-left p-3 font-semibold text-birthday-purple">Data Type</th>
                    <th className="text-left p-3 font-semibold text-birthday-purple">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Name & Email</td>
                    <td className="p-3">Create and manage your account</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Birth Date & Sign</td>
                    <td className="p-3">Personalize messages, astrology blurbs, and visuals</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Recipient Info</td>
                    <td className="p-3">Let you send cards, gifts, and invites to friends/family</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">AI-Generated Messages</td>
                    <td className="p-3">Build custom greetings and surprise ideas</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Gift Preferences</td>
                    <td className="p-3">Suggest gifts, colors, styles, and seasonal bundles</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Device & Usage Data</td>
                    <td className="p-3">Help you stay logged in, track behavior, and troubleshoot bugs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-birthday-purple mb-4">
              2. Contact Imports & Gifting to Others
            </h2>
            <p className="mb-4">
              You can upload contacts to send cards, reminders, or party invites.
            </p>
            <div className="space-y-2 ml-6">
              <p className="flex items-start">
                <span className="text-birthday-pink mr-2">•</span>
                <span>You confirm you have permission to contact or celebrate these recipients</span>
              </p>
              <p className="flex items-start">
                <span className="text-birthday-pink mr-2">•</span>
                <span>We never sell or share your address book</span>
              </p>
              <p className="flex items-start">
                <span className="text-birthday-pink mr-2">•</span>
                <span>You can delete contact data at any time</span>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-birthday-purple mb-4">
              8. Data Rights
            </h2>
            <p className="mb-4">You may:</p>
            <div className="space-y-2 ml-6 mb-4">
              <p className="flex items-start">
                <span className="text-birthday-pink mr-2">•</span>
                <span>Access, edit, or delete your profile and any recipient info</span>
              </p>
              <p className="flex items-start">
                <span className="text-birthday-pink mr-2">•</span>
                <span>Request data export</span>
              </p>
              <p className="flex items-start">
                <span className="text-birthday-pink mr-2">•</span>
                <span>Opt out of emails or promotional recommendations</span>
              </p>
              <p className="flex items-start">
                <span className="text-birthday-pink mr-2">•</span>
                <span>Request AI card content be removed or blocked</span>
              </p>
            </div>
            <p>
              Visit your account settings or email{" "}
              <a href="mailto:admin@birthdaygen.com" className="text-birthday-purple hover:underline">
                admin@birthdaygen.com
              </a>
            </p>
          </section>
        </div>

        <Card className="mt-12 bg-birthday-gradient text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">
              Questions About Your Privacy?
            </h2>
            <p className="mb-6">
              We're here to help. Contact us anytime about your data and privacy concerns.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-birthday-purple hover:bg-birthday-yellow hover:text-white"
              asChild
            >
              <a href="mailto:admin@birthdaygen.com">Contact Privacy Team</a>
            </Button>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/" className="text-birthday-purple hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}