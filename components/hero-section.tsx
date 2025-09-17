"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Star, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [counters, setCounters] = useState({ guests: 0, rating: 0, service: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const animateCounter = (target: number, key: keyof typeof counters, duration = 2000) => {
      const start = 0
      const increment = target / (duration / 16)
      let current = start

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, 16)
    }

    animateCounter(500, "guests", 2000)
    animateCounter(49, "rating", 1500)
    animateCounter(24, "service", 1000)
  }, [isVisible])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700"
    >
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/40"></div>

      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-30 animate-pulse"
        style={{
          backgroundImage: `url('/luxury-homestay-overlooking-taal-lake-tagaytay-pan.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          animationDuration: "4s",
        }}
      ></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-md rounded-full px-6 py-3 mb-8 animate-fade-in-up hotel-shadow border border-white/20 hover:scale-105 transition-all duration-500 cursor-pointer">
            <Sparkles className="w-5 h-5 text-white animate-spin" style={{ animationDuration: "3s" }} />
            <span className="text-white text-sm font-semibold tracking-wide">Premium Lake View Experience</span>
            <Star className="w-4 h-4 text-white fill-current animate-bounce" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up text-balance drop-shadow-2xl hover:scale-105 transition-all duration-700 cursor-default">
            Lakeview Bliss Homestay
          </h1>

          <p
            className="text-2xl md:text-3xl text-white mb-6 font-light animate-fade-in-up drop-shadow-lg hover:text-green-100 transition-colors duration-500"
            style={{ animationDelay: "0.2s" }}
          >
            Wake up with a smile
          </p>

          <p
            className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up text-pretty drop-shadow-md"
            style={{ animationDelay: "0.4s" }}
          >
            Perched along the sweeping slopes of the ridge, Lakeview Bliss Homestay boasts a majestic panorama of the
            world-famous Taal Lake and Volcano. Experience luxury hospitality with breathtaking views.
          </p>

          <div
            className="flex items-center justify-center gap-3 mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="p-2 bg-white/25 rounded-full backdrop-blur-sm border border-white/30">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-medium text-lg drop-shadow-md">Tagaytay Ridge, Cavite</span>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white transition-smooth hover:hotel-shadow-lg group px-10 py-4 text-lg font-semibold hotel-shadow"
            >
              BOOK NOW
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-smooth" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm transition-smooth hover:hotel-shadow px-10 py-4 text-lg font-semibold"
            >
              Explore Rooms
            </Button>
          </div>

          <div
            className="grid grid-cols-3 gap-8 mt-20 max-w-lg mx-auto animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <div className="text-center bg-white/15 backdrop-blur-md rounded-2xl p-6 hover:hotel-shadow-lg hover:scale-110 transition-all duration-500 border border-white/20 cursor-pointer group">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg group-hover:text-green-200 transition-colors">
                {counters.guests}+
              </div>
              <div className="text-white/90 text-sm font-medium">Happy Guests</div>
            </div>
            <div className="text-center bg-white/15 backdrop-blur-md rounded-2xl p-6 hover:hotel-shadow-lg hover:scale-110 transition-all duration-500 border border-white/20 cursor-pointer group">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg group-hover:text-green-200 transition-colors">
                {(counters.rating / 10).toFixed(1)}
              </div>
              <div className="text-white/90 text-sm font-medium flex items-center justify-center gap-1">
                <Star className="w-3 h-3 fill-current text-yellow-300 animate-pulse" />
                Rating
              </div>
            </div>
            <div className="text-center bg-white/15 backdrop-blur-md rounded-2xl p-6 hover:hotel-shadow-lg hover:scale-110 transition-all duration-500 border border-white/20 cursor-pointer group">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg group-hover:text-green-200 transition-colors">
                {counters.service}/7
              </div>
              <div className="text-white/90 text-sm font-medium">Service</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-125 transition-all duration-300 cursor-pointer">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center bg-white/10 backdrop-blur-sm hover:hotel-shadow transition-smooth hover:border-white/80">
          <div
            className="w-1.5 h-4 bg-white rounded-full mt-2 animate-pulse drop-shadow-sm"
            style={{ animationDuration: "1.5s" }}
          />
        </div>
      </div>
    </section>
  )
}
