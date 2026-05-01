"use client"

export function PlantDecorations() {
  return (
    <>
      {/* Left side plants */}
      <div className="fixed left-4 top-0 h-full w-24 pointer-events-none hidden lg:flex flex-col justify-around py-16 overflow-hidden">
        {/* Top left branch */}
        <div className="animate-sway origin-top">
          <svg viewBox="0 0 60 150" className="w-16 h-40 opacity-40">
            <path d="M30 0 Q28 50 32 100 Q30 130 30 150" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground/60" />
            {/* Leaves alternating */}
            <path d="M30 25 Q20 20 15 28 Q20 35 30 30" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M30 25 Q40 20 45 28 Q40 35 30 30" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M31 50 Q21 45 16 53 Q21 60 31 55" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M31 50 Q41 45 46 53 Q41 60 31 55" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M32 75 Q22 70 17 78 Q22 85 32 80" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M32 75 Q42 70 47 78 Q42 85 32 80" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M31 100 Q21 95 16 103 Q21 110 31 105" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M31 100 Q41 95 46 103 Q41 110 31 105" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M30 125 Q20 120 15 128 Q20 135 30 130" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M30 125 Q40 120 45 128 Q40 135 30 130" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
          </svg>
        </div>
        
        {/* Middle left - simple vine */}
        <div className="animate-sway-reverse origin-top -ml-2">
          <svg viewBox="0 0 50 120" className="w-12 h-32 opacity-35">
            <path d="M25 0 Q30 40 22 80 Q28 100 25 120" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground/60" />
            <path d="M25 20 Q15 18 12 25 Q18 30 25 25" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M23 45 Q33 43 36 50 Q30 55 23 50" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M22 70 Q12 68 9 75 Q15 80 22 75" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M25 95 Q35 93 38 100 Q32 105 25 100" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
          </svg>
        </div>

        {/* Bottom left branch */}
        <div className="animate-sway origin-bottom">
          <svg viewBox="0 0 60 140" className="w-14 h-36 opacity-40">
            <path d="M30 140 Q28 90 32 40 Q30 20 30 0" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground/60" />
            <path d="M30 120 Q18 118 14 125 Q20 132 30 125" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M30 120 Q42 118 46 125 Q40 132 30 125" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M31 95 Q19 93 15 100 Q21 107 31 100" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M31 95 Q43 93 47 100 Q41 107 31 100" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M32 70 Q20 68 16 75 Q22 82 32 75" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M32 70 Q44 68 48 75 Q42 82 32 75" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M31 45 Q19 43 15 50 Q21 57 31 50" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M31 45 Q43 43 47 50 Q41 57 31 50" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M30 20 Q18 18 14 25 Q20 32 30 25" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M30 20 Q42 18 46 25 Q40 32 30 25" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
          </svg>
        </div>
      </div>

      {/* Right side plants */}
      <div className="fixed right-4 top-0 h-full w-24 pointer-events-none hidden lg:flex flex-col justify-around py-16 overflow-hidden items-end">
        {/* Top right drooping branch */}
        <div className="animate-sway-reverse origin-top">
          <svg viewBox="0 0 60 130" className="w-14 h-32 opacity-35">
            <path d="M30 0 Q35 45 28 90 Q32 110 30 130" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground/60" />
            <path d="M32 20 Q22 17 18 24 Q24 30 32 25" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M32 20 Q42 17 46 24 Q40 30 32 25" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M30 50 Q20 47 16 54 Q22 60 30 55" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M30 50 Q40 47 44 54 Q38 60 30 55" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M28 80 Q18 77 14 84 Q20 90 28 85" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M28 80 Q38 77 42 84 Q36 90 28 85" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M30 110 Q20 107 16 114 Q22 120 30 115" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
          </svg>
        </div>

        {/* Middle right - tall stem */}
        <div className="animate-sway origin-bottom mr-2">
          <svg viewBox="0 0 50 150" className="w-12 h-40 opacity-40">
            <path d="M25 150 Q23 100 27 50 Q25 25 25 0" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground/60" />
            <path d="M25 130 Q15 127 11 134 Q17 140 25 135" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M26 105 Q36 102 40 109 Q34 115 26 110" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M27 80 Q17 77 13 84 Q19 90 27 85" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M26 55 Q36 52 40 59 Q34 65 26 60" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M25 30 Q15 27 11 34 Q17 40 25 35" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
          </svg>
        </div>

        {/* Bottom right small branch */}
        <div className="animate-sway-reverse origin-bottom">
          <svg viewBox="0 0 55 100" className="w-14 h-28 opacity-35">
            <path d="M28 100 Q26 60 30 20 Q28 10 28 0" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-foreground/60" />
            <path d="M28 85 Q18 82 14 89 Q20 95 28 90" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M28 85 Q38 82 42 89 Q36 95 28 90" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M29 60 Q19 57 15 64 Q21 70 29 65" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M29 60 Q39 57 43 64 Q37 70 29 65" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M30 35 Q20 32 16 39 Q22 45 30 40" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
            <path d="M30 35 Q40 32 44 39 Q38 45 30 40" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/60" />
          </svg>
        </div>
      </div>
    </>
  )
}
