import React from 'react';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

export const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Undergraduate Researcher',
      company: 'Control Systems Group',
      location: 'University',
      period: '2024 – Present',
      description: [
        'Worked on state estimation algorithms for autonomous systems',
        'Developed MATLAB/Simulink models for control system analysis',
        'Collaborated with graduate students on research publications',
      ],
      type: 'current',
    },
    {
      title: 'Systems & Mechatronics Intern',
      company: 'Robotics Lab',
      location: 'University',
      period: 'Summer 2025',
      description: [
        'Built a ROS-based sensor fusion pipeline for mobile robots',
        'Designed control logic for a 6-DOF robotic manipulator',
        'Implemented real-time path planning algorithms',
      ],
      type: 'upcoming',
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-medium hidden md:block"></div>
                
                <Card className="md:ml-16 p-6 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    
                    <div className="flex flex-col md:items-end text-sm text-muted-foreground mt-2 md:mt-0">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {exp.type === 'current' && (
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-light text-primary">
                        Current
                      </span>
                    </div>
                  )}
                  
                  {exp.type === 'upcoming' && (
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-light text-accent">
                        Upcoming
                      </span>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};