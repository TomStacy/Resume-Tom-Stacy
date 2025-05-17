import React from 'react';
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Code, Laptop, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Leadership & Strategy",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      skills: [
        "Executive Leadership", 
        "Digital Transformation", 
        "Team Building", 
        "Product Strategy",
        "Global Team Management",
        "Technology Vision",
        "Stakeholder Management",
        "Budget Planning"
      ]
    },
    {
      title: "Technical Expertise",
      icon: <Laptop className="h-6 w-6 text-blue-500" />,
      skills: [
        "Cloud Architecture", 
        "Distributed Systems", 
        "Microservices", 
        "DevOps",
        "System Design",
        "Performance Optimization",
        "Security Architecture",
        "Data Engineering"
      ]
    },
    {
      title: "Cutting-Edge Technologies",
      icon: <Code className="h-6 w-6 text-purple-500" />,
      skills: [
        "AI Development Tools", 
        "Machine Learning", 
        "Natural Language Processing", 
        "Cloud Computing",
        "Containerization",
        "Blockchain",
        "IoT Solutions",
        "Edge Computing"
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-background">
      <div className="container-tight">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Technical Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all bg-card text-card-foreground">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="mr-3 bg-muted p-2 rounded-full">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {category.title}
                  </h3>
                </div>
                
                <hr className="mb-6" />
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-r from-tech-blue to-tech-indigo">
            <CardContent className="p-8 text-white">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">AI Development Leadership</h3>
                  <p className="text-white/80 max-w-lg">
                    Pioneering the adoption of AI tools to transform software development practices 
                    and enhance engineering productivity across the organization.
                  </p>
                </div>
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-lg text-center">
                  <div className="text-4xl font-bold mb-1">25+</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
