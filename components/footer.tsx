"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Send, Heart, Sparkles } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail("")
    }, 3000)
  }

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
    { icon: Twitter, href: "#", color: "hover:bg-sky-500" },
    { icon: Youtube, href: "#", color: "hover:bg-red-600" },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Rooms", href: "#rooms" },
    { name: "Gallery", href: "#gallery" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    { name: "Function Rooms", href: "#function-rooms" },
    { name: "Accommodations", href: "#accommodations" },
    { name: "Facilities", href: "#facilities" },
    { name: "Special Packages", href: "#packages" },
    { name: "Events", href: "#events" },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20 border-b border-slate-700/50">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <span className="font-bold text-xl block leading-tight">Lakeview Bliss</span>
                <span className="text-emerald-400 text-sm">Homestay</span>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed">
              Your perfect getaway destination for peace, comfort, and unforgettable memories. Experience luxury hospitality with breathtaking views.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 transition-all duration-300 hover:scale-110 hover:border-transparent ${social.color} hover:text-white`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 border border-slate-700">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold">4.9/5 Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-all duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-emerald-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-xl mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-slate-300 hover:text-emerald-400 transition-all duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-emerald-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-bold text-xl mb-6 relative inline-block">
              Stay Connected
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
            </h3>
            
            <div className="space-y-4 mb-6">
              <a href="#" className="flex items-start gap-3 text-slate-300 hover:text-emerald-400 transition-colors duration-300 group">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">Lakeview Drive, Serene Mountains, Nature Valley</span>
              </a>
              <a href="tel:+919999242333" className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors duration-300 group">
                <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">+91-9999-4-2333</span>
              </a>
              <a href="mailto:info@heavenhomestay.com" className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors duration-300 group">
                <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">info@heavenhomestay.com</span>
              </a>
            </div>

            {/* Newsletter */}
            <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700">
              <p className="text-slate-300 mb-3 text-sm font-medium">Subscribe to our newsletter</p>
              
              {isSubscribed ? (
                <div className="flex items-center justify-center gap-2 py-4 text-emerald-400">
                  <Heart className="w-5 h-5 fill-current animate-pulse" />
                  <span className="font-semibold">Thanks for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl"
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 group overflow-hidden relative"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Send className="w-4 h-4 mr-2" />
                      Subscribe
                    </span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2024 Heaven Home Stay. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
              <span>for travelers</span>
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}