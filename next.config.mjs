/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Tambahan konfigurasi untuk mematikan indikator dev (logo N) di pojok kiri bawah
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
}

export default nextConfig