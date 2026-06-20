export function UlosTopBorder() {
  return (
    <div className="w-full bg-gradient-to-r from-[#8b4513] via-[#d4a574] via-[#c41e3a] to-[#8b4513] relative overflow-hidden">
      <div className="h-4 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 1200 20" preserveAspectRatio="none">
          {/* Diagonal pattern inspired by ulos */}
          <defs>
            <pattern id="ulos-pattern" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="40" y2="20" stroke="#f5f1e8" strokeWidth="1" opacity="0.3" />
              <line x1="40" y1="0" x2="0" y2="20" stroke="#f5f1e8" strokeWidth="1" opacity="0.3" />
              <circle cx="20" cy="10" r="2" fill="#f5f1e8" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="1200" height="20" fill="url(#ulos-pattern)" />
          {/* Decorative circles */}
          <circle cx="50" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="150" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="250" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="350" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="450" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="550" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="650" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="750" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="850" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="950" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="1050" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="1150" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
        </svg>
      </div>
    </div>
  )
}

export function UlosBottomBorder() {
  return (
    <div className="w-full bg-gradient-to-r from-[#8b4513] via-[#d4a574] via-[#c41e3a] to-[#8b4513] relative overflow-hidden">
      <div className="h-4 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 1200 20" preserveAspectRatio="none">
          {/* Diagonal pattern inspired by ulos */}
          <defs>
            <pattern id="ulos-pattern-bottom" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
              <line x1="0" y1="20" x2="40" y2="0" stroke="#f5f1e8" strokeWidth="1" opacity="0.3" />
              <line x1="40" y1="20" x2="0" y2="0" stroke="#f5f1e8" strokeWidth="1" opacity="0.3" />
              <circle cx="20" cy="10" r="2" fill="#f5f1e8" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="1200" height="20" fill="url(#ulos-pattern-bottom)" />
          {/* Decorative circles */}
          <circle cx="50" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="150" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="250" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="350" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="450" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="550" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="650" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="750" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="850" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="950" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="1050" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
          <circle cx="1150" cy="10" r="3" fill="#f5f1e8" opacity="0.6" />
        </svg>
      </div>
    </div>
  )
}

export function LeftOlosBar() {
  return (
    <div className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 w-8 h-32 bg-gradient-to-b from-[#8b4513] via-[#d4a574] to-[#8b4513] rounded-r-lg shadow-lg">
      <svg className="w-full h-full" viewBox="0 0 8 128" preserveAspectRatio="none">
        <defs>
          <pattern id="left-ulos" x="0" y="0" width="8" height="20" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="5" r="1.5" fill="#f5f1e8" opacity="0.5" />
            <circle cx="4" cy="15" r="1.5" fill="#f5f1e8" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="8" height="128" fill="url(#left-ulos)" />
      </svg>
    </div>
  )
}

export function RightOlosBar() {
  return (
    <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 w-8 h-32 bg-gradient-to-b from-[#8b4513] via-[#d4a574] to-[#8b4513] rounded-l-lg shadow-lg">
      <svg className="w-full h-full" viewBox="0 0 8 128" preserveAspectRatio="none">
        <defs>
          <pattern id="right-ulos" x="0" y="0" width="8" height="20" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="5" r="1.5" fill="#f5f1e8" opacity="0.5" />
            <circle cx="4" cy="15" r="1.5" fill="#f5f1e8" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="8" height="128" fill="url(#right-ulos)" />
      </svg>
    </div>
  )
}

export function SideOrnament({ position = 'left' }) {
  const positionClass = position === 'left' ? 'left-0' : 'right-0'
  
  return (
    <div className={`absolute ${positionClass} top-4 w-12 h-20 opacity-10`}>
      <svg viewBox="0 0 48 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Decorative batik-like pattern */}
        <g fill="#8b4513">
          <path d="M24 10 L35 25 L24 35 L13 25 Z" opacity="0.6" />
          <path d="M24 35 L35 50 L24 60 L13 50 Z" opacity="0.6" />
          <circle cx="24" cy="20" r="3" opacity="0.7" />
          <circle cx="24" cy="47" r="3" opacity="0.7" />
        </g>
      </svg>
    </div>
  )
}

// Enhanced decorative ornaments for sections
export function DecorativeDivider() {
  return (
    <div className="w-full py-4 flex items-center justify-center">
      <svg className="w-full h-8 max-w-md" viewBox="0 0 400 30" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="divider-pattern" x="0" y="0" width="40" height="30" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="15" r="2" fill="#d4a574" opacity="0.6" />
            <line x1="10" y1="15" x2="30" y2="15" stroke="#d4a574" strokeWidth="0.5" opacity="0.4" />
          </pattern>
        </defs>
        <line x1="0" y1="15" x2="400" y2="15" stroke="#d4a574" strokeWidth="1" opacity="0.5" />
        <rect x="0" y="0" width="400" height="30" fill="url(#divider-pattern)" />
        <circle cx="200" cy="15" r="4" fill="#d4a574" opacity="0.7" />
      </svg>
    </div>
  )
}

export function CornerOrnament({ position = 'top-left' }) {
  const positionClass = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0'
  }[position] || 'top-0 left-0'

  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-left': '-rotate-90',
    'bottom-right': 'rotate-180'
  }[position] || 'rotate-0'

  return (
    <div className={`absolute ${positionClass} ${rotation} w-16 h-16 opacity-20 pointer-events-none`}>
      <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <g fill="none" stroke="#8b4513" strokeWidth="1.5">
          <path d="M 10 50 Q 30 30 50 10" />
          <path d="M 10 40 Q 25 25 40 10" />
          <circle cx="15" cy="45" r="3" fill="#8b4513" opacity="0.5" />
          <circle cx="45" cy="15" r="3" fill="#8b4513" opacity="0.5" />
        </g>
      </svg>
    </div>
  )
}
