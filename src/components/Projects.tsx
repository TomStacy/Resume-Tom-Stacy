import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "This Website!",
      description: "A modern portfolio website built with AI assistance using cutting-edge web technologies for fast performance and beautiful design.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind", "shadcn"],
      github: "https://github.com/TomStacy/Resume-Tom-Stacy"
    },
    {
      title: "Enterprise DevOps Platform",
      description: "A comprehensive platform that streamlines the software development lifecycle for enterprise teams, from code to deployment.",
      technologies: ["Kubernetes", "Docker", "Go", "PostgreSQL"]
    },
    {
      title: "Distributed Systems Framework",
      description: "A robust framework for building scalable distributed systems that can handle high-throughput.",
      technologies: ["Java", "Spring Boot", "Kafka", "Redis"]
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
            <Card key={index} className="bg-card text-card-foreground">
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
                      <span key={i} className="bg-muted text-muted-foreground text-xs py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`w-full flex items-center justify-center gap-2 ${
                    project.github 
                      ? 'transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-md hover:scale-105' 
                      : ''
                  }`}
                  {...(project.github && {
                    asChild: true
                  })}
                >
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  ) : (
                    <>
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:shadow-md"
            size="lg"
            asChild
          >
            <a href="https://github.com/TomStacy" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="mr-2 h-4 w-4" />
              View All GitHub Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
