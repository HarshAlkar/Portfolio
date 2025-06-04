
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DeskProps {
  position?: [number, number, number];
  scale?: number;
}

export const Desk: React.FC<DeskProps> = ({ 
  position = [0, 0, 0], 
  scale = 1 
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t / 4) / 8;
      meshRef.current.position.y = Math.sin(t / 2) / 10 - 2;
    }
  });
  
  return (
    <mesh 
      position={position} 
      scale={scale} 
      ref={meshRef} 
      receiveShadow 
      castShadow
    >
      <boxGeometry args={[4, 0.2, 2]} />
      <meshStandardMaterial color="#333" metalness={0.8} roughness={0.4} />
      
      {/* Monitor stand */}
      <mesh position={[0, 0.7, -0.5]} castShadow>
        <boxGeometry args={[0.2, 1, 0.2]} />
        <meshStandardMaterial color="#222" metalness={0.8} roughness={0.4} />
      </mesh>
      
      {/* Monitor */}
      <mesh position={[0, 1.2, -0.5]} castShadow>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.4} />
      </mesh>
      
      {/* Monitor screen */}
      <mesh position={[0, 1.2, -0.45]} castShadow>
        <boxGeometry args={[1.8, 1, 0.05]} />
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#00ffff"
          emissiveIntensity={0.4} 
        />
      </mesh>
    </mesh>
  );
};
