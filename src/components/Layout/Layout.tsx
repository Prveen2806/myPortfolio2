import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { ParticlesBackground } from './ParticlesBackground';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />
      
      {/* Animated gradient blurs */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(263 70% 60% / 0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(217 91% 60% / 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <Navbar />
      
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
};