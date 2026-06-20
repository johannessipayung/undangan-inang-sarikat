'use client'

import { useEffect, useState } from 'react'
import { CheckCircle2, X } from 'lucide-react'

interface SuccessAlertProps {
  isVisible: boolean
  onClose: () => void
}

export default function SuccessAlert({ isVisible, onClose }: SuccessAlertProps) {
  const [isShowing, setIsShowing] = useState(isVisible)

  useEffect(() => {
    setIsShowing(isVisible)

    if (isVisible) {
      const timer = setTimeout(() => {
        setIsShowing(false)
        onClose()
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  return (
    <>
      {isShowing && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-fadeIn"></div>

          {/* Alert Container */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <div className="bg-gradient-to-br from-[#f5f1e8] to-[#fffbf7] rounded-2xl shadow-2xl border-2 border-[#d4a574] p-8 md:p-10 max-w-md w-11/12 animate-bounceIn">
              {/* Corner ornaments */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-[#c41e3a] to-[#d4a574] opacity-20 rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-[#c41e3a] to-[#d4a574] opacity-20 rounded-tl-full"></div>

              {/* Close Button */}
              <button
                onClick={() => {
                  setIsShowing(false)
                  onClose()
                }}
                className="absolute top-4 right-4 text-[#6b5344] hover:text-[#8b4513] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-[#c41e3a] to-[#8b4513] shadow-lg">
                    <CheckCircle2 className="h-7 w-7 text-white animate-scaleIn" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 relative z-10">
                  <h3 className="text-lg font-bold text-[#8b4513] mb-1">
                    Ucapan Terkirim!
                  </h3>
                  <p className="text-sm text-[#6b5344] leading-relaxed">
                    Terima kasih telah berbagi doa dan ucapan terbaik Anda. Ucapan Anda akan segera ditampilkan di carousel.
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6 h-1 bg-[#e8dcc8] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#8b4513] to-[#c41e3a] animate-shrinkWidth"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes bounceIn {
          0% {
            transform: translate(-50%, -50%) scale(0.3);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          70% {
            transform: translate(-50%, -50%) scale(1.05);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes shrinkWidth {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-bounceIn {
          animation: bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-shrinkWidth {
          animation: shrinkWidth 4s linear;
        }
      `}</style>
    </>
  )
}
