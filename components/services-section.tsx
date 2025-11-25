"use client"

import { Building, Bed, Waves, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      title: "Accommodations",
      description: "Comfortable rooms with modern amenities and stunning lake views for a relaxing stay.",
      icon: Bed,
      image: "/luxury-hotel-bedroom-lake-view-comfortable-bed-mod.jpg",
      features: ["AC & Non-AC Options", "Lake View Rooms", "Attached Bathroom"],
      link: "/rooms"
    },
    {
      title: "Function Hall",
      description: "Spacious hall perfect for events, meetings, and family gatherings.",
      icon: Building,
      image: "/elegant-hotel-function-room-modern-setup-event-spa.jpg",
      features: ["Up to 50 Guests", "Modern Setup", "Catering Available"],
      link: "/contact"
    },
    {
      title: "Facilities",
      description: "Premium amenities to make your stay comfortable and memorable.",
      icon: Waves,
      image: "/hotel-swimming-pool-spa-facilities-luxury-amenitie.jpg",
      features: ["Free WiFi", "Parking", "24/7 Support"],
      link: "/contact"
    },
  ]

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-emerald-600 font-semibold mb-2 uppercase tracking-wider text-sm">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-slate-600 text-lg">
            Everything you need for a comfortable and memorable stay at Lakeview Bliss Homestay.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link href={service.link}>
                  <Button
                    variant="outline"
                    className="w-full border-slate-300 text-slate-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Ready to Book Your Stay?
          </h3>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Contact us today to check availability and make your reservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rooms">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 font-semibold rounded-lg"
              >
                View Rooms
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-6 font-semibold rounded-lg bg-white"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}