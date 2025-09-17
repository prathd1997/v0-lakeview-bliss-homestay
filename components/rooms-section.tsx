"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Bed, Bath } from "lucide-react"

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
  },
]

export function RoomsSection() {
  return (
    <section id="rooms" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2">Our Rooms</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Comfortable Stays for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Choose from our carefully curated selection of rooms, each designed to provide the perfect blend of comfort,
            luxury, and authentic homestay experience.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card
              key={room.id}
              className="group overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Room Image */}
              <div className="relative overflow-hidden">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                    {Math.round(((room.originalPrice - room.price) / room.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-gray-900">{room.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Room Title and Price */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {room.name}
                  </h3>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 line-through">${room.originalPrice}</span>
                      <span className="text-2xl font-bold text-blue-600">${room.price}</span>
                    </div>
                    <span className="text-sm text-gray-500">per night</span>
                  </div>
                </div>

                {/* Room Details */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{room.guests} guests</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>
                      {room.beds} bed{room.beds > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>
                      {room.baths} bath{room.baths > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{room.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Reviews */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(room.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({room.reviews} reviews)</span>
                </div>

                {/* Book Button */}
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Can't find the perfect room? We're here to help!</p>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 px-8 py-3 rounded-xl bg-transparent"
          >
            Contact Us for Custom Arrangements
          </Button>
        </div>
      </div>
    </section>
  )
}
