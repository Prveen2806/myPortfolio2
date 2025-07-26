import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, Palette, GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageTransition } from '@/components/PageTransition';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-purple-600",
      skills: ["React", "TypeScript", "Next.js", "Angular", "Tailwind CSS", "Framer Motion", "CSS", "HTML","JavaScript","bootstrap","Anular Material"]
    },
    {
      title: "Backend Development", 
      icon: Database,
      color: "from-green-500 to-blue-500",
      skills: ["Node.js", "Express", "PostgreSQL", "REST APIs","MSSQL",]
    },
    {
      title: "Cloud",
      icon: Cloud,
      color: "from-orange-500 to-red-500", 
      skills: ["AWS", "Nginx"]
    },
    // {
    //   title: "Mobile Development",
    //   icon: Smartphone,
    //   color: "from-purple-500 to-pink-500",
    //   skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "Firebase"]
    // },
    {
      title: "Design & UX",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      skills: ["Figma", "UI/UX Design"]
    },
    {
      title: "Tools & Workflow",
      icon: GitBranch,
      color: "from-teal-500 to-green-500",
      skills: ["Git", "GitHub", "VS Code", "Jira", "Slack", "Notion", "Agile","Bitbucket","version control"]
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
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="glass hover-glow h-full">
                <CardHeader className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div 
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-20 blur-sm`}
                    />
                    <div 
                      className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                    >
                      <category.icon size={24} className="text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Levels Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Proficiency <span className="gradient-text">Levels</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { skill: "Angular/TypeScript", level: 95 },
              { skill: "React/TypeScript", level: 95 },
              { skill: "Node.js/Express", level: 50 },
              { skill: "AWS/Cloud", level: 50 },
              { skill: "UI/UX Design", level: 70 },
              { skill: "Three.js/3D", level: 55 },
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-primary font-bold">{item.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 1 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    </PageTransition>
  );
};