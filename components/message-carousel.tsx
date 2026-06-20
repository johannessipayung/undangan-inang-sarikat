'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Message {
  id: string
  family: string
  message: string
  timestamp: number
}

interface MessageCarouselProps {
  messages: Message[]
}

export default function MessageCarousel({ messages }: MessageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay || messages.length === 0) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoPlay, messages.length])

  if (messages.length === 0) {
    return (
      <div className="w-full bg-gradient-to-br from-[#fffbf7] to-[#f5f1e8] py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center py-12">
            <p className="text-[#6b5344] text-lg">Jadilah yang pertama memberikan ucapan...</p>
          </div>
        </div>
      </div>
    )
  }

  const currentMessage = messages[currentIndex]

  return (
    <div className="w-full bg-gradient-to-br from-[#fffbf7] to-[#f5f1e8] py-12 md:py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-[#d4a574] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#c41e3a] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4a574]"></div>
            <Quote className="w-6 h-6 text-[#c41e3a]" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4a574]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2d1b1a] mb-2">
            Ucapan dan Doa
          </h2>
          <p className="text-[#6b5344] text-sm">
            {messages.length} ucapan telah diterima
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Message Card */}
          <div
            className="bg-white rounded-2xl shadow-2xl border-2 border-[#d4a574] p-8 md:p-10 min-h-80 flex flex-col justify-between relative overflow-hidden transition-all duration-500 ease-in-out"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#d4a574] to-[#c41e3a] opacity-10 rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#d4a574] to-[#c41e3a] opacity-10 rounded-tl-full"></div>

            {/* Message Content */}
            <div className="relative z-10">
              <Quote className="w-10 h-10 text-[#d4a574] opacity-50 mb-4" />
              <p className="text-[#2d1b1a] text-lg leading-relaxed mb-6 italic min-h-24">
                {currentMessage.message}
              </p>
            </div>

            {/* Family Info */}
            <div className="relative z-10 pt-6 border-t-2 border-[#e8dcc8]">
              <p className="font-semibold text-[#8b4513] text-lg">
                — {currentMessage.family}
              </p>
              <p className="text-[#6b5344] text-xs mt-1">
                {new Date(currentMessage.timestamp).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => {
                setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length)
                setAutoPlay(false)
              }}
              className="bg-gradient-to-r from-[#8b4513] to-[#a0522d] hover:from-[#6b3410] hover:to-[#8b4513] text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Previous message"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {messages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setAutoPlay(false)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#c41e3a] w-8'
                      : 'bg-[#d4a574] hover:bg-[#8b4513]'
                  }`}
                  aria-label={`Go to message ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                setCurrentIndex((prev) => (prev + 1) % messages.length)
                setAutoPlay(false)
              }}
              className="bg-gradient-to-r from-[#8b4513] to-[#a0522d] hover:from-[#6b3410] hover:to-[#8b4513] text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Next message"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6 text-[#6b5344] text-sm">
            {currentIndex + 1} dari {messages.length}
          </div>
        </div>
      </div>
    </div>
  )
}
