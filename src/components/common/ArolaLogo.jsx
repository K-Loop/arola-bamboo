import React from 'react';

export default function ArolaLogo({ className = "h-11", alt = "Arola Bamboo Products" }) {
  return (
    <img
      src="/image.png"
      alt={alt}
      className={`w-auto object-contain transition-transform duration-300 hover:scale-105 ${className}`}
    />
  );
}
