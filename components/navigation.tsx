"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'function-rooms', 'accommodations', 'facilities', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }

    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Function Rooms", href: "#function-rooms" },
    { name: "Accommodations", href: "#accommodations" },
    { name: "Facilities", href: "#facilities" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200"
            : "bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl transition-all duration-500 ${
                isScrolled 
                  ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg" 
                  : "bg-white/20 backdrop-blur-md text-white border border-white/30"
              }`}>
                L
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-lg leading-tight transition-colors duration-500 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}>
                  Lakeview Bliss
                </span>
                <span className={`text-xs leading-tight transition-colors duration-500 ${
                  isScrolled ? "text-gray-500" : "text-emerald-200"
                }`}>
                  Homestay
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`relative px-5 py-2 font-medium transition-all duration-300 rounded-xl group ${
                      isScrolled 
                        ? isActive
                          ? "text-emerald-600 bg-emerald-50"
                          : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                        : isActive
                          ? "text-white bg-white/20"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 transition-all duration-300 rounded-full ${
                        isActive ? "w-8" : "w-0 group-hover:w-8"
                      } ${
                        isScrolled ? "bg-emerald-600" : "bg-white"
                      }`}
                    ></span>
                  </a>
                )
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? "text-gray-700 hover:bg-gray-100" 
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => window.open("tel:+91-9999-4-2333", "_self")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
              
              <Button
                className={`px-6 py-2 font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 group overflow-hidden relative ${
                  isScrolled
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
                    : "bg-white text-emerald-900 hover:bg-white/90"
                }`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                <Calendar className="w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10">Book Now</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  : "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={`fixed top-20 right-4 left-4 z-50 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-gray-200">
          <div className="flex flex-col gap-2 mb-6">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`px-5 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMobileMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                  }}
                >
                  {item.name}
                </a>
              )
            })}
          </div>
          
          <div className="flex flex-col gap-3 pt-6 border-t border-gray-200">
            <Button
              variant="outline"
              className="w-full py-6 rounded-2xl border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-semibold"
              onClick={() => window.open("tel:+91-9999-4-2333", "_self")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </Button>
            <Button
              className="w-full py-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Stay
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}