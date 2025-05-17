import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background text-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold">Executive Engineer</div>
            <div className="text-sm text-muted-foreground mt-1">Software Engineering Leadership</div>
          </div>
          
          <div className="flex space-x-8">
            <div>
              <div className="font-semibold mb-2">Navigation</div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary">About</a></li>
                <li><a href="#experience" className="hover:text-primary">Experience</a></li>
                <li><a href="#skills" className="hover:text-primary">Skills</a></li>
                <li><a href="#projects" className="hover:text-primary">Projects</a></li>
                <li><a href="#blog" className="hover:text-primary">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <div className="font-semibold mb-2">Connect</div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary">GitHub</a></li>
                <li><a href="#" className="hover:text-primary">Twitter</a></li>
                <li><a href="#contact" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Executive Engineer. All rights reserved.
          </div>
          
          <div className="text-sm text-muted-foreground mt-2 md:mt-0">
            Design with expertise, build with excellence.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
