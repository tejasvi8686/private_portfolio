"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, featuring product listings, cart functionality, user authentication, and payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/johndoe/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A drag-and-drop task management application with real-time updates, user collaboration, and customizable workflows.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "TypeScript", "Firebase", "dnd-kit"],
    liveUrl: "https://example.com/taskmanager",
    githubUrl: "https://github.com/johndoe/taskmanager",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current conditions and forecasts for multiple locations, with interactive charts and maps.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Chart.js", "OpenWeather API", "Mapbox"],
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/johndoe/weather",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and responsive design.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    liveUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/johndoe/portfolio",
  },
];

export default function ProjectsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-muted-foreground">A selection of my recent work and personal projects</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="relative h-56 w-full overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      <Button asChild size="sm" variant="secondary" className="rounded-full">
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button asChild size="sm" variant="secondary" className="rounded-full">
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="flex-grow p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <Link 
                      href={project.liveUrl} 
                      target="_blank"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full text-xs px-3">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}