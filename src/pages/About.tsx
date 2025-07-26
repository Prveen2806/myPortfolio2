import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Calendar, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PageTransition } from '@/components/PageTransition';

export const About: React.FC = () => {
  const stats = [
    { icon: Calendar, label: "Years Experience", value: "2+" },
    { icon: Award, label: "Projects Completed", value: "10+" },
    { icon: Target, label: "Happy Clients", value: "15+" },
    { icon: User, label: "Team Collaborations", value: "6+" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden glass-strong hover-glow">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  {/* <User size={120}  className="text-primary" /> */}
                  <img
                    src="/src/assets/profile.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating decorations */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/20 blur-xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-accent/20 blur-xl"
                animate={{ scale: [1.3, 1, 1.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate frontend developer with over 2+ years of professional experience building responsive and dynamic web applications. My journey started with a strong curiosity for how web interfaces come to life, which has grown into a deep interest in creating efficient and user-friendly solutions.
                </p>

                <p>
                  I have worked extensively on 10+ Angular projects, gaining hands-on experience with component-driven architecture, RxJS, and form management. Additionally, I've contributed to 2+ React projects, focusing on reusable UI components, state management, and integrating with modern APIs.
                </p>

                <p>
                  I'm also comfortable working with databases and writing efficient SQL queries using tools like pgAdmin. I enjoy optimizing backend interactions and ensuring smooth data flow across the stack.
                </p>

                <p>
                  When I'm not coding, I enjoy exploring new frameworks, contributing to collaborative projects, and sharpening my skills to stay current with evolving technologies.
                </p>

              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="pt-6"
              >
                <h3 className="text-xl font-semibold mb-4">What drives me:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Building solutions that solve real-world problems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Continuous learning and staying updated with tech trends</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Collaborating with teams to create amazing products</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass hover-glow text-center p-6">
                  <CardContent className="p-0 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <stat.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};