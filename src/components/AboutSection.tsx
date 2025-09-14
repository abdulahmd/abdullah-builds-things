import React from 'react';
import { Card } from '@/components/ui/card';

export const AboutSection = () => {
  const skills = [
    { name: 'Python', emoji: '🐍' },
    { name: 'C++', emoji: '⚡' },
    { name: 'MATLAB', emoji: '📊' },
    { name: 'ROS', emoji: '🤖' },
    { name: 'Arduino', emoji: '🔧' },
    { name: 'Simulink', emoji: '📈' },
    { name: 'CAD', emoji: '🎨' },
    { name: 'React', emoji: '⚛️' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="text-center">
            <div className="w-64 h-64 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent shadow-large relative overflow-hidden">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate freshman year student pursuing Systems & Mechatronics Engineering. 
              My interests span across robotics, embedded systems, and control algorithms, with a 
              particular fascination for developing front-end tools for robotics applications.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I love the intersection where mechanical systems meet intelligent software, 
              constantly exploring how to make technology more accessible and intuitive through 
              thoughtful engineering and design.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Technologies & Tools</h3>
              <div className="grid grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <Card 
                    key={skill.name}
                    className="p-4 text-center hover-lift skill-icon cursor-pointer"
                  >
                    <div className="text-2xl mb-2">{skill.emoji}</div>
                    <div className="text-sm font-medium">{skill.name}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};