import { Calendar, Gift, Umbrella } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function PromotionalPackagesSection() {
  const packages = [
    {
      title: "Dad's Getaway",
      description: "Special package for fathers looking for a relaxing retreat with premium amenities and lake views.",
      icon: Gift,
      image: "/placeholder.svg?key=dads01",
      link: "#dads-getaway",
    },
    {
      title: "Brews with Dad",
      description: "Enjoy quality time with dad over craft beverages while taking in the stunning Taal Lake scenery.",
      icon: Calendar,
      image: "/placeholder.svg?key=brews02",
      link: "#brews-with-dad",
    },
    {
      title: "RAINY DAY SEASON",
      description: "Special rates and cozy indoor activities perfect for the rainy season. Stay warm and comfortable.",
      icon: Umbrella,
      image: "/placeholder.svg?key=rainy03",
      link: "#rainy-day-season",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Special Packages & Offers</h2>
          <p className="text-lg text-muted-foreground">Discover our exclusive deals and seasonal promotions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.title}
              className="group hover:hotel-shadow-lg transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-white p-2 rounded-full">
                    <pkg.icon className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{pkg.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{pkg.description}</p>
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold w-full">MORE INFO</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth px-8 bg-transparent"
          >
            VIEW ALL PACKAGES
          </Button>
        </div>
      </div>
    </section>
  )
}
