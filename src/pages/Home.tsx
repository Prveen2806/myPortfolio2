import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroScene } from '@/components/3D/HeroScene';
import { PageTransition } from '@/components/PageTransition';
import resumePdf from '@/assets/Praveen-ns-resume.pdf'
export const Home: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-primary font-medium"
              >
                Hello, I'm
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="gradient-text">Praveen NS</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-2xl lg:text-3xl font-semibold text-muted-foreground"
              >
                Frontend Developer
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-lg text-muted-foreground max-w-lg leading-relaxed"
              >
                I create exceptional digital experiences through innovative web applications, 
                combining modern design with cutting-edge technology.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a href={resumePdf} download={true}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              </a>
              {/* <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-glow"
              >
                Explore My Work
              </Button> */}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex space-x-6"
            >
              {[
                { icon: Github, href: "https://github.com/Prveen2806", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/praveen-n-s-923874219/", label: "LinkedIn" },
                { icon: Code, href: "https://leetcode.com/u/Praveen_NS/", label: "LeetCode" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-glow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <HeroScene />
            </div>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </section>
    </div>
    </PageTransition>
  );
};