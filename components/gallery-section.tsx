"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@radix-ui/react-dialog"
// or update the path to the correct local file if you have a custom Dialog component, e.g.:
// import { Dialog, DialogContent } from "./ui/dialog"
import { X, ChevronLeft, ChevronRight, Camera, Play, Pause, ZoomIn, Sparkles, Heart } from "lucide-react"

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
  const [favorites, setFavorites] = useState<number[]>([])
  const [visibleImages, setVisibleImages] = useState<number[]>([])
  const autoPlayRef = useRef<NodeJS.Timeout>()
  const sectionRef = useRef<HTMLDivElement>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleImages((prev) => [...prev, imageIndex])
          }
        })
      },
      { threshold: 0.1 }
    )

    const images = sectionRef.current?.querySelectorAll("[data-index]")
    images?.forEach((img) => observer.observe(img))

    return () => observer.disconnect()
  }, [filteredImages])

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

  const toggleFavorite = (imageId: number) => {
    setFavorites((prev) =>
      prev.includes(imageId) ? prev.filter((id) => id !== imageId) : [...prev, imageId]
    )
  }

  const currentImage = selectedImage ? galleryImages.find((img) => img.id === selectedImage) : null

  return (
    <section 
      id="gallery" 
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <Camera className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wider">Photo Gallery</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover the Beauty
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              of Our Homestay
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a visual journey through our property and experience the warmth, comfort, and natural beauty that
            awaits you at Lakeview Bliss Homestay.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentSlideIndex(0)
                setVisibleImages([])
              }}
              className={`px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 font-semibold ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                  : "border-2 border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 bg-white"
              }`}
            >
              {category}
            </Button>
          ))}

          <Button
            variant="outline"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-4 py-3 rounded-full transition-all duration-300 hover:scale-105 border-2 ${
              isAutoPlay 
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg" 
                : "border-gray-300 text-gray-600 hover:border-blue-500 bg-white"
            }`}
          >
            {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </Button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              data-index={index}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-700 cursor-pointer ${
                visibleImages.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${
                isAutoPlay && index === currentSlideIndex 
                  ? "ring-4 ring-blue-500 ring-opacity-50 scale-105 shadow-2xl" 
                  : "hover:shadow-2xl hover:scale-105"
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Glow effect for active slide */}
              {isAutoPlay && index === currentSlideIndex && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
              )}

              <div className="relative aspect-square overflow-hidden" onClick={() => openLightbox(image.id)}>
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className="mb-3 bg-white/20 backdrop-blur-sm text-white border-0 w-fit">
                    {image.category}
                  </Badge>
                  <h3 className="font-bold text-xl mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>

                {/* Favorite button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFavorite(image.id)
                  }}
                  className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors duration-300 ${
                      favorites.includes(image.id) ? "fill-rose-500 text-rose-500" : "text-gray-600"
                    }`} 
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-7xl w-full h-[95vh] p-0 bg-black/98 border-0 backdrop-blur-xl">
            {currentImage && (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeLightbox}
                  className="absolute top-6 right-6 z-10 w-12 h-12 text-white hover:bg-white/20 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateImage("prev")}
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 text-white hover:bg-white/20 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateImage("next")}
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 text-white hover:bg-white/20 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>

                {/* Image */}
                <img
                  src={currentImage.src || "/placeholder.svg"}
                  alt={currentImage.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-10">
                  <div className="max-w-5xl mx-auto text-white">
                    <Badge className="mb-4 bg-white/20 backdrop-blur-md text-white border-0 text-sm px-4 py-2">
                      {currentImage.category}
                    </Badge>
                    <h3 className="text-4xl font-bold mb-3">{currentImage.title}</h3>
                    <p className="text-gray-200 text-xl">{currentImage.description}</p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-block bg-white rounded-3xl p-10 shadow-2xl max-w-2xl">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience This Beauty?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Don't just look at the pictures—come and live the experience. Book your stay today!
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-12 py-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group overflow-hidden relative"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
              <span className="relative flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Book Your Stay Now
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}