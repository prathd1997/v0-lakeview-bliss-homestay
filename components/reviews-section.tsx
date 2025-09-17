"use client"

import { Star, Quote, ChevronLeft, ChevronRight, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"

export function ReviewsSection() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [visibleReviews, setVisibleReviews] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  const reviews = [
    {
      name: "IsheMulungu",
      date: "2024-06-09",
      title: "Fantastic Tagaytay Philippines 🇵🇭",
      content:
        "Lovely Hotel with spectacular views of the Taal Lake and the Volcano with great porter service by Harry... amazing!! Lovely breakfast and close to many restaurants, Bars and many important attractions around the area. Easy access to local transportation too..",
      rating: 5,
      avatar: "/placeholder.svg?key=im001",
    },
    {
      name: "kangprincess",
      date: "2024-06-06",
      title: "Worth staying",
      content:
        "I liked how there were multiple outlets for charging. The room was nice and the staff were all very kind. The bed and pillows were okay. The pool is my favorite. Feels good to swim and admire the nice view. We stayed in the deluxe suite for one night.",
      rating: 5,
      avatar: "/placeholder.svg?key=kp002",
    },
    {
      name: "Jerney Lynn G",
      date: "2024-06-02",
      title: "Amazing!",
      content:
        "Hotel Management and Staff were amazing! The view from the outdoor pool is spectacular. Facilities are well kept and their buffet breakfast are delicious. Highly recommended for everyone! We will definitely come back again. An unforgettable stay for the entire family.",
      rating: 5,
      avatar: "/placeholder.svg?key=jg003",
    },
    {
      name: "Marjorie L",
      date: "2024-05-25",
      title: "best bulalo",
      content:
        "the food and service was superb😊 love the guyanano juice😍 thank you eatigo for giving us a deal.. everything was perfect except for the weather it's raining when we dine so we have didn't have a chance to enjoy the view while having our special lunch.",
      rating: 5,
      avatar: "/placeholder.svg?key=ml004",
    },
    {
      name: "Krissha Belle R",
      date: "2024-05-17",
      title: "AWESOME!!",
      content:
        "Views are great and staff is really wonderful! True epitome of filipino hospitality especially Ms. Angela, Sir Michael and Sir Niño Angelo. Thank you so much for your kindness and warm assistance. Our family really had a great time. Til next time! :)",
      rating: 5,
      avatar: "/placeholder.svg?key=kr005",
    },
    {
      name: "Tresh D",
      date: "2024-05-05",
      title: "SUPERB!",
      content:
        "Me and my family really enjoyed our stay! super comfortable kami sa room, sa mga staff na napaka accommodating, friendly and i really love how they always smile and greet you kapag nakakasalubong ka nila. Ang sarap ng mga food sa breakfast buffet superb! i really love listening sa nagppiano❤️ we love everything on this hotel during our stay. See you soon! ❤️",
      rating: 5,
      avatar: "/placeholder.svg?key=td006",
    },
  ]

  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentReviewIndex((prev) => (prev + 1) % reviews.length)
      }, 4000)
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
  }, [isAutoPlay, reviews.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reviewIndex = Number.parseInt(entry.target.getAttribute("data-review-index") || "0")
            setVisibleReviews((prev) => [...prev, reviewIndex])
          }
        })
      },
      { threshold: 0.2 },
    )

    const reviewCards = sectionRef.current?.querySelectorAll("[data-review-index]")
    reviewCards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length)
    setIsAutoPlay(false)
  }

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    setIsAutoPlay(false)
  }

  return (
    <section className="py-20 bg-secondary relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4 hover:text-primary transition-colors duration-500 cursor-default">
            Guest Reviews
          </h2>
          <p className="text-lg text-muted-foreground">What our guests are saying about their experience</p>

          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse"
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.9</span>
            <span className="text-muted-foreground">({reviews.length} reviews)</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <Card className="bg-gradient-to-br from-primary/5 to-green-50 border-primary/20 hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                    <img
                      src={reviews[currentReviewIndex].avatar || "/placeholder.svg"}
                      alt={reviews[currentReviewIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-foreground">{reviews[currentReviewIndex].name}</h4>
                    <div className="flex items-center gap-2">
                      {[...Array(reviews[currentReviewIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">{reviews[currentReviewIndex].date}</span>
                    </div>
                  </div>
                </div>

                <Quote className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">{reviews[currentReviewIndex].title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{reviews[currentReviewIndex].content}</p>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevReview}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextReview}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Review indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentReviewIndex(index)
                  setIsAutoPlay(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentReviewIndex ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={`${review.name}-${review.date}`}
              data-review-index={index}
              className={`hover:hotel-shadow-lg transition-all duration-700 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/30 ${
                visibleReviews.includes(index) ? "animate-fade-in-up opacity-100" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: visibleReviews.includes(index) ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform duration-200"
                    />
                  ))}
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <Quote className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 hover:text-primary transition-colors duration-300">
                      {review.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{review.content}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{review.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
