import { Calendar, Clock, MapPin } from 'lucide-react'
import { CornerOrnament } from './ulos-ornament'

export default function EventDetails() {
  return (
    <div className="w-full bg-gradient-to-br from-[#fffbf7] to-[#f5f1e8] py-12 md:py-16 relative overflow-hidden">
      {/* Corner ornaments */}
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <CornerOrnament position="bottom-right" />

      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#d4a574] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#c41e3a] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4a574]"></div>
            <div className="text-3xl text-[#d4a574]">❖</div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4a574]"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-[#2d1b1a]">
            Informasi Acara
          </h2>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Date & Time Combined */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-[#d4a574] p-6">
            <div className="flex items-start gap-3">
              <Calendar className="w-8 h-8 text-[#c41e3a] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#8b4513] mb-3">Tanggal & Waktu</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-semibold text-[#2d1b1a]">Sabtu, 27 Juni 2026</p>
                  </div>
                  <div className="pt-2 border-t border-[#e8dcc8]">
                    <p className="text-xs text-[#8b4513] font-semibold mb-1">09:30 - 10:30 WIB: Kehadiran</p>
                    <p className="text-xs text-[#8b4513] font-semibold mb-1">10:30 - 11:00 WIB: Mambere Duda-duda/Namalum</p>
                    <p className="text-xs text-[#8b4513] font-semibold">13:00 WIB: Makan Bersama</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-lg shadow-lg border-2 border-[#d4a574] p-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-8 h-8 text-[#c41e3a] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#8b4513] mb-3">Tempat</p>
                <p className="text-sm font-bold text-[#2d1b1a] mb-2">Balai Bolon GKPS Teladan</p>
                <p className="text-xs text-[#6b5344] leading-relaxed">
                  Jln. DR. G. M. Panggabean No. 7<br />
                  Kelurahan Teladan Barat<br />
                  Kecamatan Medan Kota<br />
                  Medan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="bg-gradient-to-r from-[#f5f1e8] to-[#e8dcc8] border-2 border-[#d4a574] rounded-lg p-6 md:p-8 text-center">
          <p className="text-[#6b5344] leading-relaxed italic">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan<br />
            hadir serta memberikan doa restu pada acara adat ini.<br />
            <span className="text-[#8b4513] font-semibold">Atas kehadiran dan doa restunya, kami ucapkan terima kasih.</span>
          </p>
        </div>
      </div>
    </div>
  )
}
