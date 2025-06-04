
import React, { useEffect, useRef, useState } from 'react';

interface TrailDot {
  x: number;
  y: number;
  alpha: number;
  size: number;
}

export const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const dotsRef = useRef<TrailDot[]>([]);
  const requestRef = useRef<number>();
  const lastMouseMove = useRef<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      
      // Throttle mouse events for better performance
      if (now - lastMouseMove.current < 50) return;
      lastMouseMove.current = now;
      
      // Only add dots occasionally and limit total count
      if (Math.random() > 0.8 && dotsRef.current.length < 15) {
        dotsRef.current.push({
          x: e.clientX,
          y: e.clientY,
          alpha: 0.6,
          size: Math.random() * 2 + 1,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    const animate = () => {
      if (!canvasRef.current || !ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Update and draw dots with simpler rendering
      dotsRef.current.forEach((dot, i) => {
        dot.alpha *= 0.95;
        
        // Simple circle drawing
        ctx.beginPath();
        ctx.fillStyle = `rgba(0, 255, 255, ${dot.alpha})`;
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Remove faded dots
        if (dot.alpha < 0.1) {
          dotsRef.current.splice(i, 1);
        }
      });
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
};
