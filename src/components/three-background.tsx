
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useIsMobile } from '@/hooks/use-mobile';
import { Desk } from './three/Desk';
import { LightRing } from './three/LightRing';
import { SceneLighting } from './three/SceneLighting';

export const ThreeBackground: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 2, 10], fov: 45 }}
        dpr={[0.5, isMobile ? 1 : 1.5]} // Reduced DPR for better performance
        performance={{ min: 0.1 }} // Lower performance threshold
        frameloop="demand" // Only render when needed
      >
        <SceneLighting />
        <Desk position={[0, 0, 0]} scale={isMobile ? 0.5 : 0.8} />
        <LightRing />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={false}
          enableDamping={false}
        />
      </Canvas>
    </div>
  );
};
