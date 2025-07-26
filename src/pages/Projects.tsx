import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProjectCard3D } from '@/components/3D/ProjectCard3D';
import { PageTransition } from '@/components/PageTransition';

export const Projects: React.FC = () => {
const projects = [
  {
    title: "Airline Staff Management System",
    description: "Currently working on a React-based staff management system for a major airline.",
    technologies: ["React", "Redux", "Tailwind", "REST APIs"],
    github: "",
    live: "",
    image: "/placeholder.svg",
    featured: true
  },
  {
    title: "GMAT Insurance Portal",
    description: "Customized Malaysian insurance solutions to meet client-specific needs.",
    technologies: ["Angular", "TypeScript", "Bootstrap"],
    github: "",
    live: "",
    image: "/placeholder.svg",
    featured: true
  },
  {
    title: "TN Tourism Project",
    description: "Developed a tourism app for Tamil Nadu Tourism Development Corporation with a user-focused experience.",
    technologies: ["Angular", "SCSS", "Firebase"],
    github: "",
    live: "",
    image: "/placeholder.svg",
    featured: true
  },
  {
    title: "TVS Management Panels",
    description: "Built budget request workflows and dashboards to streamline internal processes.",
    technologies: ["Angular", "Node.js", "PostgreSQL"],
    github: "",
    live: "",
    image: "/placeholder.svg",
    featured: false
  },
  {
    title: "E-commerce Admin Dashboard",
    description: "Developed admin panels for retail platforms to enhance usability and performance.",
    technologies: ["Angular", "NgRx", "PrimeNG"],
    github: "",
    live: "",
    image: "/placeholder.svg",
    featured: false
  },
  {
    title: "Malindo & Batik Air CMS Panels",
    description: "Led frontend development for CMS admin panels ensuring high operational efficiency.",
    technologies: ["Angular", "Tailwind", "RxJS"],
    github: "",
    live: "",
    image: "/placeholder.svg",
    featured: false
  },
  {
    title: "AMPD Movie Review App",
    description: "Contributed to a movie review platform with interactive and user-friendly design.",
    technologies: ["Angular", "SCSS", "MongoDB"],
    github: "",
    live: "",
    image: "/placeholder.svg",
    featured: false
  },
  {
    title: "Custom Angular Admin Package",
    description: "Created reusable Angular packages to simplify admin functionalities across multiple projects.",
    technologies: ["Angular", "Nx", "TypeScript"],
    github: "",
    live: "",
    image: "/placeholder.svg",
    featured: false
  }
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
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work and the technologies I love to use
          </p>
        </motion.div>

        {/* 3D Projects Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="h-96 mb-16 glass rounded-2xl overflow-hidden"
        >
          <Canvas>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 8]} />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
              
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, 10]} intensity={0.5} color="#8b5cf6" />
              
              <ProjectCard3D
                position={[-3, 1, 0]}
                title="Insurance Platform"
                description="Insurance platform"
                color="#3b82f6"
              />
              <ProjectCard3D
                position={[3, 1, 0]}
                title="Staff Management"
                description="Real-time collaboration"
                color="#10b981"
              />
              <ProjectCard3D
                position={[-1.5, -1, 1]}
                title="AI Chat App"
                description="Smart responses"
                color="#f59e0b"
              />
              <ProjectCard3D
                position={[1.5, -1, 1]}
                title="Portfolio"
                description="3D animations"
                color="#ef4444"
              />
              
              <Environment preset="night" />
            </Suspense>
          </Canvas>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Star className="mr-2 text-primary" size={32} />
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass hover-glow h-full">
                  <CardHeader>
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-4xl font-bold text-primary">{project.title.charAt(0)}</div>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4 pt-4">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8">All Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass hover-glow h-full">
                  <CardHeader className="pb-3">
                    <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-3 flex items-center justify-center">
                      <div className="text-2xl font-bold text-primary">{project.title.charAt(0)}</div>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-primary/5 text-primary">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-muted">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" variant="ghost" className="flex-1 text-xs">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                      <Button size="sm" variant="ghost" className="flex-1 text-xs">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    </PageTransition>
  );
};