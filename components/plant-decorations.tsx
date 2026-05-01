"use client"

export function PlantDecorations() {
  return (
    <div className="hidden lg:block fixed inset-0 pointer-events-none z-0">
      {/* Left side - curvy vines sticking out from edge */}
      
      {/* Top left vine */}
      <svg
        className="absolute -left-10 top-24 animate-sway origin-left"
        width="140"
        height="200"
        viewBox="0 0 140 200"
        fill="none"
      >
        <path
          d="M0 180 Q50 160 40 120 Q30 80 60 50 Q80 30 70 10"
          stroke="#4ade80"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="35" cy="150" rx="14" ry="7" stroke="#4ade80" strokeWidth="1.5" fill="none" transform="rotate(-20 35 150)" />
        <ellipse cx="38" cy="105" rx="12" ry="6" stroke="#4ade80" strokeWidth="1.5" fill="none" transform="rotate(25 38 105)" />
        <ellipse cx="52" cy="65" rx="12" ry="6" stroke="#4ade80" strokeWidth="1.5" fill="none" transform="rotate(-15 52 65)" />
        <ellipse cx="68" cy="30" rx="10" ry="5" stroke="#4ade80" strokeWidth="1.5" fill="none" transform="rotate(20 68 30)" />
      </svg>

      {/* Middle left vine */}
      <svg
        className="absolute -left-16 top-1/3 animate-sway-reverse origin-left"
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
      >
        <path
          d="M0 80 Q60 90 80 60 Q100 30 130 50"
          stroke="#22d3ee"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="40" cy="85" rx="13" ry="6" stroke="#22d3ee" strokeWidth="1.5" fill="none" transform="rotate(10 40 85)" />
        <ellipse cx="75" cy="65" rx="11" ry="5" stroke="#22d3ee" strokeWidth="1.5" fill="none" transform="rotate(-25 75 65)" />
        <ellipse cx="110" cy="48" rx="10" ry="5" stroke="#22d3ee" strokeWidth="1.5" fill="none" transform="rotate(15 110 48)" />
      </svg>

      {/* Bottom left vine */}
      <svg
        className="absolute -left-8 bottom-48 animate-sway origin-left"
        width="130"
        height="180"
        viewBox="0 0 130 180"
        fill="none"
      >
        <path
          d="M0 160 Q40 140 35 100 Q30 60 70 40 Q90 30 85 10"
          stroke="#4ade80"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="30" cy="130" rx="12" ry="6" stroke="#4ade80" strokeWidth="1.5" fill="none" transform="rotate(-15 30 130)" />
        <ellipse cx="35" cy="85" rx="11" ry="5" stroke="#4ade80" strokeWidth="1.5" fill="none" transform="rotate(20 35 85)" />
        <ellipse cx="60" cy="50" rx="10" ry="5" stroke="#4ade80" strokeWidth="1.5" fill="none" transform="rotate(-20 60 50)" />
      </svg>

      {/* Right side - curvy vines sticking out from edge */}
      
      {/* Top right vine */}
      <svg
        className="absolute -right-10 top-20 animate-sway-reverse origin-right"
        width="140"
        height="220"
        viewBox="0 0 140 220"
        fill="none"
      >
        <path
          d="M140 200 Q90 180 100 140 Q110 100 80 70 Q60 50 70 20"
          stroke="#4ade80"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="105" cy="165" rx="14" ry="7" stroke="#4ade80" strokeWidth="1.5" fill="none" transform="rotate(20 105 165)" />
        <ellipse cx="102" cy="115" rx="12" ry="6" stroke="#4ade80" strokeWidth="1.5" fill="none" transform="rotate(-25 102 115)" />
        <ellipse cx="85" cy="75" rx="11" ry="5" stroke="#4ade80" strokeWidth="1.5" fill="none" transform="rotate(15 85 75)" />
        <ellipse cx="72" cy="40" rx="10" ry="5" stroke="#4ade80" strokeWidth="1.5" fill="none" transform="rotate(-20 72 40)" />
      </svg>

      {/* Middle right vine */}
      <svg
        className="absolute -right-14 top-1/2 animate-sway origin-right"
        width="150"
        height="140"
        viewBox="0 0 150 140"
        fill="none"
      >
        <path
          d="M150 70 Q100 60 80 90 Q60 120 30 100"
          stroke="#22d3ee"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="115" cy="65" rx="12" ry="6" stroke="#22d3ee" strokeWidth="1.5" fill="none" transform="rotate(-10 115 65)" />
        <ellipse cx="78" cy="88" rx="11" ry="5" stroke="#22d3ee" strokeWidth="1.5" fill="none" transform="rotate(25 78 88)" />
        <ellipse cx="45" cy="105" rx="10" ry="5" stroke="#22d3ee" strokeWidth="1.5" fill="none" transform="rotate(-15 45 105)" />
      </svg>

      {/* Bottom right vine */}
      <svg
        className="absolute -right-8 bottom-40 animate-sway-reverse origin-right"
        width="130"
        height="170"
        viewBox="0 0 130 170"
        fill="none"
      >
        <path
          d="M130 150 Q90 135 95 95 Q100 55 65 35 Q45 25 55 5"
          stroke="#4ade80"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="100" cy="125" rx="12" ry="6" stroke="#4ade80" strokeWidth="1.5" fill="none" transform="rotate(15 100 125)" />
        <ellipse cx="95" cy="78" rx="11" ry="5" stroke="#4ade80" strokeWidth="1.5" fill="none" transform="rotate(-20 95 78)" />
        <ellipse cx="72" cy="42" rx="10" ry="5" stroke="#4ade80" strokeWidth="1.5" fill="none" transform="rotate(18 72 42)" />
      </svg>
    </div>
  )
}
