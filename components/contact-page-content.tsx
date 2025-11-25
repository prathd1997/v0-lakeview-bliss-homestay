"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useState } from "react"

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    guests: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-emerald-600 font-semibold mb-2 uppercase tracking-wider text-sm">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-slate-600 text-lg">
            Ready to book your stay? Reach out to us for reservations and inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4">
            <Card className="border border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                <a href="tel:+91-9999-4-2333" className="text-emerald-600 font-medium hover:underline">
                  +91-9999-4-2333
                </a>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                <a href="mailto:info@lakeviewbliss.com" className="text-emerald-600 font-medium hover:underline">
                  info@lakeviewbliss.com
                </a>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">Location</h3>
                <p className="text-slate-600 text-sm">Lakeside Road, Scenic Valley, Maharashtra, India</p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">Hours</h3>
                <p className="text-slate-600 text-sm">Check-in: 2:00 PM | Check-out: 11:00 AM</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-slate-200 bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="border-slate-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="border-slate-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className="border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Number of Guests</label>
                      <Input
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        placeholder="Number of guests"
                        className="border-slate-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Check-in Date</label>
                    <Input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="border-slate-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements, room preferences, etc."
                      rows={4}
                      className="border-slate-300"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6">
                    <Send className="w-5 h-5 mr-2" />
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Pricing Reference */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Quick Pricing Reference</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div>
                <div className="text-2xl font-bold text-emerald-400">₹3,000</div>
                <div className="text-slate-400 text-sm">AC Large Room</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400">₹2,500</div>
                <div className="text-slate-400 text-sm">Non-AC / AC Lake View</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400">₹2,000</div>
                <div className="text-slate-400 text-sm">Non-AC Lake View</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400">₹600</div>
                <div className="text-slate-400 text-sm">Dormitory/bed</div>
              </div>
            </div>
            <a href="tel:+91-9999-4-2333">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                <Phone className="w-4 h-4 mr-2" />
                Call to Book: +91-9999-4-2333
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
