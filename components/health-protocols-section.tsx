import { Users, Droplets, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HealthProtocolsSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <img
              src="/placeholder.svg?height=400&width=600&text=Health+Safety+Protocols"
              alt="Health and Safety Protocols"
              className="rounded-lg hotel-shadow-lg w-full"
            />
          </div>

          <div className="animate-slide-in-right">
            <h2 className="text-3xl font-bold text-foreground mb-4">Health and Safety Protocols</h2>
            <p className="text-lg text-muted-foreground mb-6">A pleasant day from Lakeview Bliss Homestay!</p>
            <p className="text-muted-foreground mb-8">
              Providing a safe and clean environment for our guests and colleagues is always a top priority for Lakeview
              Bliss Homestay.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Droplets className="w-5 h-5 text-primary" />
                <span className="text-foreground">Frequent cleaning and disinfection of high-touch areas</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-foreground">Social distancing is observed at all times</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-foreground">Hand sanitizing stations are provided throughout the premises</span>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3">LEARN MORE</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
