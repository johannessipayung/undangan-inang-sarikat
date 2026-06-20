import { Gift } from 'lucide-react'
import { CornerOrnament } from './ulos-ornament'

export default function SouvenirSection() {
  return (
    <div className="w-full bg-gradient-to-br from-[#fffbf7] to-[#f5f1e8] py-12 md:py-16 relative overflow-hidden">
      {/* Corner ornaments */}
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <CornerOrnament position="bottom-right" />

      {/* Decorative background */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-[#d4a574] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-[#c41e3a] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4a574]"></div>
          <div className="text-3xl text-[#d4a574]">❖</div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4a574]"></div>
        </div>

        {/* Souvenir box */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-[#8b4513] to-[#6b3410] rounded-lg shadow-2xl p-8 md:p-10 border-2 border-[#d4a574]">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-[#d4a574] rounded-full p-4">
                <Gift className="w-8 h-8 text-[#8b4513]" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-serif text-[#d4a574] text-center mb-4">
              Pengambilan Souvenir
            </h3>

            {/* Divider */}
            <div className="h-px bg-[#d4a574] mb-6"></div>

            {/* Content */}
            <p className="text-center text-white leading-relaxed text-base md:text-lg">
              Pengambilan souvenir harap undangan<br />
              dibawa dan souvenir berlaku untuk<br />
              satu undangan.
            </p>

            {/* Bottom decoration */}
            <div className="flex justify-center mt-6">
              <div className="text-[#d4a574] text-2xl">✦</div>
            </div>
          </div>
        </div>

        {/* Additional note */}
        <div className="text-center mt-12">
          <div className="inline-block bg-white rounded-lg shadow-md border-2 border-[#d4a574] p-6 md:p-8 max-w-2xl">
            <p className="text-[#6b5344] mb-4 leading-relaxed">
              Kepada Yth.<br />
              <span className="font-semibold text-[#8b4513]">Bapak/Ibu/Saudara/i :</span>
            </p>
            <p className="text-lg border-b-2 border-[#d4a574] pb-3 text-[#2d1b1a] font-semibold">
              ..........................................
            </p>
            <p className="text-xs text-[#8b4513] mt-3">
              (Mohon tuliskan nama tamu untuk kebutuhan souvenir)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
