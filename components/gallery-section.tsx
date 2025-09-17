"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight, Camera, Play, Pause } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/stunning-taal-lake-view-from-homestay-balcony-sere.jpg",
    alt: "Stunning lake view from the homestay",
    category: "Views",
    title: "Serene Lake Views",
    description: "Wake up to breathtaking lake views every morning",
  },
  {
    id: 2,
    src: "/cozy-living-room-with-fireplace-comfortable-furnit.jpg",
    alt: "Cozy living room with fireplace",
    category: "Interior",
    title: "Cozy Living Spaces",
    description: "Comfortable common areas perfect for relaxation",
  },
  {
    id: 3,
    src: "/beautiful-garden-area-lush-greenery-peaceful-outdo.jpg",
    alt: "Beautiful garden area",
    category: "Exterior",
    title: "Lush Gardens",
    description: "Peaceful garden spaces for morning coffee",
  },
  {
    id: 4,
    src: "/delicious-home-cooked-filipino-meal-traditional-cu.jpg",
    alt: "Delicious home-cooked meal",
    category: "Dining",
    title: "Home-cooked Meals",
    description: "Authentic local cuisine prepared with love",
  },
  {
    id: 5,
    src: "/outdoor-dining-area-al-fresco-lake-view-restaurant.jpg",
    alt: "Outdoor dining area",
    category: "Dining",
    title: "Al Fresco Dining",
    description: "Enjoy meals with stunning outdoor views",
  },
  {
    id: 6,
    src: "/comfortable-hotel-bedroom-cozy-bed-modern-amenitie.jpg",
    alt: "Comfortable bedroom",
    category: "Rooms",
    title: "Comfortable Bedrooms",
    description: "Restful nights in our cozy accommodations",
  },
  {
    id: 7,
    src: "/modern-bathroom-clean-facilities-premium-amenities.jpg",
    alt: "Bathroom with modern amenities",
    category: "Rooms",
    title: "Modern Bathrooms",
    description: "Clean, modern facilities with premium amenities",
  },
  {
    id: 8,
    src: "/sunset-view-from-balcony-golden-hour-taal-lake-rom.jpg",
    alt: "Sunset view from balcony",
    category: "Views",
    title: "Golden Hour Magic",
    description: "Spectacular sunsets from our balconies",
  },
  {
    id: 9,
    src: "/local-activities-attractions-tagaytay-adventure-to.jpg",
    alt: "Local activities and attractions",
    category: "Activities",
    title: "Local Adventures",
    description: "Explore nearby attractions and activities",
  },
  {
    id: 10,
    src: "/secure-parking-area-hotel-facility-safe-convenient.jpg",
    alt: "Parking area",
    category: "Facilities",
    title: "Secure Parking",
    description: "Safe and convenient parking for all guests",
  },
  {
    id: 11,
    src: "/welcoming-hotel-reception-area-modern-lobby-friend.jpg",
    alt: "Reception area",
    category: "Interior",
    title: "Welcoming Reception",
    description: "Warm welcome awaits at our reception",
  },
  {
    id: 12,
    src: "/night-view-property-beautiful-lighting-evening-amb.jpg",
    alt: "Night view of the property",
    category: "Views",
    title: "Evening Ambiance",
    description: "Beautiful property lighting creates magical evenings",
  },
]

const categories = ["All", "Views", "Interior", "Exterior", "Dining", "Rooms", "Activities", "Facilities"]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  useEffect(() => {
    if (isAutoPlay && filteredImages.length > 0) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % filteredImages.length)
      }, 3000)
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlay, filteredImages.length])

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
    setIsAutoPlay(false)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  const currentImage = selectedImage ? galleryImages.find((img) => img.id === selectedImage) : null

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-green-600 text-white px-4 py-2 hover:scale-105 transition-transform duration-300">
            <Camera className="w-4 h-4 mr-2 animate-pulse" />
            Photo Gallery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance hover:text-primary transition-colors duration-500 cursor-default">
            Discover the Beauty of Our Homestay
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Take a visual journey through our property and experience the warmth, comfort, and natural beauty that
            awaits you at Lakeview Bliss Homestay.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentSlideIndex(0)
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-green-600 text-white shadow-lg"
                  : "border-gray-300 text-gray-600 hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </Button>
          ))}

          <Button
            variant="outline"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
              isAutoPlay ? "bg-primary text-white" : "border-gray-300 text-gray-600 hover:border-primary"
            }`}
          >
            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-slide-up hover:-translate-y-2 hover:rotate-1 ${
                isAutoPlay && index === currentSlideIndex ? "ring-4 ring-primary ring-opacity-50 scale-105" : ""
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                transform: isAutoPlay && index === currentSlideIndex ? "scale(1.05)" : "scale(1)",
              }}
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <Badge className="mb-2 bg-white/20 backdrop-blur-sm text-white border-0 animate-pulse">
                    {image.category}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Camera className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-6xl w-full h-[90vh] p-0 bg-black/95 border-0">
            {currentImage && (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 rounded-full"
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full"
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full"
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>

                {/* Image */}
                <img
                  src={currentImage.src || "/placeholder.svg"}
                  alt={currentImage.alt}
                  className="max-w-full max-h-full object-contain"
                />

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="max-w-4xl mx-auto text-white">
                    <Badge className="mb-3 bg-white/20 backdrop-blur-sm text-white border-0">
                      {currentImage.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-2">{currentImage.title}</h3>
                    <p className="text-gray-200 text-lg">{currentImage.description}</p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 animate-fade-in-up">Ready to experience this beauty in person?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 animate-fade-in-up"
          >
            Book Your Stay Now
          </Button>
        </div>
      </div>
    </section>
  )
}
