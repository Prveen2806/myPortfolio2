import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { FloatingIcon } from './FloatingIcon';

export const HeroScene: React.FC = () => {
  return (
    <div className="w-full h-96 relative">
      <Canvas className="absolute inset-0">
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />

          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, 10]} intensity={0.5} color="#8b5cf6" />

          <FloatingIcon position={[-2, 1, 0]} text="React" color="#61DAFB" />
          <FloatingIcon position={[2, -1, 0]} text="TS" color="#3178C6" />
          <FloatingIcon position={[0, 0, -1]} text="JS" color="#F7DF1E" />
          <FloatingIcon position={[-1, -1.5, 1]} text="CSS" color="#1572B6" />
          <FloatingIcon position={[1.5, 1.5, 1]} text="Angular" color="#DD0031" />


          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
};