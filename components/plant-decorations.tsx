"use client"

export function PlantDecorations() {
  return (
    <div className="hidden lg:block fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Left side - 4 simple leaves sticking out from edge */}
      
      {/* Left leaf 1 - top */}
      <svg
        className="absolute -left-4 top-[8%] animate-sway origin-left"
        width="80"
        height="40"
        viewBox="0 0 80 40"
        fill="none"
      >
        <path
          d="M0 20 Q40 20 70 15"
          stroke="#22c55e"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M35 20 Q55 10 75 15 Q55 5 35 20"
          stroke="#22c55e"
          strokeWidth="1.2"
          fill="#22c55e"
          fillOpacity="0.1"
        />
        <path d="M45 17 L60 12" stroke="#22c55e" strokeWidth="0.8" opacity="0.7" />
      </svg>

      {/* Left leaf 2 */}
      <svg
        className="absolute -left-6 top-[28%] animate-sway-reverse origin-left"
        width="90"
        height="45"
        viewBox="0 0 90 45"
        fill="none"
      >
        <path
          d="M0 25 Q45 22 80 30"
          stroke="#16a34a"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M40 24 Q65 35 85 28 Q65 40 40 24"
          stroke="#16a34a"
          strokeWidth="1.2"
          fill="#16a34a"
          fillOpacity="0.1"
        />
        <path d="M55 28 L72 30" stroke="#16a34a" strokeWidth="0.8" opacity="0.7" />
      </svg>

      {/* Left leaf 3 */}
      <svg
        className="absolute -left-3 top-[52%] animate-sway origin-left"
        width="70"
        height="40"
        viewBox="0 0 70 40"
        fill="none"
      >
        <path
          d="M0 22 Q35 20 60 12"
          stroke="#4ade80"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M30 20 Q48 8 65 12 Q48 2 30 20"
          stroke="#4ade80"
          strokeWidth="1.2"
          fill="#4ade80"
          fillOpacity="0.1"
        />
        <path d="M40 15 L55 10" stroke="#4ade80" strokeWidth="0.8" opacity="0.7" />
      </svg>

      {/* Left leaf 4 - bottom */}
      <svg
        className="absolute -left-5 top-[75%] animate-sway-reverse origin-left"
        width="85"
        height="45"
        viewBox="0 0 85 45"
        fill="none"
      >
        <path
          d="M0 20 Q42 22 75 28"
          stroke="#15803d"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M38 22 Q60 32 80 26 Q60 38 38 22"
          stroke="#15803d"
          strokeWidth="1.2"
          fill="#15803d"
          fillOpacity="0.1"
        />
        <path d="M50 25 L68 28" stroke="#15803d" strokeWidth="0.8" opacity="0.7" />
      </svg>

      {/* Right side - 4 simple leaves sticking out from edge */}
      
      {/* Right leaf 1 - top */}
      <svg
        className="absolute -right-4 top-[15%] animate-sway-reverse origin-right"
        width="80"
        height="40"
        viewBox="0 0 80 40"
        fill="none"
      >
        <path
          d="M80 18 Q40 20 10 25"
          stroke="#16a34a"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M45 20 Q25 30 5 24 Q25 35 45 20"
          stroke="#16a34a"
          strokeWidth="1.2"
          fill="#16a34a"
          fillOpacity="0.1"
        />
        <path d="M35 23 L18 26" stroke="#16a34a" strokeWidth="0.8" opacity="0.7" />
      </svg>

      {/* Right leaf 2 */}
      <svg
        className="absolute -right-6 top-[38%] animate-sway origin-right"
        width="90"
        height="45"
        viewBox="0 0 90 45"
        fill="none"
      >
        <path
          d="M90 22 Q45 20 10 12"
          stroke="#22c55e"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M50 19 Q28 8 5 14 Q28 2 50 19"
          stroke="#22c55e"
          strokeWidth="1.2"
          fill="#22c55e"
          fillOpacity="0.1"
        />
        <path d="M38 15 L20 10" stroke="#22c55e" strokeWidth="0.8" opacity="0.7" />
      </svg>

      {/* Right leaf 3 */}
      <svg
        className="absolute -right-4 top-[60%] animate-sway-reverse origin-right"
        width="75"
        height="40"
        viewBox="0 0 75 40"
        fill="none"
      >
        <path
          d="M75 20 Q38 22 8 28"
          stroke="#4ade80"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M40 22 Q20 32 5 26 Q20 38 40 22"
          stroke="#4ade80"
          strokeWidth="1.2"
          fill="#4ade80"
          fillOpacity="0.1"
        />
        <path d="M30 25 L15 28" stroke="#4ade80" strokeWidth="0.8" opacity="0.7" />
      </svg>

      {/* Right leaf 4 - bottom */}
      <svg
        className="absolute -right-5 top-[82%] animate-sway origin-right"
        width="85"
        height="45"
        viewBox="0 0 85 45"
        fill="none"
      >
        <path
          d="M85 25 Q42 22 8 15"
          stroke="#15803d"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M45 21 Q22 10 5 16 Q22 5 45 21"
          stroke="#15803d"
          strokeWidth="1.2"
          fill="#15803d"
          fillOpacity="0.1"
        />
        <path d="M32 17 L15 12" stroke="#15803d" strokeWidth="0.8" opacity="0.7" />
      </svg>
    </div>
  )
}
