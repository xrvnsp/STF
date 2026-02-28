import React from 'react';

const Logo = ({ className = '', w = 240, h = 80 }) => {
  return (
    <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg width={w} height={h} viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CC2936" />
            <stop offset="100%" stopColor="#A61D27" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4AA96C" />
            <stop offset="100%" stopColor="#2D6B42" />
          </linearGradient>
          <filter id="shadow" x="-5%" y="-5%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
          </filter>
        </defs>
        
        {/* The Heart Shape Logo */}
        <g filter="url(#shadow)">
          <path d="M40 20 C25 5, 5 20, 20 40 L40 65 L60 40 C75 20, 55 5, 40 20 Z" fill="url(#heartGrad)" />
          {/* Decorative 'S' curve inside/overlapping */}
          <path d="M45 25 C30 15, 20 35, 35 45 C50 55, 35 70, 25 60" stroke="#FFD700" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
        
        {/* Leaf Accent */}
        <path d="M55 20 C65 10, 75 15, 70 25 C65 35, 55 30, 55 20 Z" fill="url(#leafGrad)" />
        <path d="M60 25 C68 18, 75 25, 68 32 C60 40, 52 35, 60 25 Z" fill="#69C28A" />

        {/* Text */}
        <text x="85" y="42" fontFamily="Outfit, sans-serif" fontSize="32" fontWeight="800" fill="#CC2936">
          Sharmi
        </text>
        <text x="88" y="60" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#1F3C88">
          Tasty Foods
        </text>
      </svg>
    </div>
  );
};

export default Logo;
