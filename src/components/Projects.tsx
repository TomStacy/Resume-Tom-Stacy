import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI Code Assistant",
      description: "An AI-powered tool that helps developers write better code faster by providing intelligent suggestions and autocompletions.",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      github: "https://github.com/username/ai-code-assistant"
    },
    {
      title: "Enterprise DevOps Platform",
      description: "A comprehensive platform that streamlines the software development lifecycle for enterprise teams, from code to deployment.",
      technologies: ["Kubernetes", "Docker", "Go", "PostgreSQL"],
      github: "https://github.com/username/devops-platform"
    },
    {
      title: "Distributed Systems Framework",
      description: "A robust framework for building scalable distributed systems that can handle high-throughput workloads.",
      technologies: ["Java", "Spring Boot", "Kafka", "Redis"],
      github: "https://github.com/username/distributed-framework"
    }
  ];

  return (
    <section id="projects" className="section bg-background">
      <div className="container-tight">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Notable Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of key technical projects I've contributed to or led. These represent my hands-on technical expertise and passion for innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all bg-card text-card-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            size="lg"
          >
            <Github className="mr-2 h-4 w-4" />
            View All GitHub Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
