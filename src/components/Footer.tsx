import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Linkedin, Github, Mail, User, Briefcase, Code, FolderGit } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative mt-8 border-t border-border/40">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="bg-muted/30 backdrop-blur-sm">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div className="max-w-md">
              <div className="text-2xl font-bold tracking-tight mb-2">Tom Stacy</div>
              <div className="text-lg font-medium text-muted-foreground mb-3">Executive Engineer</div>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">
                Software Engineering Excellence through innovative solutions and technical leadership.
              </p>
            </div>
            
            <div className="flex gap-16 md:gap-20">
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground/90">Navigation</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:underline underline-offset-4 decoration-primary/50 flex items-center gap-2">
                      <User className="h-4 w-4" />
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:underline underline-offset-4 decoration-primary/50 flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:underline underline-offset-4 decoration-primary/50 flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:underline underline-offset-4 decoration-primary/50 flex items-center gap-2">
                      <FolderGit className="h-4 w-4" />
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground/90">Connect</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://www.linkedin.com/in/tom-stacy" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:underline underline-offset-4 decoration-primary/50 flex items-center gap-2"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/TomStacy" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:underline underline-offset-4 decoration-primary/50 flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a 
                      href="mailto:contactme@tomstacy.com" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:underline underline-offset-4 decoration-primary/50 flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <Separator className="my-6 opacity-50" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground/80">
            <div>
              &copy; {currentYear} Tom Stacy. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2">
              <span>Built with</span>
              <span className="text-primary">♦</span>
              <span>React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
