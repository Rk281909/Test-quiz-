import React from 'react';

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full aspect-square text-[#E31837]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 42 L20 10 L80 10 Z M58 50 L90 20 L90 80 Z M50 58 L80 90 L20 90 Z M42 50 L10 80 L10 20 Z" />
      </svg>
      <span className="font-bold text-2xl tracking-wide text-[#E31837]" style={{ fontFamily: 'Arial, sans-serif' }}>
        RAKESH
      </span>
    </div>
  );
}
