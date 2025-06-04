
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface LightRingProps {
  position?: [number, number, number];
}

export const LightRing: React.FC<LightRingProps> = ({ 
  position = [0, -1.5, 0] 
}) => {
  const ringRef = useRef<THREE.Mesh>(null!);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.1;
    }
  });
  
  return (
    <mesh 
      ref={ringRef} 
      rotation={[Math.PI / 2, 0, 0]} 
      position={position}
    >
      <ringGeometry args={[4, 4.1, 64]} />
      <meshBasicMaterial 
        color="#00ffff" 
        transparent 
        opacity={0.3} 
      />
    </mesh>
  );
};
