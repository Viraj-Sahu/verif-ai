
import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedElement from './AnimatedElement';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-verif-dark">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="verif-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <AnimatedElement animation="fade-in-right" delay={200} className="inline-block">
              <div className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                By Galactic Codebreakers
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in-right" delay={400} className="space-y-4">
              <h1 className="text-white font-bold leading-tight">
                Deepfake Videos: 
                <span className="block text-gradient">Challenges and Solutions</span>
              </h1>
              
              <p className="text-white/80 max-w-md">
                An AI-powered solution to detect and combat deepfake videos, protecting digital integrity in an era of synthetic media.
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in-right" delay={600} className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-verif-blue hover:bg-verif-lightBlue">
                Try Our Solution
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                Learn More
              </Button>
            </AnimatedElement>
          </div>
          
          <AnimatedElement animation="fade-in-left" delay={600} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-verif-blue/30 to-verif-purple/30 rounded-full blur-3xl opacity-70 animate-pulse-light"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Abstract visualization */}
                  <div className="absolute inset-0 rounded-full border-4 border-white/10 animate-spin" style={{ animationDuration: '15s' }}></div>
                  <div className="absolute inset-4 rounded-full border-4 border-verif-blue/20 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
                  <div className="absolute inset-8 rounded-full border-4 border-verif-purple/20 animate-spin" style={{ animationDuration: '5s' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-verif-blue to-verif-purple rounded-2xl animate-float shadow-lg backdrop-blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
