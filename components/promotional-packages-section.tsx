"use client"

import { Calendar, Gift, Umbrella, Sparkles, Star, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect, useRef } from "react"

export function PromotionalPackagesSection() {
  const [visiblePackages, setVisiblePackages] = useState<number[]>([])
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const packageIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisiblePackages((prev) => [...prev, packageIndex])
          }
        })
      },
      { threshold: 0.2 }
    )

    const packages = sectionRef.current?.querySelectorAll("[data-index]")
    packages?.forEach((pkg) => observer.observe(pkg))

    return () => observer.disconnect()
  }, [])

  const packages = [
    {
      title: "Dad's Getaway",
      subtitle: "Premium Father's Retreat",
      description: "Special package for fathers looking for a relaxing retreat with premium amenities and lake views.",
      icon: Gift,
      image: "/placeholder.svg?key=dads01",
      link: "#dads-getaway",
      price: "$299",
      duration: "2 Nights",
      discount: "20% OFF",
      features: ["Lake View Room", "Complimentary Breakfast", "Spa Treatment", "Private Dining"],
      gradient: "from-blue-500 to-cyan-600",
      popular: true
    },
    {
      title: "Brews with Dad",
      subtitle: "Craft Experience Package",
      description: "Enjoy quality time with dad over craft beverages while taking in the stunning Taal Lake scenery.",
      icon: Calendar,
      image: "/placeholder.svg?key=brews02",
      link: "#brews-with-dad",
      price: "$199",
      duration: "1 Night",
      discount: "15% OFF",
      features: ["Craft Beer Tasting", "Sunset View Lounge", "Gourmet Snacks", "Keepsake Photo"],
      gradient: "from-amber-500 to-orange-600",
      popular: false
    },
    {
      title: "RAINY DAY SEASON",
      subtitle: "Cozy Indoor Experience",
      description: "Special rates and cozy indoor activities perfect for the rainy season. Stay warm and comfortable.",
      icon: Umbrella,
      image: "/placeholder.svg?key=rainy03",
      link: "#rainy-day-season",
      price: "$149",
      duration: "3 Nights",
      discount: "30% OFF",
      features: ["Extended Check-out", "Hot Beverage Bar", "Indoor Games", "Movie Night Setup"],
      gradient: "from-purple-500 to-pink-600",
      popular: false
    },
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-6 py-2 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <Gift className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Special Offers</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Exclusive Packages
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600">
              & Promotions
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated packages designed to make your stay extra special with exclusive benefits and memorable experiences.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.title}
              data-index={index}
              className={`group relative overflow-hidden border-0 shadow-xl transition-all duration-700 cursor-pointer ${
                visiblePackages.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                transform: hoveredPackage === index ? "scale(1.05) translateY(-12px)" : ""
              }}
              onMouseEnter={() => setHoveredPackage(index)}
              onMouseLeave={() => setHoveredPackage(null)}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${pkg.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>

              <div className="relative">
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Icon */}
                  <div className={`absolute top-6 left-6 w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                    <pkg.icon className={`w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r ${pkg.gradient}`} />
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-6 right-6">
                    <Badge className={`bg-gradient-to-r ${pkg.gradient} text-white px-4 py-2 text-sm font-bold shadow-lg`}>
                      {pkg.discount}
                    </Badge>
                  </div>

                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute top-20 right-6">
                      <Badge className="bg-amber-500 text-white px-4 py-2 text-xs font-bold shadow-lg flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Popular
                      </Badge>
                    </div>
                  )}

                  {/* Price & Duration */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <div className="text-4xl font-bold text-white mb-1 drop-shadow-lg">{pkg.price}</div>
                      <div className="text-sm text-white/90">{pkg.duration}</div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8 bg-white">
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${pkg.gradient}`}>
                      {pkg.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-sm text-gray-700 transition-all duration-300 group-hover:translate-x-2"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${pkg.gradient} shadow-lg group-hover:scale-150 transition-transform duration-300`}></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full bg-gradient-to-r ${pkg.gradient} hover:shadow-2xl text-white font-semibold py-6 rounded-xl transition-all duration-500 group/btn overflow-hidden relative`}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center gap-2">
                      MORE INFO
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-3xl p-10 shadow-2xl max-w-3xl">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="w-8 h-8 fill-amber-400 text-amber-400" />
              <Star className="w-8 h-8 fill-amber-400 text-amber-400" />
              <Star className="w-8 h-8 fill-amber-400 text-amber-400" />
              <Star className="w-8 h-8 fill-amber-400 text-amber-400" />
              <Star className="w-8 h-8 fill-amber-400 text-amber-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-gray-600 mb-8 text-lg">
              We offer custom packages tailored to your specific needs. Contact us to create your perfect getaway.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-10 py-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group overflow-hidden relative"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                <span className="relative flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Custom Package Request
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-10 py-6 rounded-xl transition-all duration-300 hover:scale-105 bg-transparent"
              >
                View All Packages
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}