export const HeroIllustration = () => (
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    {/* Building */}
    <rect x="80" y="150" width="100" height="250" fill="url(#grad1)" rx="10" opacity="0.8" />
    <rect x="100" y="170" width="20" height="20" fill="#fff" opacity="0.5" rx="2" />
    <rect x="140" y="170" width="20" height="20" fill="#fff" opacity="0.5" rx="2" />
    <rect x="100" y="210" width="20" height="20" fill="#fff" opacity="0.5" rx="2" />
    <rect x="140" y="210" width="20" height="20" fill="#fff" opacity="0.5" rx="2" />
    <rect x="100" y="250" width="20" height="20" fill="#fff" opacity="0.5" rx="2" />
    <rect x="140" y="250" width="20" height="20" fill="#fff" opacity="0.5" rx="2" />
    
    {/* Another Building */}
    <rect x="220" y="100" width="120" height="300" fill="url(#grad2)" rx="10" opacity="0.8" />
    <rect x="245" y="120" width="25" height="25" fill="#fff" opacity="0.5" rx="2" />
    <rect x="285" y="120" width="25" height="25" fill="#fff" opacity="0.5" rx="2" />
    <rect x="245" y="165" width="25" height="25" fill="#fff" opacity="0.5" rx="2" />
    <rect x="285" y="165" width="25" height="25" fill="#fff" opacity="0.5" rx="2" />
    <rect x="245" y="210" width="25" height="25" fill="#fff" opacity="0.5" rx="2" />
    <rect x="285" y="210" width="25" height="25" fill="#fff" opacity="0.5" rx="2" />
    
    {/* Person */}
    <circle cx="400" cy="280" r="30" fill="#fbbf24" />
    <rect x="385" y="310" width="30" height="50" fill="url(#grad1)" rx="5" />
    <rect x="380" y="360" width="15" height="40" fill="#1f2937" rx="3" />
    <rect x="405" y="360" width="15" height="40" fill="#1f2937" rx="3" />
    
    {/* Decorative circles */}
    <circle cx="100" cy="80" r="15" fill="#f59e0b" opacity="0.6" />
    <circle cx="380" cy="50" r="20" fill="#ec4899" opacity="0.6" />
    <circle cx="450" cy="150" r="12" fill="#06b6d4" opacity="0.6" />
  </svg>
);

export const EconomyIllustration = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="coin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    {/* Growth arrow */}
    <path d="M 50 250 L 350 50" stroke="#3b82f6" strokeWidth="4" fill="none" strokeDasharray="10,5" />
    <polygon points="350,50 330,60 340,70" fill="#3b82f6" />
    
    {/* Coins */}
    <circle cx="100" cy="230" r="25" fill="url(#coin-grad)" />
    <text x="100" y="235" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold">₫</text>
    
    <circle cx="200" cy="150" r="30" fill="url(#coin-grad)" />
    <text x="200" y="157" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="bold">₫</text>
    
    <circle cx="300" cy="80" r="35" fill="url(#coin-grad)" />
    <text x="300" y="88" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="bold">₫</text>
    
    {/* Bar chart */}
    <rect x="50" y="200" width="30" height="50" fill="#3b82f6" rx="3" />
    <rect x="90" y="180" width="30" height="70" fill="#8b5cf6" rx="3" />
    <rect x="130" y="150" width="30" height="100" fill="#06b6d4" rx="3" />
  </svg>
);

export const TeamworkIllustration = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="person-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    {/* People */}
    <g>
      <circle cx="120" cy="120" r="25" fill="#fbbf24" />
      <rect x="105" y="145" width="30" height="50" fill="url(#person-grad)" rx="5" />
    </g>
    
    <g>
      <circle cx="200" cy="100" r="30" fill="#ec4899" />
      <rect x="182" y="130" width="36" height="60" fill="#8b5cf6" rx="5" />
    </g>
    
    <g>
      <circle cx="280" cy="120" r="25" fill="#06b6d4" />
      <rect x="265" y="145" width="30" height="50" fill="#0891b2" rx="5" />
    </g>
    
    {/* Connecting lines */}
    <path d="M 145 150 L 182 155" stroke="#3b82f6" strokeWidth="3" strokeDasharray="5,5" />
    <path d="M 218 155 L 265 150" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="5,5" />
    
    {/* Hearts */}
    <path d="M 200 50 C 195 45, 185 45, 180 50 C 175 55, 175 60, 180 65 L 200 80 L 220 65 C 225 60, 225 55, 220 50 C 215 45, 205 45, 200 50" fill="#ef4444" opacity="0.8" />
  </svg>
);

export const BookIllustration = () => (
  <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="book-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    {/* Book */}
    <rect x="80" y="80" width="140" height="180" fill="url(#book-grad)" rx="5" />
    <rect x="75" y="85" width="10" height="170" fill="#1e3a8a" rx="2" />
    
    {/* Pages */}
    <line x1="110" y1="120" x2="190" y2="120" stroke="#fff" strokeWidth="2" opacity="0.6" />
    <line x1="110" y1="140" x2="190" y2="140" stroke="#fff" strokeWidth="2" opacity="0.6" />
    <line x1="110" y1="160" x2="170" y2="160" stroke="#fff" strokeWidth="2" opacity="0.6" />
    <line x1="110" y1="180" x2="190" y2="180" stroke="#fff" strokeWidth="2" opacity="0.6" />
    <line x1="110" y1="200" x2="180" y2="200" stroke="#fff" strokeWidth="2" opacity="0.6" />
    
    {/* Bookmark */}
    <rect x="145" y="60" width="10" height="40" fill="#fbbf24" rx="1" />
    
    {/* Light bulb idea */}
    <circle cx="230" cy="120" r="20" fill="#fbbf24" opacity="0.8" />
    <rect x="225" y="140" width="10" height="15" fill="#94a3b8" rx="2" />
    <line x1="210" y1="110" x2="200" y2="100" stroke="#fbbf24" strokeWidth="2" />
    <line x1="250" y1="110" x2="260" y2="100" stroke="#fbbf24" strokeWidth="2" />
    <line x1="210" y1="130" x2="200" y2="140" stroke="#fbbf24" strokeWidth="2" />
  </svg>
);

export const ChartIllustration = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="chart-grad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
        <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
      </linearGradient>
    </defs>
    
    {/* Axes */}
    <line x1="50" y1="250" x2="350" y2="250" stroke="#1f2937" strokeWidth="2" />
    <line x1="50" y1="250" x2="50" y2="50" stroke="#1f2937" strokeWidth="2" />
    
    {/* Area chart */}
    <path d="M 50 230 L 100 200 L 150 180 L 200 150 L 250 130 L 300 100 L 350 80 L 350 250 L 50 250 Z" 
          fill="url(#chart-grad)" />
    
    {/* Line */}
    <path d="M 50 230 L 100 200 L 150 180 L 200 150 L 250 130 L 300 100 L 350 80" 
          stroke="#3b82f6" strokeWidth="3" fill="none" />
    
    {/* Points */}
    <circle cx="50" cy="230" r="5" fill="#3b82f6" />
    <circle cx="100" cy="200" r="5" fill="#3b82f6" />
    <circle cx="150" cy="180" r="5" fill="#3b82f6" />
    <circle cx="200" cy="150" r="5" fill="#3b82f6" />
    <circle cx="250" cy="130" r="5" fill="#3b82f6" />
    <circle cx="300" cy="100" r="5" fill="#3b82f6" />
    <circle cx="350" cy="80" r="5" fill="#3b82f6" />
    
    {/* Arrow up */}
    <path d="M 370 90 L 390 70 L 390 110 Z" fill="#10b981" />
  </svg>
);

export const BalanceIllustration = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="balance-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    {/* Base */}
    <rect x="175" y="200" width="50" height="20" fill="#1f2937" rx="5" />
    <rect x="190" y="100" width="20" height="100" fill="#1f2937" rx="3" />
    
    {/* Balance beam */}
    <rect x="100" y="95" width="200" height="10" fill="url(#balance-grad)" rx="5" />
    
    {/* Left scale */}
    <line x1="120" y1="100" x2="120" y2="140" stroke="#1f2937" strokeWidth="2" />
    <rect x="85" y="140" width="70" height="40" fill="#3b82f6" rx="5" opacity="0.8" />
    <text x="120" y="165" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">Dân</text>
    
    {/* Right scale */}
    <line x1="280" y1="100" x2="280" y2="140" stroke="#1f2937" strokeWidth="2" />
    <rect x="245" y="140" width="70" height="40" fill="#8b5cf6" rx="5" opacity="0.8" />
    <text x="280" y="165" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">Nhà nước</text>
    
    {/* Center point */}
    <circle cx="200" cy="100" r="8" fill="#fbbf24" />
  </svg>
);
