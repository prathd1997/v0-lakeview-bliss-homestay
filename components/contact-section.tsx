"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Star, CheckCircle, Sparkles, Calendar } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
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
      { threshold: 0.2 }
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "",
        message: "",
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Call us anytime for immediate assistance",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@heavenhomestay.com", "bookings@heavenhomestay.com"],
      description: "Send us your queries and booking requests",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Lakeview Drive", "Peaceful Valley, PV 12345"],
      description: "Visit us at our beautiful lakeside location",
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Check-in: 3:00 PM - 9:00 PM", "Check-out: 8:00 AM - 11:00 AM"],
      description: "Our reception hours and policies",
      gradient: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-500/10"
    },
  ]

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full px-6 py-2 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Contact Us</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get in Touch
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              with Us
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to book your perfect getaway? Have questions about our amenities? We're here to help make your stay
            unforgettable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-xl shadow-2xl border-0 overflow-hidden group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

            <CardContent className="p-10 relative">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-16 animate-fade-in">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-3">Message Sent!</h4>
                  <p className="text-lg text-gray-600">Thank you for contacting us. We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                          focusedField === "name"
                            ? "border-emerald-500 shadow-lg shadow-emerald-500/20"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                          focusedField === "email"
                            ? "border-emerald-500 shadow-lg shadow-emerald-500/20"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                        focusedField === "phone"
                          ? "border-emerald-500 shadow-lg shadow-emerald-500/20"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="relative">
                      <label htmlFor="checkIn" className="block text-sm font-semibold text-gray-700 mb-2">
                        Check-in
                      </label>
                      <Input
                        id="checkIn"
                        name="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("checkIn")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                          focusedField === "checkIn"
                            ? "border-emerald-500 shadow-lg shadow-emerald-500/20"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="checkOut" className="block text-sm font-semibold text-gray-700 mb-2">
                        Check-out
                      </label>
                      <Input
                        id="checkOut"
                        name="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("checkOut")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                          focusedField === "checkOut"
                            ? "border-emerald-500 shadow-lg shadow-emerald-500/20"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 mb-2">
                        Guests
                      </label>
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        max="10"
                        value={formData.guests}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("guests")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                          focusedField === "guests"
                            ? "border-emerald-500 shadow-lg shadow-emerald-500/20"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        placeholder="2"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 resize-none ${
                        focusedField === "message"
                          ? "border-emerald-500 shadow-lg shadow-emerald-500/20"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      placeholder="Tell us about your stay preferences, special requests, or any questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-6 px-6 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group/btn overflow-hidden relative"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></span>
                    {isSubmitting ? (
                      <span className="relative flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="relative flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                data-index={index}
                className={`group relative bg-white/90 backdrop-blur-xl shadow-lg border-0 overflow-hidden transition-all duration-700 hover:shadow-2xl cursor-pointer ${
                  visibleCards.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${info.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

                <CardContent className="p-6 relative">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h4>
                      <div className="space-y-2 mb-3">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-800 font-medium group-hover:text-emerald-600 transition-colors duration-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Reviews Teaser */}
            <Card className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-2xl border-0 overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <CardContent className="p-8 relative">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-300 text-amber-300 animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                  <span className="text-xl font-bold">4.9/5</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">Loved by Our Guests</h4>
                <p className="text-emerald-100 mb-4 leading-relaxed">
                  "Absolutely perfect stay! The hosts were incredibly welcoming and the views were breathtaking. Can't
                  wait to return!"
                </p>
                <p className="text-sm text-emerald-200">- Sarah M., Recent Guest</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-emerald-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Our Location</h4>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8!2d74.2128892!3d16.6912311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1ab92e4f7f733%3A0x435582c697e5c841!2sHEAVEN%20HOME%20STAYS%20Lakeview%20Bliss!5e0!3m2!1sen!2sin!4v1694123456789!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HEAVEN HOME STAYS Lakeview Bliss Location"
                ></iframe>
              </div>
              <div className="mt-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Address:</strong> 136, Rankala Rd, C Ward, SANDHYMATH, Kolhapur, Maharashtra 416012
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Phone:</strong> 09657811819
                </p>
                <a
                  href="https://maps.app.goo.gl/LbNVC3sSNSU48EsF9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors duration-200"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}