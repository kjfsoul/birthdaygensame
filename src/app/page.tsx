import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Gift,
  Calendar,
  PartyPopper,
  Cake,
  Heart,
  Sparkles,
  Star,
  Users,
  Clock,
  ArrowRight,
  Zap
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const featuredTools = [
    {
      title: "Birthday Card Generator",
      description: "Create stunning, personalized birthday cards with our magical generator",
      icon: Heart,
      gradient: "bg-birthday-gradient",
      href: "/cards",
      badge: "Most Popular"
    },
    {
      title: "Party Planning Wizard",
      description: "Plan the perfect birthday party with our step-by-step guide",
      icon: PartyPopper,
      gradient: "bg-birthday-card-gradient",
      href: "/party",
      badge: "New"
    },
    {
      title: "Gift Recommendation Engine",
      description: "Discover the perfect gifts based on age, interests, and personality",
      icon: Gift,
      gradient: "bg-birthday-feature-gradient",
      href: "/gifts",
      badge: "AI Powered"
    }
  ]

  const quickTools = [
    {
      title: "Birthday Countdown",
      description: "Count down to your special day",
      icon: Clock,
      color: "text-birthday-pink",
      href: "/countdown"
    },
    {
      title: "Memory Sharing",
      description: "Share your favorite birthday moments",
      icon: Sparkles,
      color: "text-birthday-purple",
      href: "/memories"
    },
    {
      title: "Birthday Trivia",
      description: "Fun facts about your birth date",
      icon: Star,
      color: "text-birthday-orange",
      href: "/trivia"
    },
    {
      title: "Group Celebrations",
      description: "Coordinate with friends and family",
      icon: Users,
      color: "text-birthday-blue",
      href: "/groups"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="bg-birthday-gradient py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6">
                <Badge className="bg-white/20 text-white border-white/30 mb-4">
                  ✨ Make Every Birthday Magical
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight">
                  Create Unforgettable
                  <span className="text-birthday-yellow block">Birthday Moments</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  From personalized cards to perfect party planning, BirthdayGen helps you celebrate
                  life's special moments with creativity and joy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-birthday-purple hover:bg-birthday-yellow hover:text-white text-lg px-8 animate-pulse-glow" asChild>
                    <Link href="/cards">
                      <Zap className="h-5 w-5 mr-2" />
                      Start Creating
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-birthday-purple" asChild>
                    <Link href="/showcase">
                      Explore Tools
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="animate-bounce-gentle bg-white/10 border-white/20 text-white">
                    <CardHeader className="pb-3">
                      <Cake className="h-8 w-8 text-birthday-yellow mb-2" />
                      <CardTitle className="text-lg">1,000+</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-white/80">Cards Created Today</p>
                    </CardContent>
                  </Card>

                  <Card className="animate-bounce-gentle [animation-delay:0.5s] bg-white/10 border-white/20 text-white">
                    <CardHeader className="pb-3">
                      <PartyPopper className="h-8 w-8 text-birthday-yellow mb-2" />
                      <CardTitle className="text-lg">50K+</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-white/80">Parties Planned</p>
                    </CardContent>
                  </Card>

                  <Card className="animate-bounce-gentle [animation-delay:1s] bg-white/10 border-white/20 text-white">
                    <CardHeader className="pb-3">
                      <Gift className="h-8 w-8 text-birthday-yellow mb-2" />
                      <CardTitle className="text-lg">25K+</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-white/80">Perfect Gifts Found</p>
                    </CardContent>
                  </Card>

                  <Card className="animate-bounce-gentle [animation-delay:1.5s] bg-white/10 border-white/20 text-white">
                    <CardHeader className="pb-3">
                      <Heart className="h-8 w-8 text-birthday-yellow mb-2" />
                      <CardTitle className="text-lg">100K+</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-white/80">Happy Birthdays</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-birthday-purple mb-4">
              Featured Birthday Tools
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to create magical birthday experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredTools.map((tool, index) => (
              <Link href={tool.href} key={tool.title} className="group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 overflow-hidden">
                  <div className={`${tool.gradient} p-6 text-white relative`}>
                    {tool.badge && (
                      <Badge className="absolute top-4 right-4 bg-white/20 text-white border-white/30">
                        {tool.badge}
                      </Badge>
                    )}
                    <tool.icon className="h-12 w-12 mb-4" />
                    <h3 className="text-2xl font-display font-bold mb-2">{tool.title}</h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{tool.description}</p>
                    <Button className="w-full group-hover:bg-birthday-orange group-hover:text-white">
                      Get Started
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tools Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-birthday-purple mb-4">
              Quick Birthday Tools
            </h2>
            <p className="text-xl text-muted-foreground">
              Fast access to your favorite birthday features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTools.map((tool) => (
              <Link href={tool.href} key={tool.title} className="group">
                <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className={`mx-auto p-4 rounded-full bg-gray-100 w-fit group-hover:scale-110 transition-transform`}>
                      <tool.icon className={`h-8 w-8 ${tool.color}`} />
                    </div>
                    <CardTitle className="text-lg font-display">{tool.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-birthday-feature-gradient text-white overflow-hidden">
            <CardContent className="p-12">
              <h2 className="text-4xl font-display font-bold mb-4">
                Never Miss a Birthday Again! 🎉
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get birthday reminders, party planning tips, and exclusive templates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white"
                />
                <Button size="lg" className="bg-white text-birthday-blue hover:bg-birthday-yellow hover:text-white">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-4">
                Join 100,000+ birthday enthusiasts! Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
