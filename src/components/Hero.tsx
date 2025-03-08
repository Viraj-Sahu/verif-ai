
import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedElement from './AnimatedElement';
import Spline from '@splinetool/react-spline';

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
                An AI tool to detect fake videos, protecting digital truth in today's world of AI-created media.
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in-right" delay={600} className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-verif-blue hover:bg-verif-lightBlue">
                Try Our Solution
              </Button>
            </AnimatedElement>
          </div>
          
          <AnimatedElement animation="fade-in-left" delay={600} className="relative">
            <div className="w-full h-[400px]">
              <Spline scene="https://prod.spline.design/juoFvgImia9NVLcf/scene.splinecode" />
            </div>
          </AnimatedElement>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
