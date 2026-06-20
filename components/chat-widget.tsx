'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: 'Halo! Saya asisten virtual keluarga Besar Sipayung 126. Ada yang ingin Anda tanyakan mengenai riwayat hidup atau informasi acara syukuran Inang Sarikat Br. Purba Tambak?' 
    }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isTyping) return

    const userMessage: Message = { role: 'user', content: input.trim() }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      })

      if (!response.ok) throw new Error()

      const data = await response.json()
      const botReply = data.choices[0]?.message?.content || 'Sorry, something went wrong. Please try again.'
      
      setMessages((prev) => [...prev, { role: 'assistant', content: botReply }])
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Maaf, koneksi server sedang sibuk. Silakan coba beberapa saat lagi.' }])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Pop-up Chat Box */}
      {isOpen && (
        <div className="mb-4 w-85 md:w-[420px] h-[550px] bg-white rounded-2xl shadow-2xl border border-[#e8dcc8] flex flex-col overflow-hidden transition-all duration-300 transform scale-100 origin-bottom-right">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#8b4513] to-[#a0522d] p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-[#f5f1e8]" />
              <div>
                <h3 className="font-semibold text-sm leading-tight">Tanya Riwayat Inang</h3>
                <span className="text-[10px] text-[#f5f1e8] opacity-80">Asisten Virtual Otomatis</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-70 transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#fffbf7]">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#8b4513] text-white rounded-br-none'
                      : 'bg-white border border-[#e8dcc8] text-[#2d1b1a] rounded-bl-none'
                  }`}
                >
                  {msg.role === 'user' ? (
                    <p className="whitespace-pre-line">{msg.content}</p>
                  ) : (
                    /* Render Markdown Otomatis dengan Styling Indah */
                    <div className="prose prose-sm max-w-none text-[#2d1b1a] space-y-1.5 
                      prose-headings:text-[#8b4513] prose-headings:font-semibold prose-headings:mt-2 prose-headings:mb-1
                      prose-strong:text-[#8b4513] prose-strong:font-bold
                      prose-ul:list-disc prose-ul:pl-4 prose-li:my-0.5
                      prose-hr:border-[#e8dcc8] prose-hr:my-2">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Efek Loading saat AI Mengetik */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#e8dcc8] rounded-2xl rounded-bl-none px-4 py-2.5 shadow-sm">
                  <span className="flex gap-1 items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-[#8b4513] rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-[#8b4513] rounded-full animate-bounce delay-200"></span>
                    <span className="w-1.5 h-1.5 bg-[#8b4513] rounded-full animate-bounce delay-300"></span>
                  </span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Form Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-[#e8dcc8] flex gap-2 items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanyakan silsilah/jadwal acara..."
              className="flex-1 px-4 py-2.5 border border-[#d4a574] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:border-transparent text-[#2d1b1a]"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="p-2.5 bg-[#8b4513] text-white rounded-xl hover:bg-[#6b3410] transition disabled:opacity-40 shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button Bulat */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-[#8b4513] to-[#a0522d] hover:from-[#6b3410] hover:to-[#8b4513] text-white px-5 py-3 rounded-full flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 group"
      >
        <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="font-semibold text-sm tracking-wide">Tanya Riwayat</span>
      </button>
    </div>
  )
}