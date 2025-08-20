'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedCard } from "@/components/AnimatedCard"
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
  const [selectedCard, setSelectedCard] = useState(0)

  const cardExamples = [
    {
      id: 0,
      name: 'Birthday Celebration',
      theme: 'birthday' as const,
      frontImage: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400',
      frontMessage: 'Happy Birthday!',
      insideImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400',
      insideMessage: 'Hope your special day brings you all the happiness you deserve! May this new year of life be filled with joy, laughter, and wonderful memories.',
      recipientName: 'Sarah',
      senderName: 'Your Best Friend',
      includeGame: true
    },
    {
      id: 1,
      name: 'Holiday Wishes',
      theme: 'holiday' as const,
      frontImage: 'https://images.unsplash.com/photo-1512389098783-66b81f86e199?w=400',
      frontMessage: 'Season\'s Greetings!',
      insideImage: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=400',
      insideMessage: 'Wishing you and your loved ones a holiday season filled with warmth, joy, and beautiful moments together.',
      recipientName: 'Family',
      senderName: 'The Johnson Family',
      includeGame: true
    },
    {
      id: 2,
      name: 'Anniversary Love',
      theme: 'anniversary' as const,
      frontImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
      frontMessage: 'Happy Anniversary',
      insideImage: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400',
      insideMessage: 'Another year of love, laughter, and beautiful memories together. Here\'s to many more years of happiness!',
      recipientName: 'My Love',
      senderName: 'Forever Yours',
      includeGame: false
    },
    {
      id: 3,
      name: 'Graduation Pride',
      theme: 'custom' as const,
      frontImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
      frontMessage: 'Congratulations!',
      insideImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400',
      insideMessage: 'Your hard work and dedication have paid off! We\'re so proud of everything you\'ve accomplished.',
      recipientName: 'Graduate',
      senderName: 'Your Proud Family',
      includeGame: true
    }
  ]

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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card Selection Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-birthday-yellow" />
                  Card Examples
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {cardExamples.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => setSelectedCard(card.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedCard === card.id
                        ? 'border-birthday-orange bg-birthday-orange/10'
                        : 'border-gray-200 hover:border-birthday-pink'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        card.theme === 'birthday' ? 'bg-birthday-gradient' :
                        card.theme === 'holiday' ? 'bg-gradient-to-r from-red-500 to-green-600' :
                        card.theme === 'anniversary' ? 'bg-gradient-to-r from-rose-500 to-pink-600' :
                        'bg-gradient-to-r from-blue-500 to-purple-600'
                      } text-white`}>
                        {card.theme === 'birthday' && <Heart className="h-5 w-5" />}
                        {card.theme === 'holiday' && <Sparkles className="h-5 w-5" />}
                        {card.theme === 'anniversary' && <Heart className="h-5 w-5" />}
                        {card.theme === 'custom' && <Star className="h-5 w-5" />}
                      </div>
                      <div>
                        <h4 className="font-semibold">{card.name}</h4>
                        <p className="text-sm text-muted-foreground capitalize">{card.theme} theme</p>
                      </div>
                    </div>
                    {card.includeGame && (
                      <Badge className="mt-2 bg-green-100 text-green-800 text-xs">
                        🎮 Interactive Game
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Features List */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wand2 className="h-5 w-5 mr-2 text-birthday-purple" />
                  Amazing Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <feature.icon className="h-5 w-5 text-birthday-orange mt-1" />
                    <div>
                      <h4 className="font-medium">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Card Display */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardContent>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-display font-bold text-birthday-purple mb-2">
                    {cardExamples[selectedCard].name}
                  </h2>
                  <p className="text-muted-foreground">
                    Click the card to see the magical animation and interactive features
                  </p>
                </div>

                {/* Animated Card Component */}
                <div className="flex justify-center">
                  <AnimatedCard
                    key={selectedCard} // Force re-render when card changes
                    frontImage={cardExamples[selectedCard].frontImage}
                    frontMessage={cardExamples[selectedCard].frontMessage}
                    insideImage={cardExamples[selectedCard].insideImage}
                    insideMessage={cardExamples[selectedCard].insideMessage}
                    recipientName={cardExamples[selectedCard].recipientName}
                    senderName={cardExamples[selectedCard].senderName}
                    theme={cardExamples[selectedCard].theme}
                    includeGame={cardExamples[selectedCard].includeGame}
                  />
                </div>

                {/* Card Details */}
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-3">How It Works:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Click the card front to trigger the magical opening animation</li>
                    <li>Watch as the card flips with 3D effects and particle animations</li>
                    <li>Read the personalized message inside with custom imagery</li>
                    {cardExamples[selectedCard].includeGame && (
                      <li>Play the interactive scratch-off game to reveal a surprise gift</li>
                    )}
                    <li>Use the controls to reset, toggle sound, or share the card</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="mt-6 flex justify-center space-x-4">
              <Button className="bg-birthday-gradient hover:opacity-90 text-white">
                <Wand2 className="h-5 w-5 mr-2" />
                Create Your Own Card
              </Button>
              <Button variant="outline">
                <Calendar className="h-5 w-5 mr-2" />
                Set Up Automation
              </Button>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="mt-16 text-center">
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
      </div>
    </div>
  )
}
