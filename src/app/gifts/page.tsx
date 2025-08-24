import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  DollarSign
} from "lucide-react"

export default function GiftGuidePage() {
  const gifts = [
    {
      id: '1',
      name: 'Wireless Bluetooth Earbuds',
      description: 'High-quality sound with noise cancellation',
      price: '$79',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300',
      rating: 4.5,
      popularity: 85
    },
    {
      id: '2',
      name: 'Art Supply Set',
      description: 'Complete drawing and painting kit',
      price: '$39',
      category: 'Arts & Crafts',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300',
      rating: 4.7,
      popularity: 78
    },
    {
      id: '3',
      name: 'Gourmet Coffee Subscription',
      description: 'Monthly delivery of premium coffee beans',
      price: '$149',
      category: 'Food & Drink',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=300',
      rating: 4.8,
      popularity: 92
    }
  ]

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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="h-5 w-5 mr-2 text-birthday-blue" />
                  Search Gifts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <input
                  type="text"
                  placeholder="Search for gifts..."
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-birthday-green" />
                  Age Group
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {['Kids (5-12)', 'Teens (13-17)', 'Adults (18-59)', 'Seniors (60+)'].map((age) => (
                  <div key={age} className="p-3 rounded-lg border border-gray-200 hover:border-birthday-pink cursor-pointer">
                    <span className="font-medium">{age}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-birthday-yellow" />
                  Budget Range
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {['Under $25', '$25 - $50', '$50 - $100', '$100 - $200', '$200+'].map((budget) => (
                  <div key={budget} className="p-3 rounded-lg border border-gray-200 hover:border-birthday-pink cursor-pointer">
                    <span className="font-medium">{budget}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Gift Results */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-birthday-purple">Gift Recommendations</h2>
                <p className="text-muted-foreground">{gifts.length} gifts found matching your criteria</p>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Sort by
              </Button>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {gifts.map((gift) => (
                <Card key={gift.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={gift.image}
                      alt={gift.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-lg line-clamp-2">{gift.name}</h3>
                      <Badge className="ml-2">{gift.price}</Badge>
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

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1 bg-birthday-pink hover:bg-birthday-purple text-white">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
              <Heart className="h-12 w-12 text-birthday-pink mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Thoughtful Gifts</h3>
              <p className="text-muted-foreground text-sm">
                Every recommendation is carefully curated for maximum joy and surprise
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Gift className="h-12 w-12 text-birthday-orange mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Easy Ordering</h3>
              <p className="text-muted-foreground text-sm">
                One-click ordering with automatic delivery scheduling
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
