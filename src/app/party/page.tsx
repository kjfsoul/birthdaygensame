import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  PartyPopper,
  Calendar,
  MapPin,
  Users,
  DollarSign,
  CheckCircle,
  Sparkles,
  Clock,
  Music,
  Camera,
  UtensilsCrossed,
  Gift
} from "lucide-react"

export const dynamic = 'force-dynamic'

export default function PartyPlannerPage() {
  const steps = [
    { number: 1, title: 'Basic Details', icon: PartyPopper, completed: true },
    { number: 2, title: 'Theme & Style', icon: Sparkles, completed: false },
    { number: 3, title: 'Checklist', icon: CheckCircle, completed: false },
    { number: 4, title: 'Final Review', icon: CheckCircle, completed: false }
  ]

  const checklist = [
    { item: 'Send invitations', category: 'Planning', completed: false, priority: 'high' },
    { item: 'Book venue', category: 'Venue', completed: true, priority: 'high' },
    { item: 'Order birthday cake', category: 'Food', completed: false, priority: 'high' },
    { item: 'Buy decorations', category: 'Decorations', completed: false, priority: 'medium' },
    { item: 'Plan party games', category: 'Entertainment', completed: false, priority: 'medium' },
    { item: 'Prepare party favors', category: 'Gifts', completed: false, priority: 'low' }
  ]

  const themes = [
    { name: 'Tropical Paradise', icon: '🌺', color: 'bg-green-100 border-green-300' },
    { name: 'Superhero Adventure', icon: '🦸', color: 'bg-blue-100 border-blue-300' },
    { name: 'Princess Fantasy', icon: '👑', color: 'bg-pink-100 border-pink-300' },
    { name: 'Space Odyssey', icon: '🚀', color: 'bg-purple-100 border-purple-300' }
  ]

  const completedItems = checklist.filter(item => item.completed).length
  const progress = (completedItems / checklist.length) * 100

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-birthday-card-gradient text-white mb-4">
            <PartyPopper className="h-4 w-4 mr-2" />
            Party Planning Wizard
          </Badge>
          <h1 className="text-5xl font-display font-bold text-birthday-purple mb-4">
            Plan the Perfect Party
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our step-by-step guide helps you organize an unforgettable birthday celebration
            with ease and style.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center space-x-3 p-4 rounded-lg transition-all ${
                      step.completed
                        ? 'bg-birthday-gradient text-white'
                        : 'bg-white border border-gray-200 text-gray-500'
                    }`}
                  >
                    <step.icon className="h-5 w-5" />
                    <span className="font-medium">{step.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-8 h-px bg-gray-300 mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Party Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PartyPopper className="h-5 w-5 mr-2 text-birthday-orange" />
                  Party Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Party Title</label>
                    <input
                      type="text"
                      placeholder="e.g., Sarah's 25th Birthday Bash"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Date</label>
                    <input
                      type="date"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Time</label>
                    <input
                      type="time"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Expected Guests</label>
                    <input
                      type="number"
                      placeholder="20"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <input
                    type="text"
                    placeholder="Enter party venue or address"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Theme Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-birthday-purple" />
                  Choose Your Theme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {themes.map((theme) => (
                    <div
                      key={theme.name}
                      className={`p-6 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 ${theme.color}`}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-3">{theme.icon}</div>
                        <h3 className="font-semibold text-lg">{theme.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Checklist */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-birthday-green" />
                    Party Checklist
                  </span>
                  <Button size="sm" variant="outline">+ Add Task</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm text-muted-foreground">
                      {completedItems} of {checklist.length} completed
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-birthday-gradient h-3 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  {checklist.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-4 rounded-lg border transition-all ${
                        item.completed
                          ? 'bg-green-50 border-green-200'
                          : 'bg-white border-gray-200'
                      }`}
                    >
                      <CheckCircle className={`h-6 w-6 ${item.completed ? 'text-green-600' : 'text-gray-400'}`} />
                      <div className="flex-1">
                        <p className={`font-medium ${item.completed ? 'line-through text-gray-500' : ''}`}>
                          {item.item}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {item.category}
                          </Badge>
                          <Badge className={`text-xs ${
                            item.priority === 'high' ? 'bg-red-100 text-red-800' :
                            item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {item.priority}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-birthday-yellow" />
                  Party Planning Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-birthday-blue mt-1" />
                  <div>
                    <h4 className="font-medium">Plan Ahead</h4>
                    <p className="text-sm text-muted-foreground">Start planning 2-3 weeks in advance for best results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-birthday-green mt-1" />
                  <div>
                    <h4 className="font-medium">Guest List</h4>
                    <p className="text-sm text-muted-foreground">Confirm RSVPs 1 week before the party</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Music className="h-5 w-5 text-birthday-pink mt-1" />
                  <div>
                    <h4 className="font-medium">Entertainment</h4>
                    <p className="text-sm text-muted-foreground">Have backup activities for different age groups</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Planning Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: 'Venue & Setup', icon: MapPin, color: 'text-birthday-pink' },
                  { name: 'Food & Drinks', icon: UtensilsCrossed, color: 'text-birthday-orange' },
                  { name: 'Entertainment', icon: Music, color: 'text-birthday-purple' },
                  { name: 'Decorations', icon: Sparkles, color: 'text-birthday-blue' },
                  { name: 'Photography', icon: Camera, color: 'text-birthday-green' },
                  { name: 'Party Favors', icon: Gift, color: 'text-birthday-yellow' }
                ].map((category) => (
                  <div key={category.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
