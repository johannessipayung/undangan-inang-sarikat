'use client'

import { useState } from 'react'
import { Heart, Send } from 'lucide-react'
import { type Message } from '@/app/page'

interface MessageFormProps {
  onMessageSubmit: (message: Message) => void
  onShowAlert: () => void
}

export default function MessageForm({ onMessageSubmit, onShowAlert }: MessageFormProps) {
  const [family, setFamily] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!family.trim() || !message.trim()) {
      alert('Mohon isi semua kolom')
      return
    }

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      family: family.trim(),
      message: message.trim(),
      timestamp: Date.now()
    }

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessage),
      })

      if (!response.ok) {
        throw new Error('Gagal menyimpan ucapan ke server')
      }
      
      onMessageSubmit(newMessage)
      onShowAlert()
      setFamily('')
      setMessage('')
    } catch (error) {
      console.error('Error saving message:', error)
      alert('Gagal menyimpan pesan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full bg-gradient-to-br from-[#f5f1e8] via-[#fffbf7] to-[#e8dcc8] py-12 md:py-16 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-[#d4a574] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#c41e3a] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4a574]"></div>
            <Heart className="w-6 h-6 text-[#c41e3a] fill-current" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4a574]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2d1b1a] mb-2">
            Berikan Ucapan
          </h2>
          <p className="text-[#6b5344] text-sm">Berbagi doa dan ucapan terbaik untuk acara spesial ini</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-[#8b4513] mb-2">
              Dari Keluarga
            </label>
            <input
              type="text"
              value={family}
              onChange={(e) => setFamily(e.target.value)}
              placeholder="Masukkan nama keluarga Anda"
              className="w-full px-4 py-3 bg-white border-2 border-[#d4a574] rounded-lg text-[#2d1b1a] placeholder-[#b8a896] focus:outline-none focus:ring-2 focus:ring-[#c41e3a] focus:border-transparent transition"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#8b4513] mb-2">
              Pesan & Doa
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis pesan dan doa terbaik Anda..."
              rows={5}
              className="w-full px-4 py-3 bg-white border-2 border-[#d4a574] rounded-lg text-[#2d1b1a] placeholder-[#b8a896] focus:outline-none focus:ring-2 focus:ring-[#c41e3a] focus:border-transparent transition resize-none"
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#8b4513] to-[#a0522d] hover:from-[#6b3410] hover:to-[#8b4513] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            <Send className="w-5 h-5" />
            {isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
          </button>
        </form>

        <p className="text-center text-xs text-[#6b5344] mt-6">
          Ucapan Anda akan ditampilkan di halaman ini dan dipublikasikan untuk semua pengunjung
        </p>
      </div>
    </div>
  )
}