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
      // Mencari semua elemen overlay bawaan Turbopack
      const overlays = document.querySelectorAll('next-dev-overlay');
      overlays.forEach((overlay) => {
        if (overlay) {
          overlay.remove();
        }
      });
    };

    // Jalankan pembersihan berkala setiap 100 milidetik secara agresif
    const interval = setInterval(removeNextOverlay, 100);

    return () => {
      clearInterval(interval);
    };
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
      
      <main className="w-full overflow-hidden bg-[#f5f1e8] relative">
        <LeftOlosBar />
        <RightOlosBar />
        <UlosTopBorder />
        <InvitationHeader />
        <ProfileShowcase />
        <CountdownTimer />
        <LocationMaps />
        <EventDetails />
        <FamilyGroups />

        {isLoading ? (
          <div className="w-full text-center py-8 text-[#6b5344]">Memuat ucapan...</div>
        ) : (
          <MessageCarousel messages={messages} />
        )}

        <MessageForm onMessageSubmit={handleMessageSubmit} onShowAlert={handleShowAlert} />
        <SouvenirSection />
        <InvitationFooter />
        <UlosBottomBorder />

        {/* Chatbot Asisten Riwayat Hidup Melayang */}
        <ChatWidget />
      </main>
    </>
  )
}