'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  PartyPopper,
  Calendar,
  MapPin,
  Users,
  DollarSign,
  CheckCircle,
  Circle,
  Sparkles,
  Clock,
  Music,
  Camera,
  UtensilsCrossed,
  Gift,
  Wand2,
  Plus,
  ChevronRight,
  Star
} from "lucide-react"

interface ChecklistItem {
  id: string
  item: string
  category: string
  completed: boolean
  priority: 'high' | 'medium' | 'low'
}

export default function PartyPlannerPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [partyData, setPartyData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    theme: '',
    guestCount: '',
    budget: '',
    notes: ''
  })

  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    { id: '1', item: 'Send invitations', category: 'Planning', completed: false, priority: 'high' },
    { id: '2', item: 'Book venue', category: 'Venue', completed: false, priority: 'high' },
    { id: '3', item: 'Order birthday cake', category: 'Food', completed: false, priority: 'high' },
    { id: '4', item: 'Buy decorations', category: 'Decorations', completed: false, priority: 'medium' },
    { id: '5', item: 'Plan party games', category: 'Entertainment', completed: false, priority: 'medium' },
    { id: '6', item: 'Prepare party favors', category: 'Gifts', completed: false, priority: 'low' }
  ])

  const themes = [
    { name: 'Tropical Paradise', icon: '🌺', color: 'bg-green-100 border-green-300' },
    { name: 'Superhero Adventure', icon: '🦸', color: 'bg-blue-100 border-blue-300' },
    { name: 'Princess Fantasy', icon: '👑', color: 'bg-pink-100 border-pink-300' },
    { name: 'Space Odyssey', icon: '🚀', color: 'bg-purple-100 border-purple-300' },
    { name: 'Vintage Carnival', icon: '🎪', color: 'bg-red-100 border-red-300' },
    { name: 'Garden Tea Party', icon: '🌸', color: 'bg-yellow-100 border-yellow-300' }
  ]

  const steps = [
    { number: 1, title: 'Basic Details', icon: PartyPopper },
    { number: 2, title: 'Theme & Style', icon: Sparkles },
    { number: 3, title: 'Checklist', icon: CheckCircle },
    { number: 4, title: 'Final Review', icon: Star }
  ]

  const toggleChecklistItem = (id: string) => {
    setChecklist(prev => prev.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  const addChecklistItem = () => {
    const newItem: ChecklistItem = {
      id: Date.now().toString(),
      item: 'New task',
      category: 'Custom',
      completed: false,
      priority: 'medium'
    }
    setChecklist(prev => [...prev, newItem])
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

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
                      currentStep >= step.number
                        ? 'bg-birthday-gradient text-white'
                        : 'bg-white border border-gray-200 text-gray-500'
                    }`}
                  >
                    <step.icon className="h-5 w-5" />
                    <span className="font-medium">{step.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <ChevronRight className="h-5 w-5 mx-2 text-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Basic Details */}
            {currentStep === 1 && (
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
                      <Input
                        placeholder="e.g., Sarah's 25th Birthday Bash"
                        value={partyData.title}
                        onChange={(e) => setPartyData(prev => ({ ...prev, title: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Date</label>
                      <Input
                        type="date"
                        value={partyData.date}
                        onChange={(e) => setPartyData(prev => ({ ...prev, date: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Time</label>
                      <Input
                        type="time"
                        value={partyData.time}
                        onChange={(e) => setPartyData(prev => ({ ...prev, time: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Expected Guests</label>
                      <Input
                        type="number"
                        placeholder="20"
                        value={partyData.guestCount}
                        onChange={(e) => setPartyData(prev => ({ ...prev, guestCount: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Location</label>
                    <Input
                      placeholder="Enter party venue or address"
                      value={partyData.location}
                      onChange={(e) => setPartyData(prev => ({ ...prev, location: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Budget (optional)</label>
                    <Input
                      type="number"
                      placeholder="500"
                      value={partyData.budget}
                      onChange={(e) => setPartyData(prev => ({ ...prev, budget: e.target.value }))}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Theme Selection */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-birthday-purple" />
                    Choose Your Theme
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {themes.map((theme) => (
                      <div
                        key={theme.name}
                        onClick={() => setPartyData(prev => ({ ...prev, theme: theme.name }))}
                        className={`p-6 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 ${
                          partyData.theme === theme.name
                            ? 'border-birthday-orange bg-birthday-orange/10'
                            : theme.color
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-4xl mb-3">{theme.icon}</div>
                          <h3 className="font-semibold text-lg">{theme.name}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Additional Notes</label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-birthday-orange focus:border-birthday-orange"
                      rows={3}
                      placeholder="Any special requests or ideas for your party..."
                      value={partyData.notes}
                      onChange={(e) => setPartyData(prev => ({ ...prev, notes: e.target.value }))}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Checklist */}
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-birthday-green" />
                      Party Checklist
                    </span>
                    <Button onClick={addChecklistItem} size="sm" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Task
                    </Button>
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
                    {checklist.map((item) => (
                      <div
                        key={item.id}
                        className={`flex items-center space-x-3 p-4 rounded-lg border transition-all ${
                          item.completed
                            ? 'bg-green-50 border-green-200'
                            : 'bg-white border-gray-200 hover:border-birthday-pink'
                        }`}
                      >
                        <button
                          onClick={() => toggleChecklistItem(item.id)}
                          className="flex-shrink-0"
                        >
                          {item.completed ? (
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          ) : (
                            <Circle className="h-6 w-6 text-gray-400" />
                          )}
                        </button>
                        <div className="flex-1">
                          <p className={`font-medium ${item.completed ? 'line-through text-gray-500' : ''}`}>
                            {item.item}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {item.category}
                            </Badge>
                            <Badge className={`text-xs ${getPriorityColor(item.priority)}`}>
                              {item.priority}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Final Review */}
            {currentStep === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-birthday-yellow" />
                    Party Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-birthday-purple mb-2">Party Details</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Title:</strong> {partyData.title || 'Not specified'}</p>
                          <p><strong>Date:</strong> {partyData.date || 'Not specified'}</p>
                          <p><strong>Time:</strong> {partyData.time || 'Not specified'}</p>
                          <p><strong>Location:</strong> {partyData.location || 'Not specified'}</p>
                          <p><strong>Guests:</strong> {partyData.guestCount || 'Not specified'}</p>
                          <p><strong>Budget:</strong> ${partyData.budget || 'Not specified'}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-birthday-purple mb-2">Theme & Style</h4>
                        <p className="text-sm">{partyData.theme || 'No theme selected'}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-birthday-purple mb-2">Checklist Progress</h4>
                        <p className="text-sm">{completedItems} of {checklist.length} tasks completed ({Math.round(progress)}%)</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-6">
                    <Button className="bg-birthday-gradient hover:opacity-90 text-white text-lg px-8">
                      <Wand2 className="h-5 w-5 mr-2" />
                      Save My Party Plan
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">
                      Your party plan will be saved to your account
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
              >
                Previous Step
              </Button>
              <Button
                onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                disabled={currentStep === 4}
                className="bg-birthday-orange hover:bg-birthday-pink text-white"
              >
                Next Step
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
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
