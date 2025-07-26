import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box } from '@react-three/drei';
import * as THREE from 'three';

interface ProjectCard3DProps {
  position: [number, number, number];
  title: string;
  description: string;
  color?: string;
  onClick?: () => void;
}

export const ProjectCard3D: React.FC<ProjectCard3DProps> = ({
  position,
  title,
  description,
  color = '#8b5cf6',
  onClick
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
        scale={hovered ? 1.1 : 1}
      >
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial 
          color={hovered ? '#a855f7' : color} 
          transparent
          opacity={0.8}
        />
      </mesh>
      
      <Text
        position={[0, 0.2, 0.06]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        {title}
      </Text>
      
      <Text
        position={[0, -0.1, 0.06]}
        fontSize={0.08}
        color="#e5e7eb"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        {description}
      </Text>
    </group>
  );
};