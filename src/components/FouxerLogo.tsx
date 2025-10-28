import React from 'react';
import '@fontsource/montserrat/800.css';

export const FouxerLogo: React.FC<{ className?: string }> = ({ className = 'h-8' }) => (
  <div className={`flex items-center ${className}`}>
    <h1 
      className="text-3xl font-extrabold tracking-tight"
      style={{ 
        fontFamily: 'Montserrat',
        background: 'linear-gradient(135deg, #7C3AED 0%, #F97316 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        textShadow: '0 2px 10px rgba(124, 58, 237, 0.3)'
      }}
    >
      FOUXER
    </h1>
  </div>
);