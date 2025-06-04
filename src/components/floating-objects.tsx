
import React from 'react';

export const FloatingObjects = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Simplified grid background with reduced opacity */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(to right, #00FFFF 1px, transparent 1px), linear-gradient(to bottom, #00FFFF 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      ></div>
      
      {/* Reduced number of floating elements with simpler animations */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-cyber-neon/5 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-2/3 left-2/3 w-12 h-12 rounded-full bg-cyber-pink/5 animate-pulse" style={{ animationDuration: '6s' }}></div>
      
      {/* Simplified code snippets with reduced frequency */}
      <div className="hidden lg:block absolute top-10 right-[10%] text-cyber-neon/15 text-xs opacity-50">
        <pre>{`function init() {
  return process();
}`}</pre>
      </div>
    </div>
  );
};
