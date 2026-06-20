import { SideOrnament, CornerOrnament } from './ulos-ornament'

export default function InvitationHeader() {
  return (
    <div className="relative w-full bg-gradient-to-br from-[#f5f1e8] via-[#fffbf7] to-[#e8dcc8] overflow-hidden">
      {/* Corner ornaments */}
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />

      {/* Decorative border top */}
      <div className="h-2 bg-gradient-to-r from-[#8b4513] via-[#d4a574] via-[#c41e3a] to-[#8b4513]"></div>
      
      {/* Side ornaments */}
      <SideOrnament position="left" />
      <SideOrnament position="right" />

      {/* Decorative background circles */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-[#d4a574] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-[#c41e3a] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 relative z-10">
        {/* Ornate decoration */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4a574]"></div>
            <div className="text-4xl text-[#d4a574]">✦</div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4a574]"></div>
          </div>
        </div>

        {/* Main text */}
        <div className="text-center mb-8">
          <p className="text-sm md:text-base text-[#6b5344] mb-4 leading-relaxed">
            Dengan segala kerendahan hati,<br />
            kami mengundang Bapak/Ibu/Saudara/i<br />
            untuk hadir dan berkenan memberikan doa restu<br />
            pada acara adat
          </p>
        </div>

        {/* Event title */}
        <div className="text-center mb-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#d4a574]"></div>
            <div className="text-5xl md:text-6xl font-serif text-[#2d1b1a]" style={{ fontStyle: 'italic' }}>
              Mambere
            </div>
            <div className="w-8 h-px bg-[#d4a574]"></div>
          </div>
          <div className="text-3xl md:text-4xl font-serif text-[#2d1b1a] mb-6" style={{ fontStyle: 'italic' }}>
            Duda-duda / Namalum
          </div>
        </div>

        {/* Ornate decoration */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4a574]"></div>
            <div className="text-3xl text-[#d4a574]">❖</div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4a574]"></div>
          </div>
        </div>

        {/* Guest of honor */}
        <div className="text-center">
          <p className="text-base md:text-lg font-serif text-[#2d1b1a] mb-2">Kepada</p>
          <p className="text-lg md:text-xl font-serif text-[#8b4513] mb-1 font-bold">
            Inang Sarikat br. Purba Tambak
          </p>
          <p className="text-base md:text-lg text-[#6b5344] mb-3">
            Ny. Alm. St. Joseph Sipayung
          </p>
          <p className="text-sm text-[#8b4513] italic">
            (Tutua dr. Yosra Mula Maratur Sipayung)
          </p>
        </div>
      </div>

      {/* Decorative border bottom */}
      <div className="h-2 bg-gradient-to-r from-[#8b4513] via-[#d4a574] via-[#c41e3a] to-[#8b4513]"></div>
    </div>
  )
}
