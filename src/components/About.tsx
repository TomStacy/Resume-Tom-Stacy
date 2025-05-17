import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Cpu, Mountain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container-tight">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground">
              I'm an Executive Vice President of Software Engineering with over 25 years of experience leading technology teams and delivering innovative solutions. Throughout my career, I've guided organizations through digital transformation, built high-performing engineering teams, and championed the adoption of emerging technologies.
            </p>
            <p className="text-lg text-foreground">
              Most recently, I've been at the forefront of AI development tools, promoting their responsible adoption and integration into the software development lifecycle. I'm passionate about leveraging technology to solve complex business challenges and create exceptional user experiences.
            </p>
            <p className="text-lg text-foreground">
              When I'm not leading engineering teams, you'll find me on the golf course, hitting the slopes, or enjoying water sports. I'm a firm believer that maintaining physical fitness is crucial for mental acuity and professional performance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <InterestCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 18v-6" />
                <path d="M8 10a4 4 0 0 1 8 0v1" />
                <path d="M22 19c0-3.37-2.37-6-6-6" />
                <path d="M2 19c0-3.37 2.37-6 6-6" />
                <path d="M12 4a2 2 0 0 0-2 2" />
              </svg>} 
              title="Golf"
              description="Single-digit handicap and weekend tournament player"
            />
            <InterestCard 
              icon={<Mountain className="h-10 w-10 text-blue-600" />} 
              title="Skiing"
              description="Snow and water skiing enthusiast for over 20 years"
            />
            <InterestCard 
              icon={<Cpu className="h-10 w-10 text-purple-600" />} 
              title="Technology"
              description="Early adopter of AI development tools and methodologies"
            />
            <InterestCard 
              icon={<Dumbbell className="h-10 w-10 text-red-600" />} 
              title="Fitness"
              description="Daily training regimen for mental and physical wellness"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const InterestCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => {
  return (
    <Card className="hover:shadow-lg transition-all bg-card text-card-foreground">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default About;
