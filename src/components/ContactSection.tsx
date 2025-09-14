import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For MVP, just show success message
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, or just chatting about robotics and engineering.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're interested in collaboration, have questions about my projects, 
              or just want to connect with a fellow engineering enthusiast, I'd love to hear from you!
            </p>
            
            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full justify-start hover-lift"
                asChild
              >
                <a href="mailto:abdullah@example.com">
                  <Mail className="mr-3 h-5 w-5" />
                  abdullah@example.com
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start hover-lift"
                asChild
              >
                <a href="https://github.com/abdullah" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-3 h-5 w-5" />
                  GitHub Profile
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start hover-lift"
                asChild
              >
                <a href="https://linkedin.com/in/abdullah" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-3 h-5 w-5" />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full accent-gradient hover:shadow-blue"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};