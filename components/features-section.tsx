"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Car, Coffee, Mountain, Utensils, Shield } from "lucide-react"

const features = [
  {
    icon: Mountain,
    title: "Scenic Views",
    description: "Wake up to breathtaking mountain and lake views every morning",
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "Stay connected with high-speed internet throughout your stay",
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Complimentary parking space for all our guests",
  },
  {
    icon: Coffee,
    title: "Welcome Drinks",
    description: "Enjoy complimentary tea, coffee, and local refreshments",
  },
  {
    icon: Utensils,
    title: "Home-cooked Meals",
    description: "Savor authentic local cuisine prepared with love",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "24/7 security and safety measures for peace of mind",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Heaven Home Stay?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide everything you need for a comfortable and memorable stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
