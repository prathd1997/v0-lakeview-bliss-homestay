"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Star, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden animate-gradient-shift"
    >
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full animate-float luxury-shadow animate-pulse-glow"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-yellow-300/30 to-amber-400/30 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-emerald-400/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-rose-400/20 rounded-full animate-float animate-pulse-glow"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/15 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-14 h-14 bg-blue-300/20 rounded-full animate-float"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-md rounded-full px-6 py-3 mb-8 animate-bounce-in luxury-shadow hover-lift transition-luxury border border-white/20">
            <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span className="text-white text-sm font-semibold tracking-wide">Premium Homestay Experience</span>
            <Star className="w-4 h-4 text-yellow-300 fill-current animate-pulse" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up text-balance drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-shimmer">
              Heaven Home Stay
            </span>
          </h1>

          <p
            className="text-2xl md:text-3xl text-white mb-6 font-light animate-fade-in-up drop-shadow-lg"
            style={{ animationDelay: "0.2s" }}
          >
            Discover Peace and Tranquility
          </p>

          <p
            className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up text-pretty drop-shadow-md"
            style={{ animationDelay: "0.4s" }}
          >
            Experience the perfect blend of comfort, nature, and hospitality. Our serene homestay offers you a peaceful
            retreat away from the hustle and bustle of city life, where luxury meets tranquility.
          </p>

          <div
            className="flex items-center justify-center gap-3 mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="p-2 bg-white/25 rounded-full backdrop-blur-sm border border-white/30">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-medium text-lg drop-shadow-md">Lakeview, Serene Mountains</span>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 transition-luxury hover-lift hover-glow group px-10 py-4 text-lg font-semibold luxury-shadow"
            >
              Book Your Stay
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-bounce" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm transition-luxury hover-lift px-10 py-4 text-lg font-semibold"
            >
              Explore Rooms
            </Button>
          </div>

          <div
            className="grid grid-cols-3 gap-8 mt-20 max-w-lg mx-auto animate-scale-in"
            style={{ animationDelay: "1s" }}
          >
            <div className="text-center bg-white/15 backdrop-blur-md rounded-2xl p-6 hover-lift transition-luxury border border-white/20">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">150+</div>
              <div className="text-white/90 text-sm font-medium">Happy Guests</div>
            </div>
            <div className="text-center bg-white/15 backdrop-blur-md rounded-2xl p-6 hover-lift transition-luxury border border-white/20">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">4.9</div>
              <div className="text-white/90 text-sm font-medium flex items-center justify-center gap-1">
                <Star className="w-3 h-3 fill-current text-yellow-300" />
                Rating
              </div>
            </div>
            <div className="text-center bg-white/15 backdrop-blur-md rounded-2xl p-6 hover-lift transition-luxury border border-white/20">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">24/7</div>
              <div className="text-white/90 text-sm font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center bg-white/10 backdrop-blur-sm hover-glow transition-luxury">
          <div className="w-1.5 h-4 bg-white rounded-full mt-2 animate-pulse drop-shadow-sm" />
        </div>
      </div>
    </section>
  )
}
