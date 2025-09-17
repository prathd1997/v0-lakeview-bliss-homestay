"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Phone, Menu, X, Sparkles } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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
      const offsetTop = targetElement.offsetTop - 80 // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }

    // Close mobile menu if open
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-luxury ${
        isScrolled ? "bg-white/98 backdrop-blur-md shadow-xl border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in-left">
            <div className="w-10 h-10 luxury-gradient rounded-xl flex items-center justify-center luxury-shadow hover-glow transition-luxury">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span
              className={`font-bold text-xl transition-luxury ${
                isScrolled ? "text-gray-900" : "text-white drop-shadow-lg"
              }`}
            >
              Heaven Home Stay
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10 animate-fade-in-up">
            {[
              { name: "Home", href: "#home" },
              { name: "Rooms", href: "#rooms" },
              { name: "Gallery", href: "#gallery" },
              { name: "Contact Us", href: "#contact" },
            ].map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`font-semibold transition-luxury hover-lift relative group ${
                  isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200 drop-shadow-lg"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled
                      ? "bg-gradient-to-r from-blue-600 to-blue-400"
                      : "bg-gradient-to-r from-white to-blue-200"
                  }`}
                ></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 animate-fade-in-right">
            <div
              className={`p-2 rounded-full transition-luxury ${
                isScrolled ? "bg-blue-100" : "bg-white/25 backdrop-blur-sm border border-white/40"
              }`}
            >
              <Phone className={`w-4 h-4 transition-luxury ${isScrolled ? "text-blue-600" : "text-white"}`} />
            </div>
            <span
              className={`font-semibold transition-luxury ${
                isScrolled ? "text-gray-800" : "text-white drop-shadow-lg"
              }`}
            >
              +91-9999-4-2333
            </span>
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-luxury hover-lift ${
              isScrolled
                ? "bg-gray-100 hover:bg-gray-200"
                : "bg-white/25 backdrop-blur-sm border border-white/40 hover:bg-white/35"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className={`md:hidden mt-4 rounded-2xl p-6 animate-scale-in ${
              isScrolled
                ? "bg-white shadow-xl border border-gray-200"
                : "bg-gray-900/95 backdrop-blur-md border border-white/20"
            }`}
          >
            <div className="flex flex-col gap-4">
              {[
                { name: "Home", href: "#home" },
                { name: "Rooms", href: "#rooms" },
                { name: "Gallery", href: "#gallery" },
                { name: "Contact Us", href: "#contact" },
              ].map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`font-semibold py-2 px-4 rounded-lg transition-luxury hover-lift ${
                    isScrolled ? "text-gray-800 hover:bg-blue-50 hover:text-blue-600" : "text-white hover:bg-white/15"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-3 py-2 px-4">
                <Phone className={`w-4 h-4 ${isScrolled ? "text-blue-600" : "text-white"}`} />
                <span className={`font-semibold ${isScrolled ? "text-gray-800" : "text-white"}`}>+91-9999-4-2333</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
