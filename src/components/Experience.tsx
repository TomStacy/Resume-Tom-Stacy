import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, TrendingUp, Rocket } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Executive VP of Software Engineering",
      company: "Tech Innovations Inc.",
      period: "2018 - Present",
      description: "Leading a 200+ engineering organization across multiple product lines. Spearheaded AI adoption within engineering practices, resulting in 35% increased developer productivity.",
      icon: <Rocket className="h-8 w-8 text-blue-500" />
    },
    {
      title: "CTO",
      company: "Digital Solutions Group",
      period: "2012 - 2018",
      description: "Transformed the technology organization through agile methodologies and DevOps practices. Built and scaled engineering teams from 20 to 120 engineers across 5 global locations.",
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />
    },
    {
      title: "VP of Engineering",
      company: "TechFront Systems",
      period: "2005 - 2012",
      description: "Led multiple successful product launches with engineering excellence. Pioneered cloud migration strategy resulting in 40% cost reduction and improved system reliability.",
      icon: <BarChart className="h-8 w-8 text-green-500" />
    }
  ];

  return (
    <section id="experience" className="section bg-background">
      <div className="container-tight">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-l-primary bg-card text-card-foreground">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="flex items-center justify-center bg-muted p-6 md:p-8">
                    <div className="bg-background p-4 rounded-full shadow-md">
                      {exp.icon}
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">
                          {exp.title}
                        </h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <p className="text-foreground">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            Note: This represents key positions from a 25+ year career in tech leadership
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
