import Image from 'next/image'
import { CornerOrnament } from './ulos-ornament'

export default function ProfileShowcase() {
  return (
    <div className="w-full bg-gradient-to-b from-[#f5f1e8] via-[#fffbf7] to-[#e8dcc8] py-16 md:py-20 relative overflow-hidden">
      {/* Corner ornaments */}
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <CornerOrnament position="bottom-right" />

      {/* Decorative background circles */}
      <div className="absolute top-10 left-1/4 w-40 h-40 bg-[#d4a574] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#c41e3a] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4a574]"></div>
            <div className="text-4xl text-[#d4a574]">✦</div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4a574]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2d1b1a] mb-2">
            Mambere Duda-duda / Namalum
          </h2>
          <p className="text-[#8b4513] font-semibold">Inang Sarikat br. Purba Tambak</p>
          <p className="text-[#6b5344] text-sm">Ny. Alm. St. Joseph Sipayung</p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Photo Section */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Outer decorative frame */}
              <div className="absolute -inset-6 md:-inset-8 bg-gradient-to-br from-[#d4a574] via-[#c41e3a] to-[#8b4513] rounded-2xl opacity-80"></div>
              
              {/* Inner gold border */}
              <div className="absolute -inset-4 md:-inset-6 border-4 border-[#d4a574] rounded-2xl"></div>
              
              {/* Photo */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl w-64 md:w-80 h-96 md:h-96">
                <Image
                  src="/inang-sarikat.jpg"
                  alt="Inang Sarikat br. Purba Tambak"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Corner ornaments */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#c41e3a] rounded-full border-2 border-[#d4a574] shadow-lg"></div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#c41e3a] rounded-full border-2 border-[#d4a574] shadow-lg"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-[#c41e3a] rounded-full border-2 border-[#d4a574] shadow-lg"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-[#c41e3a] rounded-full border-2 border-[#d4a574] shadow-lg"></div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 -left-8 w-4 h-16 bg-gradient-to-b from-[#d4a574] to-[#c41e3a] rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-16 bg-gradient-to-b from-[#d4a574] to-[#c41e3a] rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            {/* Opening greeting */}
            <div className="bg-gradient-to-br from-white to-[#fffbf7] rounded-xl p-6 md:p-8 border-2 border-[#d4a574] shadow-lg">
              <p className="text-[#2d1b1a] leading-relaxed font-serif text-justify">
                Dengan segala kerendahan hati, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan berkenan memberikan doa restu pada acara adat
              </p>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4a574]"></div>
              <span className="text-2xl text-[#d4a574]">❋</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4a574]"></div>
            </div>

            {/* Closing message */}
            <div className="bg-gradient-to-r from-[#c41e3a]/10 to-[#8b4513]/10 rounded-xl p-6 border-l-4 border-[#c41e3a]">
              <p className="text-[#6b5344] font-serif italic leading-relaxed">
                Kiranya bapak/ibu sekalian dapat memberikan kehadiran dan doa restu pada acara ini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
