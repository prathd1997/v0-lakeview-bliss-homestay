"use client"

import { Building, Bed, Waves, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect, useRef } from "react"

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
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
      { threshold: 0.2 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "FUNCTION ROOMS",
      description:
        "Host momentous events and entertain your guests with our spacious, modern, and well-designed function rooms.",
      icon: Building,
      image: "/elegant-hotel-function-room-modern-setup-event-spa.jpg",
      link: "#function-rooms",
      features: ["Modern AV Equipment", "Flexible Layouts", "Catering Services"],
    },
    {
      title: "ACCOMMODATIONS",
      description:
        "Browse through our diverse selection of rooms for your stay. Our luxurious beds and spacious room layouts ensure your stay will be delightfully relaxing.",
      icon: Bed,
      image: "/luxury-hotel-bedroom-lake-view-comfortable-bed-mod.jpg",
      link: "#accommodations",
      features: ["Lake View Rooms", "Premium Bedding", "24/7 Room Service"],
    },
    {
      title: "FACILITIES",
      description:
        "If you need to have an unforgettable hotel experience, Lakeview Bliss will deliver. Our facilities are built to accommodate any one of your particular luxuries.",
      icon: Waves,
      image: "/hotel-swimming-pool-spa-facilities-luxury-amenitie.jpg",
      link: "#facilities",
      features: ["Swimming Pool", "Spa Services", "Fitness Center"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4 hover:text-primary transition-colors duration-500 cursor-default">
            Wake up with a smile
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Perched along the sweeping slopes of the ridge, Lakeview Bliss Homestay boasts a majestic panorama of the
            world-famous Taal Lake and Volcano.
          </p>
          <p className="text-muted-foreground mt-4">
            Explore our diverse room lineup, tour experiences, and a wide selection of amenities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              data-index={index}
              className={`group hover:hotel-shadow-lg transition-all duration-700 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50 ${
                visibleCards.includes(index) ? "animate-fade-in-up opacity-100" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.2}s`,
                transform: visibleCards.includes(index) ? "translateY(0)" : "translateY(50px)",
              }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-primary/60 transition-all duration-500"></div>

                <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>

              <CardContent className="p-6 relative">
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-all duration-300"
                      style={{ transitionDelay: `${featureIndex * 100}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-500 bg-transparent group-hover:scale-105 w-full group"
                >
                  EXPLORE
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
