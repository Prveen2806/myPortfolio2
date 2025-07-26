import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingIconProps {
  position: [number, number, number];
  text: string;
  color?: string;
}

export const FloatingIcon: React.FC<FloatingIconProps> = ({ 
  position, 
  text, 
  color = '#8b5cf6' 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <group position={position}>

        {/* Box */}
        <mesh ref={meshRef}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={color} />
        </mesh>

        {/* 3D Text floating above or in front of box */}
        <Text
          position={[0, 0, 0.7]} // move in front of box
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
};
