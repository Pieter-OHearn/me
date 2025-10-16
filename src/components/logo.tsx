export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pieter O'Hearn Logo"
    >
      {/* Outer circle with gradient border */}
      <circle
        cx="60"
        cy="60"
        r="56"
        stroke="url(#logo-gradient)"
        strokeWidth="2.5"
        fill="none"
      />
      
      {/* P letterform */}
      <path
        d="M35 40 L35 80 M35 40 L50 40 C55.5 40 60 44.5 60 50 C60 55.5 55.5 60 50 60 L35 60"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* O letterform */}
      <circle
        cx="75"
        cy="60"
        r="12"
        stroke="currentColor"
        strokeWidth="3.5"
        fill="none"
      />
      
      {/* Accent dot */}
      <circle
        cx="60"
        cy="50"
        r="2"
        fill="url(#logo-gradient)"
      />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
    </svg>
  )
}
