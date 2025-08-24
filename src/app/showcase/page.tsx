import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  Wand2,
  Star,
  Heart,
  Gift,
  Calendar,
  Users,
  Palette,
  Music,
  Gamepad2
} from "lucide-react"

export default function ShowcasePage() {
  const features = [
    {
      icon: Wand2,
      title: 'Magical Animations',
      description: 'Cards open with stunning 3D flip animations and sparkle effects'
    },
    {
      icon: Palette,
      title: 'Custom Themes',
      description: 'Beautiful themes for birthdays, holidays, anniversaries, and more'
    },
    {
      icon: Gamepad2,
      title: 'Interactive Games',
      description: 'Scratch-off surprises and mini-games add extra excitement'
    },
    {
      icon: Music,
      title: 'Sound Effects',
      description: 'Immersive audio creates a truly magical experience'
    },
    {
      icon: Users,
      title: 'Personalization',
      description: 'Every card is tailored to the recipient with custom messages'
    },
    {
      icon: Gift,
      title: 'Surprise Gifts',
      description: 'Hidden rewards and gift cards revealed through games'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-birthday-gradient text-white mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            Experience the Magic
          </Badge>
          <h1 className="text-5xl font-display font-bold text-birthday-purple mb-4">
            Animated Card Showcase
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the future of digital greeting cards. Our magical animated cards create
            unforgettable moments with stunning visuals, interactive games, and personalized touches.
          </p>
        </div>

        {/* Demo Card */}
        <div className="max-w-md mx-auto mb-16">
          <Card className="bg-birthday-gradient text-white overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="flex justify-center space-x-2 mb-4">
                  <Heart className="h-8 w-8 animate-bounce" />
                  <Star className="h-10 w-10 animate-bounce [animation-delay:0.2s]" />
                  <Gift className="h-8 w-8 animate-bounce [animation-delay:0.4s]" />
                </div>
                <h2 className="text-3xl font-display font-bold mb-2">Happy Birthday!</h2>
                <h3 className="text-2xl font-display font-semibold text-birthday-yellow">Sarah!</h3>
              </div>

              <p className="text-lg mb-6 opacity-90">
                Hope your special day brings you all the happiness you deserve!
              </p>

              <div className="flex justify-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-birthday-yellow" />
                <Heart className="h-6 w-6 text-birthday-yellow" />
                <Sparkles className="h-6 w-6 text-birthday-yellow" />
              </div>
              <p className="text-lg font-medium">With love, Your Best Friend</p>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-birthday-purple mb-8 text-center">
            Amazing Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-birthday-orange mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-birthday-purple mb-8">
            Powered by Advanced Technology
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-birthday-gradient p-3 rounded-full w-fit mx-auto mb-4">
                  <Wand2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">AI Image Generation</h3>
                <p className="text-sm text-muted-foreground">SDXL & Automatic1111 integration</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-birthday-card-gradient p-3 rounded-full w-fit mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">3D Animations</h3>
                <p className="text-sm text-muted-foreground">CSS3 transforms & WebGL</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-birthday-feature-gradient p-3 rounded-full w-fit mx-auto mb-4">
                  <Gamepad2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">Interactive Canvas</h3>
                <p className="text-sm text-muted-foreground">HTML5 Canvas for mini-games</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">Personalization</h3>
                <p className="text-sm text-muted-foreground">ML-powered customization</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex justify-center space-x-4">
          <Button className="bg-birthday-gradient hover:opacity-90 text-white" size="lg">
            <Wand2 className="h-5 w-5 mr-2" />
            Create Your Own Card
          </Button>
          <Button variant="outline" size="lg">
            <Calendar className="h-5 w-5 mr-2" />
            Set Up Automation
          </Button>
        </div>
      </div>
    </div>
  )
}
