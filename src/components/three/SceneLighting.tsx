
import React from 'react';

export const SceneLighting: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <pointLight position={[-10, 10, -10]} intensity={0.5} />
      <pointLight 
        position={[0, 2, 0]} 
        color="#00ffff" 
        intensity={2} 
      />
      <fog attach="fog" args={['#1A1F2C', 8, 30]} />
    </>
  );
};
