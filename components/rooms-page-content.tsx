"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Bed, Wind, Phone, Check } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const rooms = [
  {
    id: 1,
    name: "AC Large Room",
    nameMarathi: "AC मोठी रूम",
    price: 3000,
    guests: 3,
    beds: 2,
    image: "/luxury-hotel-bedroom-lake-view-comfortable-bed-mod.jpg",
    features: ["Air Conditioning", "Lake View", "Free WiFi", "Attached Bathroom"],
    description: "Spacious air-conditioned room with modern amenities and stunning lake views.",
    type: "AC",
    popular: true
  },
  {
    id: 2,
    name: "Non-AC Large Room",
    nameMarathi: "नॉन एसी मोठी रूम",
    price: 2500,
    guests: 3,
    beds: 2,
    image: "/comfortable-hotel-bedroom-cozy-bed-modern-amenitie.jpg",
    features: ["Lake View", "Free WiFi", "Attached Bathroom", "Spacious"],
    description: "Comfortable large room with natural ventilation and beautiful lake views.",
    type: "Non-AC"
  },
  {
    id: 3,
    name: "AC Lake View Room",
    nameMarathi: "AC लेक व्हिव",
    price: 2500,
    guests: 2,
    beds: 1,
    image: "/luxury-hotel-room-with-lake-view--modern-interior-.jpg",
    features: ["Air Conditioning", "Premium Lake View", "Free WiFi", "Balcony"],
    description: "Premium room with spectacular lake views and air conditioning.",
    type: "AC"
  },
  {
    id: 4,
    name: "Non-AC Lake View Room",
    nameMarathi: "नॉन एसी लेक व्हिव",
    price: 2000,
    guests: 2,
    beds: 1,
    image: "/stunning-lake-view-from-homestay-balcony-serene-mo.jpg",
    features: ["Premium Lake View", "Free WiFi", "Balcony", "Natural Ventilation"],
    description: "Cozy room with breathtaking lake views and comfortable amenities.",
    type: "Non-AC"
  },
  {
    id: 5,
    name: "Single Bed Room",
    nameMarathi: "सिंगल बेड रूम",
    price: 1000,
    priceType: "per bed",
    guests: 1,
    beds: 1,
    image: "/budget-hotel-room--clean-and-comfortable--simple-d.jpg",
    features: ["Free WiFi", "Shared Bathroom", "Budget Friendly", "Clean"],
    description: "Affordable single bed accommodation perfect for solo travelers.",
    type: "Budget"
  },
  {
    id: 6,
    name: "Dormitory (Hall)",
    nameMarathi: "हॉल",
    price: 600,
    priceType: "per bed",
    guests: 8,
    beds: 8,
    image: "/family-hotel-room-with-garden-view--twin-beds--coz.jpg",
    features: ["Shared Space", "Budget Friendly", "Free WiFi", "Lockers"],
    description: "Budget-friendly dormitory ideal for backpackers and groups.",
    type: "Dormitory"
  }
]

export function RoomsPageContent() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All")
  const filters = ["All", "AC", "Non-AC", "Budget", "Dormitory"]
  
  const filteredRooms = selectedFilter === "All" 
    ? rooms 
    : rooms.filter(room => room.type === selectedFilter)

  return (
    <section className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-emerald-600 font-semibold mb-2 uppercase tracking-wider text-sm">Our Rooms</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Accommodations</h1>
          <p className="text-slate-600 text-lg">Choose from our range of comfortable rooms with stunning lake views.</p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 mb-10">
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">3</div>
            <div className="text-sm text-slate-500">AC Rooms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">2</div>
            <div className="text-sm text-slate-500">Non-AC Rooms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">1</div>
            <div className="text-sm text-slate-500">Dormitory</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-lg font-medium text-sm transition-all ${
                selectedFilter === filter
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredRooms.map((room) => (
            <Card key={room.id} className="overflow-hidden border border-slate-200 bg-white hover:shadow-lg transition-shadow">
              <div className="relative h-52">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded text-xs font-semibold ${
                    room.type === "AC" ? "bg-emerald-600 text-white" : 
                    room.type === "Non-AC" ? "bg-slate-700 text-white" : "bg-blue-600 text-white"
                  }`}>
                    {room.type}
                  </span>
                </div>

                {room.popular && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded text-xs font-semibold">Popular</span>
                  </div>
                )}

                <div className="absolute bottom-3 left-3">
                  <span className="text-2xl font-bold text-white">₹{room.price.toLocaleString()}</span>
                  <span className="text-white/80 text-sm ml-1">/{room.priceType || "night"}</span>
                </div>
              </div>

              <CardContent className="p-5">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{room.name}</h3>
                <p className="text-sm text-slate-500 mb-3">{room.nameMarathi}</p>

                <div className="flex gap-4 mb-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-slate-400" />
                    <span>{room.guests}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4 text-slate-400" />
                    <span>{room.beds}</span>
                  </div>
                  {room.type === "AC" && (
                    <div className="flex items-center gap-1">
                      <Wind className="w-4 h-4 text-slate-400" />
                      <span>AC</span>
                    </div>
                  )}
                </div>

                <p className="text-slate-600 text-sm mb-4">{room.description}</p>

                <div className="flex flex-wrap gap-1 mb-5">
                  {room.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{feature}</span>
                  ))}
                </div>

                <Link href="/contact">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Book Now</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Options */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Additional Options</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="font-semibold text-slate-900">Extra Bed</p>
                <p className="text-sm text-slate-500">एक्सट्रा बेड</p>
              </div>
              <p className="text-xl font-bold text-emerald-600">₹1,000</p>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="font-semibold text-slate-900">Hall (per bed)</p>
                <p className="text-sm text-slate-500">हॉल</p>
              </div>
              <p className="text-xl font-bold text-emerald-600">₹600</p>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="font-semibold text-slate-900">Single Bed</p>
                <p className="text-sm text-slate-500">सिंगल बेड</p>
              </div>
              <p className="text-xl font-bold text-emerald-600">₹1,000</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Book?</h3>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Contact us to check availability and make your reservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 font-semibold rounded-lg">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
            <a href="tel:+91-9999-4-2333">
              <Button size="lg" variant="outline" className="border-2 border-slate-600 text-white hover:bg-slate-800 px-8 py-6 font-semibold rounded-lg bg-transparent">
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
