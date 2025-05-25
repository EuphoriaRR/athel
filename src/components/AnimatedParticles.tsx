
import React from 'react';

const AnimatedParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-particle-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-particle-float delay-1000 opacity-40"></div>
      <div className="absolute top-60 left-1/4 w-1 h-1 bg-white rounded-full animate-particle-float delay-2000 opacity-80"></div>
      <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-particle-float delay-3000 opacity-50"></div>
      <div className="absolute bottom-60 left-1/2 w-4 h-4 bg-blue-300 rounded-full animate-particle-float delay-4000 opacity-30"></div>
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-cyan-500 rounded-full animate-particle-float delay-500 opacity-70"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-float delay-2000"></div>
      
      {/* Network lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.2)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
          </linearGradient>
        </defs>
        <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" />
        <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse delay-1000" />
        <line x1="20%" y1="70%" x2="50%" y2="90%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse delay-2000" />
      </svg>
    </div>
  );
};

export default AnimatedParticles;
