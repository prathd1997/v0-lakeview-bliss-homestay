"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Bed, Bath, Wifi, Coffee, Tv, Wind, Heart, Sparkles, TrendingUp } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const rooms = [
  {
    id: 1,
    name: "Deluxe Lake View Suite",
    price: 150,
    originalPrice: 200,
    rating: 4.9,
    reviews: 124,
    guests: 2,
    beds: 1,
    baths: 1,
    image: "/luxury-hotel-room-with-lake-view--modern-interior-.jpg",
    features: ["Lake View", "Free WiFi", "Air Conditioning", "Mini Bar"],
    description:
      "Spacious suite with breathtaking lake views, modern amenities, and premium comfort for a perfect romantic getaway.",
    popular: true,
    tag: "Most Popular"
  },
  {
    id: 2,
    name: "Family Garden Room",
    price: 120,
    originalPrice: 160,
    rating: 4.8,
    reviews: 89,
    guests: 4,
    beds: 2,
    baths: 2,
    image: "/family-hotel-room-with-garden-view--twin-beds--coz.jpg",
    features: ["Garden View", "Family Friendly", "Free Parking", "Kitchenette"],
    description:
      "Perfect for families with garden views, spacious layout, and all the amenities needed for a comfortable stay.",
    tag: "Family Choice"
  },
  {
    id: 3,
    name: "Cozy Mountain Retreat",
    price: 100,
    originalPrice: 130,
    rating: 4.7,
    reviews: 156,
    guests: 2,
    beds: 1,
    baths: 1,
    image: "/cozy-mountain-cabin-room--rustic-decor--warm-light.jpg",
    features: ["Mountain View", "Fireplace", "Balcony", "Room Service"],
    description:
      "Intimate retreat with stunning mountain views, rustic charm, and cozy fireplace for a peaceful escape.",
    tag: "Best Value"
  },
  {
    id: 4,
    name: "Premium Honeymoon Suite",
    price: 250,
    originalPrice: 320,
    rating: 5.0,
    reviews: 67,
    guests: 2,
    beds: 1,
    baths: 1,
    image: "/luxury-honeymoon-suite--romantic-decor--jacuzzi--e.jpg",
    features: ["Private Jacuzzi", "Champagne Service", "Rose Petals", "Late Checkout"],
    description:
      "Ultimate romantic experience with private jacuzzi, premium amenities, and personalized service for special occasions.",
    tag: "Luxury"
  },
  {
    id: 5,
    name: "Budget Comfort Room",
    price: 80,
    originalPrice: 100,
    rating: 4.5,
    reviews: 203,
    guests: 2,
    beds: 1,
    baths: 1,
    image: "/budget-hotel-room--clean-and-comfortable--simple-d.jpg",
    features: ["Free WiFi", "Daily Housekeeping", "Shared Balcony", "Continental Breakfast"],
    description:
      "Comfortable and affordable accommodation with essential amenities and friendly service for budget-conscious travelers.",
    tag: "Best Price"
  },
  {
    id: 6,
    name: "Executive Business Suite",
    price: 180,
    originalPrice: 230,
    rating: 4.8,
    reviews: 91,
    guests: 2,
    beds: 1,
    baths: 1,
    image: "/business-hotel-suite--work-desk--modern-amenities-.jpg",
    features: ["Work Desk", "High-Speed Internet", "Meeting Room Access", "Business Center"],
    description:
      "Professional accommodation designed for business travelers with dedicated workspace and premium connectivity.",
    tag: "Business"
  },
]

export function RoomsSection() {
  const [visibleRooms, setVisibleRooms] = useState<number[]>([])
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null)
  const [favorites, setFavorites] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const roomIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleRooms((prev) => [...prev, roomIndex])
          }
        })
      },
      { threshold: 0.1 }
    )

    const roomCards = sectionRef.current?.querySelectorAll("[data-index]")
    roomCards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const toggleFavorite = (roomId: number) => {
    setFavorites((prev) =>
      prev.includes(roomId) ? prev.filter((id) => id !== roomId) : [...prev, roomId]
    )
  }

  return (
    <section 
      id="rooms" 
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Rooms</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Comfortable Stays for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Every Need
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully curated selection of rooms, each designed to provide the perfect blend of comfort,
            luxury, and authentic homestay experience.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">12+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Room Types</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-1">4.9★</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Guest Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-1">500+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Happy Guests</div>
            </div>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {rooms.map((room, index) => (
            <Card
              key={room.id}
              data-index={index}
              className={`group overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl transition-all duration-700 hover:shadow-2xl ${
                visibleRooms.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: hoveredRoom === index ? "scale(1.02) translateY(-8px)" : ""
              }}
              onMouseEnter={() => setHoveredRoom(index)}
              onMouseLeave={() => setHoveredRoom(null)}
            >
              {/* Room Image */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Discount badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-2 text-sm font-bold shadow-lg">
                    {Math.round(((room.originalPrice - room.price) / room.originalPrice) * 100)}% OFF
                  </Badge>
                </div>

                {/* Tag badge */}
                {room.tag && (
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
                    <span className="text-xs font-bold text-gray-900 flex items-center gap-1">
                      {room.popular && <TrendingUp className="w-3 h-3 text-rose-500" />}
                      {room.tag}
                    </span>
                  </div>
                )}
                
                {/* Rating badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2 flex items-center gap-2 shadow-lg">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-bold text-gray-900">{room.rating}</span>
                  <span className="text-xs text-gray-500">({room.reviews})</span>
                </div>

                {/* Favorite button */}
                <button
                  onClick={() => toggleFavorite(room.id)}
                  className="absolute bottom-4 right-4 w-12 h-12 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white"
                >
                  <Heart 
                    className={`w-6 h-6 transition-colors duration-300 ${
                      favorites.includes(room.id) ? "fill-rose-500 text-rose-500" : "text-gray-600"
                    }`} 
                  />
                </button>
              </div>

              <CardContent className="p-6">
                {/* Room Title and Price */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex-1 pr-2">
                    {room.name}
                  </h3>
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-gray-400 line-through">${room.originalPrice}</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        ${room.price}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">per night</span>
                  </div>
                </div>

                {/* Room Details */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 flex-wrap">
                  <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-3 py-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">{room.guests}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-3 py-2">
                    <Bed className="w-4 h-4 text-purple-600" />
                    <span className="font-medium">{room.beds}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-3 py-2">
                    <Bath className="w-4 h-4 text-pink-600" />
                    <span className="font-medium">{room.baths}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                  {room.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.slice(0, 3).map((feature, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 border border-blue-200 hover:border-blue-400 transition-colors"
                    >
                      {feature}
                    </Badge>
                  ))}
                  {room.features.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                      +{room.features.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Book Button */}
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 group/btn overflow-hidden relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></span>
                  <span className="relative">Book Now</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-3xl p-10 shadow-2xl max-w-2xl">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Can't find the perfect room?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              We're here to help you find exactly what you need. Contact our team for custom arrangements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-10 py-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-10 py-6 rounded-xl transition-all duration-300 hover:scale-105 bg-transparent"
              >
                View All Rooms
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}