
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, CheckCircle, UserCheck } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const ImportanceSection = () => {
  const pillars = [
    {
      icon: <CheckCircle className="h-12 w-12 text-verif-blue" />,
      title: "Authenticity",
      description: "Ensuring trustworthy digital content by identifying deepfakes and preventing misinformation"
    },
    {
      icon: <UserCheck className="h-12 w-12 text-verif-purple" />,
      title: "AI-powered detection",
      description: "Developing a user-friendly web interface that makes advanced detection technology accessible to everyone"
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-verif-blue" />,
      title: "Security",
      description: "Ensuring public awareness about deepfakes and providing tools to protect digital identity"
    }
  ];

  return (
    <section id="importance" className="section-padding bg-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="verif-container relative z-10">
        <AnimatedElement animation="fade-in" className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="font-bold">Why It <span className="text-gradient">Matters</span></h2>
          <p className="text-muted-foreground">
            In an era of increasingly sophisticated synthetic media, deepfake detection is essential 
            to preserve trust and security in our digital ecosystem.
          </p>
        </AnimatedElement>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <AnimatedElement 
              key={pillar.title} 
              animation="fade-in" 
              delay={200 * index}
              className="h-full"
            >
              <Card className="bg-white border-border/50 shadow-md h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="p-4 rounded-full bg-accent">
                    {pillar.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{pillar.title}</h3>
                    <p className="text-muted-foreground">{pillar.description}</p>
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

export default ImportanceSection;
