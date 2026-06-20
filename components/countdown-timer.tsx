'use client'

import { useEffect, useState } from 'react'

interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
  isEnded: boolean
}

export default function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isEnded: false,
  })

  useEffect(() => {
    const calculateTimeRemaining = () => {
      // Event date: June 27, 2026 at 09:30 WIB
      const eventDate = new Date('2026-06-27T09:30:00+07:00')
      const now = new Date()

      const difference = eventDate.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isEnded: true,
        })
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeRemaining({
          days,
          hours,
          minutes,
          seconds,
          isEnded: false,
        })
      }
    }

    // Calculate immediately
    calculateTimeRemaining()

    // Update every second
    const timer = setInterval(calculateTimeRemaining, 1000)

    return () => clearInterval(timer)
  }, [])

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center transform transition-transform hover:scale-105">
      <div className="relative">
        {/* Outer decorative border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#d4a574] to-[#c41e3a] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        {/* Inner box */}
        <div className="relative bg-gradient-to-br from-[#8b4513] to-[#6b3410] text-white rounded-lg p-4 md:p-6 min-w-20 md:min-w-24 shadow-xl border-2 border-[#d4a574]">
          <div className="text-3xl md:text-4xl font-bold text-center font-mono tracking-widest">
            {String(value).padStart(2, '0')}
          </div>
        </div>
      </div>
      <div className="text-[#8b4513] font-bold text-xs md:text-sm mt-3 text-center uppercase tracking-wide">
        {label}
      </div>
    </div>
  )

  return (
    <div className="w-full bg-gradient-to-r from-[#f5f1e8] via-[#fffbf7] to-[#e8dcc8] py-12 md:py-16 border-t-2 border-b-2 border-[#d4a574] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-4 left-4 w-16 h-16 bg-[#d4a574] opacity-5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-4 right-4 w-20 h-20 bg-[#c41e3a] opacity-5 rounded-full blur-2xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4a574]"></div>
            <h2 className="text-2xl md:text-3xl font-serif text-[#2d1b1a]">
              Hitung Mundur
            </h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4a574]"></div>
          </div>
          <p className="text-[#8b4513] font-semibold text-sm">Waktu Menuju Acara</p>
        </div>

        {/* Countdown display */}
        {timeRemaining.isEnded ? (
          <div className="text-center py-8 bg-gradient-to-r from-[#c41e3a]/10 to-[#8b4513]/10 rounded-lg border border-[#c41e3a]/30 backdrop-blur-sm">
            <p className="text-lg md:text-xl text-[#c41e3a] font-bold">
              Acara telah dimulai!
            </p>
            <p className="text-[#6b5344] mt-2">
              Terima kasih telah hadir
            </p>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
            <CountdownBox value={timeRemaining.days} label="Hari" />
            <div className="text-2xl md:text-3xl text-[#d4a574] font-bold">:</div>
            <CountdownBox value={timeRemaining.hours} label="Jam" />
            <div className="text-2xl md:text-3xl text-[#d4a574] font-bold">:</div>
            <CountdownBox value={timeRemaining.minutes} label="Menit" />
            <div className="text-2xl md:text-3xl text-[#d4a574] font-bold">:</div>
            <CountdownBox value={timeRemaining.seconds} label="Detik" />
          </div>
        )}

        {/* Event info */}
        <div className="text-center mt-10">
          <div className="inline-block bg-[#8b4513]/5 backdrop-blur-sm border border-[#d4a574]/30 rounded-lg px-6 py-3">
            <p className="text-[#2d1b1a] font-serif">
              <span className="font-bold text-[#8b4513]">Sabtu, 27 Juni 2026</span>
            </p>
            <p className="text-[#6b5344] text-sm mt-1">
              Pukul <span className="font-semibold">09:30 WIB</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
