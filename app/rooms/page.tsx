"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RoomsPageContent } from "@/components/rooms-page-content"

export default function RoomsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <RoomsPageContent />
      <Footer />
    </main>
  )
}
