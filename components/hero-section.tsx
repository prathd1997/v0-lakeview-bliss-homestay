"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Star, Sparkles, Play } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function HeroSection() {
  const [counters, setCounters] = useState({ guests: 0, rating: 0, service: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
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
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-transparent to-teal-600/20 animate-pulse" style={{ animationDuration: '8s' }}></div>

      {/* Parallax background */}
      <div
        className="absolute inset-0 opacity-40 transition-transform duration-100 ease-out will-change-transform"
        style={{
          backgroundImage: `url('/luxury-homestay-overlooking-taal-lake-tagaytay-pan.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.15) translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(20px);
            opacity: 0.8;
          }
        }
      `}</style>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Premium badge with glass morphism */}
          <div 
            className={`inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-full px-8 py-4 mb-10 border border-white/20 shadow-2xl transition-all duration-1000 hover:bg-white/15 hover:scale-105 cursor-pointer group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-0 blur-lg bg-amber-300/50 animate-pulse"></div>
            </div>
            <span className="text-white text-sm font-semibold tracking-wider uppercase">Premium Lake View Experience</span>
            <Star className="w-5 h-5 text-amber-300 fill-current group-hover:rotate-12 transition-transform duration-500" />
          </div>

          {/* Main heading with stagger animation */}
          <h1 
            className={`text-6xl md:text-8xl font-bold text-white mb-8 leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              textShadow: '0 10px 40px rgba(0,0,0,0.5), 0 0 80px rgba(16,185,129,0.3)',
              letterSpacing: '-0.02em',
            }}
          >
            Lakeview Bliss
            <span className="block text-5xl md:text-7xl mt-4 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Homestay
            </span>
          </h1>

          <p
            className={`text-3xl md:text-4xl text-emerald-200 mb-6 font-light transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
          >
            Wake up with a smile
          </p>

          <p
            className={`text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            Perched along the sweeping slopes of the ridge, Lakeview Bliss Homestay boasts a majestic panorama of the
            world-famous Taal Lake and Volcano. Experience luxury hospitality with breathtaking views.
          </p>

          {/* Location badge */}
          <div
            className={`inline-flex items-center gap-3 bg-black/30 backdrop-blur-md rounded-full px-6 py-3 mb-12 border border-white/10 transition-all duration-1000 delay-700 hover:bg-black/40 hover:scale-105 cursor-pointer ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="p-2 bg-emerald-500/20 rounded-full">
              <MapPin className="w-5 h-5 text-emerald-300" />
            </div>
            <span className="text-white font-medium text-lg">Tagaytay Ridge, Cavite</span>
          </div>

          {/* CTA buttons with enhanced interactions */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-12 py-7 text-lg font-semibold rounded-2xl shadow-2xl overflow-hidden group transition-all duration-500 hover:scale-105 hover:shadow-emerald-500/50"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
              <span className="relative flex items-center gap-3">
                BOOK YOUR STAY
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="relative border-2 border-white/40 text-white hover:bg-white hover:text-emerald-900 bg-white/5 backdrop-blur-md px-12 py-7 text-lg font-semibold rounded-2xl shadow-xl overflow-hidden group transition-all duration-500 hover:scale-105"
            >
              <span className="relative flex items-center gap-3">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                WATCH TOUR
              </span>
            </Button>
          </div>

          {/* Stats with glass morphism cards */}
          <div
            className={`grid grid-cols-3 gap-6 max-w-3xl mx-auto transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {[
              { value: `${counters.guests}+`, label: 'Happy Guests', icon: '👥' },
              { value: (counters.rating / 10).toFixed(1), label: 'Rating', icon: '⭐' },
              { value: `${counters.service}/7`, label: 'Service', icon: '🎯' }
            ].map((stat, i) => (
              <div
                key={i}
                className="relative group cursor-pointer"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-110 hover:rotate-1">
                  <div className="text-5xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
        <div className="w-10 h-16 border-2 border-white/40 rounded-full flex justify-center bg-white/5 backdrop-blur-sm group-hover:bg-white/10 group-hover:border-white/60 transition-all duration-300">
          <div
            className="w-2 h-6 bg-gradient-to-b from-white to-emerald-300 rounded-full mt-3 animate-pulse"
            style={{ animationDuration: '2s' }}
          />
        </div>
      </div>
    </section>
  )
}