import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageTransition } from '@/components/PageTransition';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  coverImage?: string;
}

export const Articles: React.FC = () => {
  const articles: Article[] = [
    {
      id: '1',
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure your React applications for maintainability and scalability using TypeScript best practices.",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      featured: true
    },
    {
      id: '2',
      title: "The Power of Framer Motion in Modern Web Design",
      excerpt: "Explore how to create stunning animations and micro-interactions that enhance user experience.",
      publishDate: "2024-01-10",
      readTime: "6 min read",
      tags: ["Animation", "Framer Motion", "UX"],
      featured: true
    },
    {
      id: '3',
      title: "Three.js for Web Developers: Getting Started with 3D",
      excerpt: "A comprehensive guide to integrating 3D graphics into your web applications using Three.js and React Three Fiber.",
      publishDate: "2024-01-05",
      readTime: "12 min read",
      tags: ["Three.js", "3D", "WebGL"],
      featured: false
    },
    {
      id: '4',
      title: "Optimizing Performance in Modern React Apps",
      excerpt: "Essential techniques for improving performance in React applications, from code splitting to memo optimization.",
      publishDate: "2023-12-28",
      readTime: "10 min read",
      tags: ["React", "Performance", "Optimization"],
      featured: false
    },
    {
      id: '5',
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "A practical comparison of CSS Grid and Flexbox with real-world examples and use cases.",
      publishDate: "2023-12-20",
      readTime: "7 min read",
      tags: ["CSS", "Layout", "Frontend"],
      featured: false
    },
    {
      id: '6',
      title: "Building a Design System with Tailwind CSS",
      excerpt: "How to create a consistent and scalable design system using Tailwind CSS and component libraries.",
      publishDate: "2023-12-15",
      readTime: "9 min read",
      tags: ["Tailwind CSS", "Design System", "Components"],
      featured: false
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const recentArticles = articles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
              Featured <span className="gradient-text">Articles</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on modern web development
            </p>
          </motion.div>

          {/* Featured Articles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="glass hover-glow h-full">
                    <CardHeader>
                      <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-4xl font-bold text-primary">
                          {article.title.split(' ')[0].charAt(0)}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{formatDate(article.publishDate)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                            <Tag size={12} className="mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Articles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="glass hover-glow h-full">
                    <CardHeader className="pb-3">
                      <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-3 flex items-center justify-center">
                        <div className="text-2xl font-bold text-primary">
                          {article.title.split(' ')[0].charAt(0)}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                        <div className="flex items-center space-x-1">
                          <Calendar size={12} />
                          <span>{formatDate(article.publishDate)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={12} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-primary/5 text-primary">
                            {tag}
                          </Badge>
                        ))}
                        {article.tags.length > 2 && (
                          <Badge variant="secondary" className="text-xs bg-muted">
                            +{article.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                      
                      <Button size="sm" variant="ghost" className="w-full mt-2 text-xs">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-20"
          >
            <Card className="glass-strong text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Get notified when I publish new articles about web development and design.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="bg-primary hover:bg-primary/90">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};