export default function InvitationFooter() {
  return (
    <div className="w-full bg-gradient-to-r from-[#8b4513] via-[#6b3410] to-[#8b4513] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-1/4 w-24 h-24 bg-[#d4a574] rounded-full blur-2xl"></div>
        <div className="absolute bottom-4 right-1/4 w-32 h-32 bg-[#c41e3a] rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14 relative z-10">
        {/* Decorative elements */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4a574]"></div>
          <div className="text-3xl text-[#d4a574]">❋</div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4a574]"></div>
        </div>

        {/* Footer text */}
        <div className="text-center">
          <p className="text-[#d4a574] text-sm md:text-base mb-8 leading-relaxed font-serif">
            Terima kasih atas kehadiran dan doa restu Anda.<br />
            Semoga acara ini menjadi berkah bagi seluruh keluarga.
          </p>

          {/* Closing */}
          <div className="space-y-2 mb-8">
            <p className="text-[#f5f1e8] font-serif text-lg font-semibold">
              Keluarga Besar Sipayung
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#d4a574] to-transparent mb-6"></div>

          {/* Copyright */}
          <p className="text-[#d4a574] text-xs italic">
            © 2026 Acara Adat Mambere Duda-duda/Namalum
          </p>
        </div>

        {/* Decorative bottom */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="w-12 h-px bg-[#d4a574]"></div>
          <span className="text-[#d4a574] text-2xl">✦</span>
          <div className="w-12 h-px bg-[#d4a574]"></div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="h-2 bg-gradient-to-r from-[#d4a574] via-[#c41e3a] to-[#d4a574]"></div>
    </div>
  )
}
