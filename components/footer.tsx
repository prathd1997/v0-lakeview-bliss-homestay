"use client"

import { MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <div>
                <span className="font-bold text-lg block leading-tight">Lakeview Bliss</span>
                <span className="text-emerald-400 text-xs">Homestay</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm">
              Your perfect lakeside retreat for peace, comfort, and unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-slate-400 hover:text-emerald-400">Home</Link></li>
              <li><Link href="/rooms" className="text-slate-400 hover:text-emerald-400">Rooms</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-emerald-400">Contact</Link></li>
            </ul>
          </div>

          {/* Room Types */}
          <div>
            <h3 className="font-semibold mb-4">Room Types</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>AC Rooms - ₹3,000</li>
              <li>Non-AC Rooms - ₹2,500</li>
              <li>Lake View - ₹2,000</li>
              <li>Dormitory - ₹600/bed</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:+91-9999-4-2333" className="flex items-center gap-2 text-slate-400 hover:text-emerald-400">
                <Phone className="w-4 h-4" />
                +91-9999-4-2333
              </a>
              <a href="mailto:info@lakeviewbliss.com" className="flex items-center gap-2 text-slate-400 hover:text-emerald-400">
                <Mail className="w-4 h-4" />
                info@lakeviewbliss.com
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Lakeside Road, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
          2024 Lakeview Bliss Homestay. All rights reserved.
        </div>
      </div>
    </footer>
  )
}