"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

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
      const offsetTop = targetElement.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }

    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md hotel-shadow border-b border-gray-200"
          : "bg-black/20 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 animate-slide-in-left">
            <img
              src="/placeholder.svg?height=40&width=120&text=Lakeview+Bliss+Logo"
              alt="Lakeview Bliss Homestay"
              className="h-10"
            />
          </div>

          <div className="hidden md:flex items-center gap-8 animate-fade-in-up">
            {[
              { name: "Home", href: "#home" },
              { name: "Function Rooms", href: "#function-rooms" },
              { name: "Accommodations", href: "#accommodations" },
              { name: "Facilities", href: "#facilities" },
              { name: "Contact", href: "#contact" },
            ].map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`font-medium transition-smooth hover:scale-105 relative group ${
                  isScrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-accent drop-shadow-lg"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-primary" : "bg-white"
                  }`}
                ></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 animate-slide-in-right">
            <Button
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 hotel-shadow hover:hotel-shadow-lg transition-smooth"
              onClick={() => window.open("tel:+91-9999-4-2333", "_self")}
            >
              BOOK NOW
            </Button>
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-smooth ${
              isScrolled
                ? "bg-gray-100 hover:bg-gray-200 text-gray-800"
                : "bg-white/25 backdrop-blur-sm border border-white/40 hover:bg-white/35 text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className={`md:hidden mt-4 rounded-2xl p-6 animate-fade-in-up ${
              isScrolled
                ? "bg-white hotel-shadow border border-gray-200"
                : "bg-gray-900/95 backdrop-blur-md border border-white/20"
            }`}
          >
            <div className="flex flex-col gap-4">
              {[
                { name: "Home", href: "#home" },
                { name: "Function Rooms", href: "#function-rooms" },
                { name: "Accommodations", href: "#accommodations" },
                { name: "Facilities", href: "#facilities" },
                { name: "Contact", href: "#contact" },
              ].map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`font-medium py-2 px-4 rounded-lg transition-smooth ${
                    isScrolled ? "text-gray-800 hover:bg-secondary hover:text-primary" : "text-white hover:bg-white/15"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}
              <Button
                className="bg-primary hover:bg-primary/90 text-white font-semibold mt-2"
                onClick={() => window.open("tel:+91-9999-4-2333", "_self")}
              >
                BOOK NOW
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
