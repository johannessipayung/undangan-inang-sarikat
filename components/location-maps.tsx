import { MapPin } from 'lucide-react'

export default function LocationMaps() {
  // Koordinat Balai Bolon GKPS Teladan, Medan
  const mapsUrl = 'https://www.google.com/maps/place/Baley+Bolon+GKPS+Teladan/@3.5656377,98.6173605,13z/data=!4m10!1m2!2m1!1sbalai+bolon!3m6!1s0x3031315ec1dca7a3:0xbc0695dcf15af647!8m2!3d3.5656377!4d98.6935782!15sCgtiYWxhaSBib2xvbloNIgtiYWxhaSBib2xvbpIBFmZ1bmN0aW9uX3Jvb21fZmFjaWxpdHlaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUmlhVTlIT1cxUlJSQULgAQD6AQQIABA_!16s%2Fg%2F11jybdmdwj?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D'
  const latitude = 3.5656377
  const longitude = 98.6935782

  return (
    <div className="w-full bg-gradient-to-br from-[#fffbf7] to-[#e8dcc8] py-12 md:py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-10 right-1/4 w-40 h-40 bg-[#d4a574] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-[#c41e3a] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4a574]"></div>
            <div className="text-3xl text-[#d4a574]">📍</div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4a574]"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-[#2d1b1a]">Lokasi Acara</h2>
        </div>

        {/* Maps and Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Google Maps Embed */}
          <div className="relative">
            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-xl border-4 border-[#d4a574]">
              {/* Fallback for maps with click to open */}
              <a 
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative group"
              >
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.3482223241044!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30313a1f1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sBalai%20Bolon%20GKPS%20Teladan!5e0!3m2!1sid!2sid!4v1234567890`}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity"></div>
              </a>
            </div>
            <p className="text-center text-xs text-[#8b4513] mt-2 font-semibold">
              Klik untuk membuka Google Maps
            </p>
          </div>

          {/* Location Details */}
          <div className="space-y-4">
            {/* Main Address Card */}
            <div className="bg-gradient-to-br from-white to-[#fffbf7] rounded-xl p-6 border-2 border-[#d4a574] shadow-lg">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#c41e3a] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[#8b4513] mb-2">Balai Bolon GKPS Teladan</h3>
                  <p className="text-sm text-[#6b5344] leading-relaxed">
                    Jln. DR. G. M. Panggabean No. 7<br />
                    Kelurahan Teladan Barat<br />
                    Kecamatan Medan Kota<br />
                    <span className="font-semibold text-[#2d1b1a]">Medan</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Access Link */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-[#8b4513] to-[#6b3410] hover:from-[#a0522d] hover:to-[#8b4513] text-white rounded-lg p-4 text-center font-semibold transition-all duration-300 shadow-lg border-2 border-[#d4a574] group"
            >
              <span className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Buka di Google Maps
              </span>
            </a>

            {/* Tips */}
            <div className="bg-gradient-to-br from-[#f5f1e8] to-[#e8dcc8] rounded-lg p-4 border-l-4 border-[#c41e3a]">
              <p className="text-sm text-[#6b5344] font-serif">
                <span className="font-bold text-[#8b4513]">💡 Tips:</span> Pastikan tiba 10 menit lebih awal agar tidak terburu-buru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
