'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Gift,
  Zap,
  Star,
  Heart,
  ShoppingCart,
  Filter,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  ExternalLink,
  Wand2
} from "lucide-react"

interface GiftItem {
  id: string
  name: string
  description: string
  price_range: string
  age_group: string
  interests: string[]
  category: string
  image_url: string
  rating: number
  popularity: number
  affiliate_link?: string
}

export default function GiftGuidePage() {
  const [selectedAge, setSelectedAge] = useState('')
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [selectedBudget, setSelectedBudget] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredGifts, setFilteredGifts] = useState<GiftItem[]>([])
  const [showAIRecommendations, setShowAIRecommendations] = useState(false)

  // Sample gift data - in a real app, this would come from Supabase
  const sampleGifts: GiftItem[] = [
    {
      id: '1',
      name: 'Wireless Bluetooth Earbuds',
      description: 'High-quality sound with noise cancellation for music lovers',
      price_range: '$50-100',
      age_group: 'teens',
      interests: ['music', 'technology'],
      category: 'Electronics',
      image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300',
      rating: 4.5,
      popularity: 85
    },
    {
      id: '2',
      name: 'Art Supply Set',
      description: 'Complete drawing and painting kit for creative minds',
      price_range: '$25-50',
      age_group: 'kids',
      interests: ['art', 'creativity'],
      category: 'Arts & Crafts',
      image_url: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300',
      rating: 4.7,
      popularity: 78
    },
    {
      id: '3',
      name: 'Gourmet Coffee Subscription',
      description: 'Monthly delivery of premium coffee beans from around the world',
      price_range: '$100-200',
      age_group: 'adults',
      interests: ['coffee', 'food'],
      category: 'Food & Drink',
      image_url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=300',
      rating: 4.8,
      popularity: 92
    },
    {
      id: '4',
      name: 'Yoga Mat & Accessories',
      description: 'Premium yoga mat with blocks and strap for fitness enthusiasts',
      price_range: '$50-100',
      age_group: 'adults',
      interests: ['fitness', 'wellness'],
      category: 'Health & Fitness',
      image_url: 'https://images.unsplash.com/photo-1506629905607-d200b4066142?w=300',
      rating: 4.6,
      popularity: 71
    },
    {
      id: '5',
      name: 'Board Game Collection',
      description: 'Classic and modern board games for family fun',
      price_range: '$25-75',
      age_group: 'family',
      interests: ['games', 'family'],
      category: 'Games & Toys',
      image_url: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300',
      rating: 4.4,
      popularity: 89
    },
    {
      id: '6',
      name: 'Skincare Starter Kit',
      description: 'Gentle skincare routine for healthy glowing skin',
      price_range: '$75-150',
      age_group: 'teens',
      interests: ['beauty', 'self-care'],
      category: 'Beauty & Personal Care',
      image_url: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300',
      rating: 4.3,
      popularity: 76
    }
  ]

  const ageGroups = [
    { value: 'kids', label: 'Kids (5-12)', icon: '🧒' },
    { value: 'teens', label: 'Teens (13-17)', icon: '🧑‍🎓' },
    { value: 'adults', label: 'Adults (18-59)', icon: '👨‍💼' },
    { value: 'seniors', label: 'Seniors (60+)', icon: '👴' },
    { value: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' }
  ]

  const interests = [
    'technology', 'music', 'art', 'creativity', 'sports', 'fitness',
    'books', 'cooking', 'travel', 'games', 'fashion', 'beauty',
    'coffee', 'food', 'wellness', 'family', 'pets', 'photography',
    'self-care', 'outdoor', 'crafts'
  ]

  const budgetRanges = [
    { value: '$0-25', label: 'Under $25' },
    { value: '$25-50', label: '$25 - $50' },
    { value: '$50-100', label: '$50 - $100' },
    { value: '$100-200', label: '$100 - $200' },
    { value: '$200+', label: '$200+' }
  ]

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    )
  }

  const getFilteredGifts = () => {
    return sampleGifts.filter(gift => {
      const matchesAge = !selectedAge || gift.age_group === selectedAge
      const matchesInterests = selectedInterests.length === 0 ||
        selectedInterests.some(interest => gift.interests.includes(interest))
      const matchesBudget = !selectedBudget || gift.price_range === selectedBudget
      const matchesSearch = !searchQuery ||
        gift.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gift.description.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesAge && matchesInterests && matchesBudget && matchesSearch
    })
  }

  useEffect(() => {
    const filterGifts = () => {
      return sampleGifts.filter(gift => {
        const matchesAge = !selectedAge || gift.age_group === selectedAge
        const matchesInterests = selectedInterests.length === 0 ||
          selectedInterests.some(interest => gift.interests.includes(interest))
        const matchesBudget = !selectedBudget || gift.price_range === selectedBudget
        const matchesSearch = !searchQuery ||
          gift.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          gift.description.toLowerCase().includes(searchQuery.toLowerCase())

        return matchesAge && matchesInterests && matchesBudget && matchesSearch
      })
    }
    setFilteredGifts(filterGifts())
  }, [selectedAge, selectedInterests, selectedBudget, searchQuery, sampleGifts])

  const generateAIRecommendations = () => {
    setShowAIRecommendations(true)
    // In a real app, this would call an AI service
    setTimeout(() => {
      alert('AI recommendations feature coming soon! This will provide personalized suggestions based on your preferences.')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-birthday-feature-gradient text-white mb-4">
            <Zap className="h-4 w-4 mr-2" />
            AI-Powered Recommendations
          </Badge>
          <h1 className="text-5xl font-display font-bold text-birthday-purple mb-4">
            Gift Recommendation Engine
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find the perfect gift with our intelligent recommendation system. Filter by age,
            interests, and budget to discover thoughtful presents that will bring joy.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="h-5 w-5 mr-2 text-birthday-blue" />
                  Search Gifts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Search for gifts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </CardContent>
            </Card>

            {/* Age Group Filter */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-birthday-green" />
                  Age Group
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {ageGroups.map((age) => (
                  <div
                    key={age.value}
                    onClick={() => setSelectedAge(selectedAge === age.value ? '' : age.value)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedAge === age.value
                        ? 'border-birthday-orange bg-birthday-orange/10'
                        : 'border-gray-200 hover:border-birthday-pink'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{age.icon}</span>
                      <span className="font-medium">{age.label}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Interest Filter */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-birthday-pink" />
                  Interests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge
                      key={interest}
                      variant={selectedInterests.includes(interest) ? "default" : "outline"}
                      className={`cursor-pointer transition-all ${
                        selectedInterests.includes(interest)
                          ? 'bg-birthday-gradient text-white'
                          : 'hover:bg-birthday-pink hover:text-white'
                      }`}
                      onClick={() => toggleInterest(interest)}
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Budget Filter */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-birthday-yellow" />
                  Budget Range
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {budgetRanges.map((budget) => (
                  <div
                    key={budget.value}
                    onClick={() => setSelectedBudget(selectedBudget === budget.value ? '' : budget.value)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedBudget === budget.value
                        ? 'border-birthday-orange bg-birthday-orange/10'
                        : 'border-gray-200 hover:border-birthday-pink'
                    }`}
                  >
                    <span className="font-medium">{budget.label}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AI Recommendations Button */}
            <Card>
              <CardContent className="pt-6">
                <Button
                  onClick={generateAIRecommendations}
                  className="w-full bg-birthday-gradient hover:opacity-90 text-white"
                >
                  <Wand2 className="h-4 w-4 mr-2" />
                  Get AI Suggestions
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Personalized recommendations based on your preferences
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Gift Results */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-birthday-purple">
                  Gift Recommendations
                </h2>
                <p className="text-muted-foreground">
                  {filteredGifts.length} gifts found matching your criteria
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Sort by
                </Button>
              </div>
            </div>

            {/* Gift Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredGifts.map((gift) => (
                <Card key={gift.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={gift.image_url}
                      alt={gift.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-lg line-clamp-2">{gift.name}</h3>
                      <Badge className="ml-2">{gift.price_range}</Badge>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {gift.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{gift.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="h-4 w-4 text-birthday-green" />
                          <span className="text-sm">{gift.popularity}% match</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {gift.interests.slice(0, 3).map((interest) => (
                          <Badge key={interest} variant="outline" className="text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1 bg-birthday-pink hover:bg-birthday-purple text-white">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {filteredGifts.length === 0 && (
              <div className="text-center py-12">
                <Gift className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No gifts found</h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your filters or search terms to find more options.
                </p>
                <Button variant="outline" onClick={() => {
                  setSelectedAge('')
                  setSelectedInterests([])
                  setSelectedBudget('')
                  setSearchQuery('')
                }}>
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Sparkles className="h-12 w-12 text-birthday-purple mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">AI-Powered Suggestions</h3>
              <p className="text-muted-foreground text-sm">
                Our intelligent system learns from preferences to recommend perfect gifts
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="h-12 w-12 text-birthday-orange mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Save Time</h3>
              <p className="text-muted-foreground text-sm">
                Find the perfect gift in minutes instead of hours of searching
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Heart className="h-12 w-12 text-birthday-pink mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Thoughtful Gifts</h3>
              <p className="text-muted-foreground text-sm">
                Every recommendation is carefully curated for maximum joy and surprise
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
