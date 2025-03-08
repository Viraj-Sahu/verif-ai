
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedElement from './AnimatedElement';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ayan Bhandari",
      role: "AI Researcher"
    },
    {
      name: "Viraj Kumar Sahu",
      role: "Machine Learning Engineer"
    },
    {
      name: "Harsh Verma",
      role: "Data Scientist"
    },
    {
      name: "Aryan Katariya",
      role: "Full Stack Developer"
    },
    {
      name: "Vishal Sharma",
      role: "UX/UI Designer"
    }
  ];

  return (
    <section id="team" className="section-padding bg-accent">
      <div className="verif-container">
        <AnimatedElement animation="fade-in" className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="font-bold">Our <span className="text-gradient">Team</span></h2>
          <p className="text-muted-foreground">
            Team members - Galactic Codebreakers
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <AnimatedElement 
              key={member.name} 
              animation="fade-in" 
              delay={100 * index}
              className="h-full"
            >
              <Card className="border-border/50 shadow-sm h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-2">
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
