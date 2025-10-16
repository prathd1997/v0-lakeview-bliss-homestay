"use client"

import { Building, Bed, Waves, ArrowRight, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect, useRef } from "react"

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, cardIndex])
          }
        })
      },
      { threshold: 0.2 }
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (hoveredCard !== index) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
    setMousePosition({ x, y })
  }

  const services = [
    {
      title: "FUNCTION ROOMS",
      description:
        "Host momentous events and entertain your guests with our spacious, modern, and well-designed function rooms.",
      icon: Building,
      image: "/elegant-hotel-function-room-modern-setup-event-spa.jpg",
      link: "#function-rooms",
      features: ["Modern AV Equipment", "Flexible Layouts", "Catering Services"],
      capacity: "Up to 200 guests",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      title: "ACCOMMODATIONS",
      description:
        "Browse through our diverse selection of rooms for your stay. Our luxurious beds and spacious room layouts ensure your stay will be delightfully relaxing.",
      icon: Bed,
      image: "/luxury-hotel-bedroom-lake-view-comfortable-bed-mod.jpg",
      link: "#accommodations",
      features: ["Lake View Rooms", "Premium Bedding", "24/7 Room Service"],
      capacity: "12 Unique Rooms",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "FACILITIES",
      description:
        "If you need to have an unforgettable hotel experience, Lakeview Bliss will deliver. Our facilities are built to accommodate any one of your particular luxuries.",
      icon: Waves,
      image: "/hotel-swimming-pool-spa-facilities-luxury-amenitie.jpg",
      link: "#facilities",
      features: ["Swimming Pool", "Spa Services", "Fitness Center"],
      capacity: "Premium Amenities",
      gradient: "from-emerald-500 to-teal-600",
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full px-6 py-2 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Services</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Wake up with a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              smile
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Perched along the sweeping slopes of the ridge, Lakeview Bliss Homestay boasts a majestic panorama of the
            world-famous Taal Lake and Volcano.
          </p>
          
          <p className="text-lg text-gray-500">
            Explore our diverse room lineup, tour experiences, and a wide selection of amenities.
          </p>

          {/* Rating showcase */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-700">4.9/5</span>
            <span className="text-gray-500">from 500+ reviews</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              data-index={index}
              className={`group relative overflow-hidden border-0 shadow-xl transition-all duration-700 cursor-pointer ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                transform: hoveredCard === index 
                  ? `perspective(1000px) rotateX(${-mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg) translateZ(20px)`
                  : "none",
                transition: "all 0.3s ease-out"
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => {
                setHoveredCard(null)
                setMousePosition({ x: 0, y: 0 })
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              {/* Glow effect on hover */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

              <div className="relative">
                {/* Image container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition-all duration-500`}></div>

                  {/* Floating icon */}
                  <div className={`absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                    <service.icon className={`w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`} />
                  </div>

                  {/* Capacity badge */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-semibold text-gray-900">{service.capacity}</span>
                  </div>
                </div>

                <CardContent className="p-8 relative bg-white">
                  {/* Category badge */}
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider shadow-lg">
                    Premium
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${service.gradient}`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features with stagger animation */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-gray-700 transition-all duration-300 group-hover:translate-x-2"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} shadow-lg group-hover:scale-150 transition-transform duration-300`}></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-2xl text-white font-semibold py-6 rounded-xl transition-all duration-500 group/btn overflow-hidden relative`}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center gap-2">
                      EXPLORE MORE
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
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience Luxury?</h3>
            <p className="text-gray-600 mb-6">Book your stay today and discover what makes us special</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-10 py-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Book Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-semibold px-10 py-6 rounded-xl transition-all duration-300 hover:scale-105 bg-transparent"
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}