import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Autonomous Line Following Robot',
      emoji: '🚗',
      description: 'A real-time computer vision system using Arduino and OpenCV for autonomous navigation with PID control for precise line tracking.',
      technologies: ['Arduino', 'OpenCV', 'C++', 'PID Control'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
    {
      title: 'Smart Energy Monitor',
      emoji: '⚡',
      description: 'IoT device built with ESP32 that monitors energy consumption in real-time and sends data to cloud dashboard via MQTT protocol.',
      technologies: ['ESP32', 'MQTT', 'IoT', 'React'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
    {
      title: 'Course Planner Web App',
      emoji: '📚',
      description: 'A responsive web application to help students plan their academic semesters with course prerequisites and scheduling conflicts.',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
    },
    {
      title: 'Robotic Arm Controller',
      emoji: '🦾',
      description: 'ROS-based control system for a 6-DOF robotic arm with inverse kinematics and path planning capabilities.',
      technologies: ['ROS', 'Python', 'Kinematics', 'MATLAB'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of projects showcasing my passion for robotics, embedded systems, and software development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`p-6 hover-lift transition-all duration-300 ${
                project.featured ? 'ring-2 ring-primary ring-opacity-20' : ''
              }`}
            >
              {project.featured && (
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-light text-primary">
                    Featured
                  </span>
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="text-3xl mr-3">{project.emoji}</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};