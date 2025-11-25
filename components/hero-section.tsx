"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Star, Phone } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/luxury-homestay-overlooking-taal-lake-tagaytay-pan.jpg"
          alt="Lakeview Bliss Homestay"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 bg-emerald-600 text-white rounded-full px-4 py-2 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Premium Lake View Homestay</span>
          </div>

          {/* Main Heading */}
          <h1 
            className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Lakeview Bliss
            <span className="block text-emerald-400">Homestay</span>
          </h1>

          {/* Tagline */}
          <p
            className={`text-2xl md:text-3xl text-slate-300 mb-4 font-light transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Wake up with a smile
          </p>

          {/* Description */}
          <p
            className={`text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Experience comfort and tranquility at our lakeside retreat. Stunning views, 
            modern amenities, and warm hospitality await you.
          </p>

          {/* Location */}
          <div
            className={`flex items-center gap-2 text-slate-400 mb-10 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <MapPin className="w-5 h-5 text-emerald-400" />
            <span>Rankala, Sandhyamath, Kolhapur, Maharashtra</span>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Link href="/rooms">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                View Rooms & Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <a href="tel:+91-9999-4-2333">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-8 max-w-lg transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div>
              <div className="text-3xl font-bold text-white">5</div>
              <div className="text-sm text-slate-400">Rooms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">4.9</div>
              <div className="text-sm text-slate-400">Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-slate-400">Happy Guests</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}