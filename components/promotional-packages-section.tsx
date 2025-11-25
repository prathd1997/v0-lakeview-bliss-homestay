"use client"

import { Wind, Bed, Users, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function PromotionalPackagesSection() {
  const pricingData = [
    {
      name: "AC Large Room",
      nameMarathi: "AC मोठी रूम",
      price: 3000,
      type: "AC",
      popular: true,
      features: ["Air Conditioning", "Lake View", "Attached Bathroom", "Free WiFi"]
    },
    {
      name: "Non-AC Large Room",
      nameMarathi: "नॉन एसी मोठी रूम",
      price: 2500,
      type: "Non-AC",
      features: ["Lake View", "Attached Bathroom", "Free WiFi", "Spacious"]
    },
    {
      name: "AC Lake View",
      nameMarathi: "AC लेक व्हिव",
      price: 2500,
      type: "AC",
      features: ["Air Conditioning", "Premium Lake View", "Balcony", "Free WiFi"]
    },
    {
      name: "Non-AC Lake View",
      nameMarathi: "नॉन एसी लेक व्हिव",
      price: 2000,
      type: "Non-AC",
      features: ["Premium Lake View", "Balcony", "Free WiFi", "Natural Ventilation"]
    },
  ]

  const additionalPricing = [
    { name: "Extra Bed", nameMarathi: "एक्सट्रा बेड", price: 1000 },
    { name: "Dormitory (Hall)", nameMarathi: "हॉल", price: 600, note: "per bed" },
    { name: "Single Bed Room", nameMarathi: "सिंगल बेड रूम", price: 1000, note: "per bed" },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-emerald-600 font-semibold mb-2 uppercase tracking-wider text-sm">Transparent Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Room Tariffs
          </h2>
          <p className="text-slate-600 text-lg">
            Choose from our range of comfortable rooms at competitive prices.
          </p>
        </div>

        {/* Main Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingData.map((room, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border transition-all duration-300 hover:shadow-lg ${
                room.popular ? "border-emerald-500 shadow-md" : "border-slate-200"
              }`}
            >
              {room.popular && (
                <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-semibold px-3 py-1">
                  Popular
                </div>
              )}
              
              <CardContent className="p-6">
                {/* Room Type Badge */}
                <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium mb-4 ${
                  room.type === "AC" 
                    ? "bg-emerald-100 text-emerald-700" 
                    : "bg-slate-100 text-slate-700"
                }`}>
                  {room.type === "AC" && <Wind className="w-3 h-3" />}
                  {room.type}
                </div>

                {/* Room Name */}
                <h3 className="text-lg font-bold text-slate-900 mb-1">{room.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{room.nameMarathi}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-slate-900">₹{room.price.toLocaleString()}</span>
                  <span className="text-slate-500 text-sm"> /night</span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link href="/contact">
                  <Button
                    className={`w-full ${
                      room.popular 
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Pricing */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Additional Options</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalPricing.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.nameMarathi}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-emerald-600">₹{item.price.toLocaleString()}</p>
                  {item.note && <p className="text-xs text-slate-500">{item.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Property Summary */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Property</h3>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            5 comfortable rooms with stunning lake views, plus a spacious dormitory for groups.
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-8">
            <div>
              <div className="text-3xl font-bold text-emerald-400">3</div>
              <div className="text-sm text-slate-400">AC Rooms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">2</div>
              <div className="text-sm text-slate-400">Non-AC Rooms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">1</div>
              <div className="text-sm text-slate-400">Dormitory</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rooms">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 font-semibold rounded-lg"
              >
                View All Rooms
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-600 text-white hover:bg-slate-800 px-8 py-6 font-semibold rounded-lg bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}