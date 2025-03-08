
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedElement from './AnimatedElement';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ayan Bhandari",
      role: "AI Researcher",
      image: "/placeholder.svg"
    },
    {
      name: "Viraj Kumar Sahu",
      role: "Machine Learning Engineer",
      image: "/placeholder.svg"
    },
    {
      name: "Harsh Verma",
      role: "Data Scientist",
      image: "/placeholder.svg"
    },
    {
      name: "Aryan Katariya",
      role: "Full Stack Developer",
      image: "/placeholder.svg"
    },
    {
      name: "Vishal Sharma",
      role: "UX/UI Designer",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="team" className="section-padding bg-accent">
      <div className="verif-container">
        <AnimatedElement animation="fade-in" className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="font-bold">Meet the <span className="text-gradient">Team</span></h2>
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
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-muted">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
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
