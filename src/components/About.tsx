import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container-tight">
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-left">
            Tom Stacy
          </h2>
          <div className="text-base md:text-md font-semibold text-muted-foreground text-left mb-2">
            Consultant/CTO/VP of Engineering/Architect
          </div>
          <div className="w-20 h-1 bg-primary mt-2 mb-0"></div>
        </div>
        <div className="grid md:grid-cols-4 gap-8 items-center">
          {/* Image: 25% */}
          <div className="flex justify-center items-center md:justify-end col-span-1">
            <img
              src="/images/Tom-Stacy-2.jpeg"
              alt="Tom Stacy portrait"
              className="rounded-lg shadow-lg object-cover w-48 h-48 md:w-56 md:h-56 border-4 border-background"
            />
          </div>
          {/* Profile: 75% */}
          <div className="space-y-6 col-span-3">
            <h3 className="text-2xl font-bold text-primary mb-2">PROFESSIONAL PROFILE</h3>
            <p className="text-base md:text-lg font-light text-muted-foreground">
            Results-driven CTO, VP of Engineering, Consultant, and Technologist with over 25 years of software engineering 
              and leadership experience.
            Strong belief in empowerment and bringing people together to produce outcomes.
            Expertise developing and managing all stages of the software development life cycle including AI adoption strategies.
            Strong technical knowledge of cloud, web, mobile, database, container, CI/CD, and AI technologies.
            Proven experience leading AI adoption, approval, implementation, and trainigng. 
            Documented Track Record of delivering highly scalable cloud solutions. 
            Exceptional work ethic and a systems thinker with excellent technical, problem-solving, organizational, 
              and communication skills in both traditional and AI-augmented environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
