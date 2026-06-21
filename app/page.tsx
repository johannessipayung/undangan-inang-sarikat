'use client'

import { useState, useEffect } from 'react'
import InvitationHeader from '@/components/invitation-header'
import ProfileShowcase from '@/components/profile-showcase'
import CountdownTimer from '@/components/countdown-timer'
import LocationMaps from '@/components/location-maps'
import EventDetails from '@/components/event-details'
import FamilyGroups from '@/components/family-groups'
import MessageForm from '@/components/message-form'
import MessageCarousel from '@/components/message-carousel'
import SuccessAlert from '@/components/success-alert'
import SouvenirSection from '@/components/souvenir-section'
import InvitationFooter from '@/components/invitation-footer'
import { UlosTopBorder, UlosBottomBorder, LeftOlosBar, RightOlosBar } from '@/components/ulos-ornament'
import ChatWidget from '@/components/chat-widget'

export interface Message {
  id: string
  family: string
  message: string
  timestamp: number
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([])
  const [showAlert, setShowAlert] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // ==========================================
  // LOGIKA AGRESIF MENGHAPUS LOGO N TURBOPACK
  // ==========================================
  useEffect(() => {
    const removeNextOverlay = () => {
      const overlays = document.querySelectorAll('next-dev-overlay');
      overlays.forEach((overlay) => {
        if (overlay) {
          overlay.remove();
        }
      });
    };

    const interval = setInterval(removeNextOverlay, 100);
    return () => clearInterval(interval);
  }, []);
  // ==========================================

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const response = await fetch('/api/messages')
        
        if (response.ok) {
          const rawData = await response.json()
          
          const parsedData = rawData.map((item: any) => {
            if (typeof item === 'string') {
              try {
                return JSON.parse(item)
              } catch (e) {
                console.error("Gagal parse item individual:", item, e)
                return item
              }
            }
            return item
          })
          
          setMessages(parsedData)
        } else {
          console.warn('Respons API /api/messages mengembalikan status non-200')
        }
      } catch (error) {
        console.error('Error saat memuat ucapan dari server:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadMessages()
  }, [])

  const handleMessageSubmit = (newMessage: Message) => {
    setMessages([newMessage, ...messages])
  }

  const handleShowAlert = () => {
    setShowAlert(true)
  }

  const handleCloseAlert = () => {
    setShowAlert(false)
  }

  return (
    <>
      <SuccessAlert isVisible={showAlert} onClose={handleCloseAlert} />
      
      <main className="w-full overflow-hidden bg-[#f5f1e8] relative transition-colors duration-500">
        {/* Ornamen Tepi dengan Transisi Memudar Lembut */}
        <div className="opacity-90 transition-opacity duration-1000">
          <LeftOlosBar />
          <RightOlosBar />
          <UlosTopBorder />
        </div>

        {/* 1. Header: Muncul Pertama Kali saat Halaman Dimuat */}
        <div className="animate-fade-in duration-1000 ease-out">
          <InvitationHeader />
        </div>

        {/* 2. Profil Showcase: Efek Naik Perlahan dengan Sedikit Jeda */}
        <div className="animate-fade-in-up [animation-duration:1200ms] delay-200">
          <ProfileShowcase />
        </div>

        {/* 3. Kotak Waktu & Detail Acara: Muncul Bergantian */}
        <div className="animate-fade-in-up [animation-duration:1000ms] delay-500 flex flex-col gap-2">
          <CountdownTimer />
          <LocationMaps />
          <EventDetails />
        </div>

        {/* 4. Grup Keluarga & Interaksi Tamu */}
        <div className="transition-all duration-700 ease-in-out">
          <FamilyGroups />
          
          {isLoading ? (
            <div className="w-full text-center py-8 text-[#6b5344] animate-pulse">
              Memuat ucapan hangat...
            </div>
          ) : (
            <div className="animate-fade-in duration-500">
              <MessageCarousel messages={messages} />
            </div>
          )}

          <MessageForm onMessageSubmit={handleMessageSubmit} onShowAlert={handleShowAlert} />
        </div>

        {/* 5. Bagian Penutup */}
        <div className="animate-fade-in [animation-duration:1500ms]">
          <SouvenirSection />
          <InvitationFooter />
          <UlosBottomBorder />
        </div>

        {/* 6. Chatbot Melayang: Menggunakan Efek Denyut Halus agar Menarik Perhatian */}
        <div className="fixed bottom-6 right-6 z-50 animate-bounce [animation-duration:3s] hover:scale-110 transition-transform">
          <ChatWidget />
        </div>
      </main>
    </>
  )
}