
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Experience from '@/components/Experience';
// import Skills from '@/components/Skills';
import SkillsSimple from '@/components/SkillsSimple';
import Projects from '@/components/Projects';
// import Blog from '@/components/Blog';
// import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      {/* <Skills /> */}
      <SkillsSimple />
      <Experience />
      <Projects />
      {/* <Blog />
      <Contact /> */}
      <Footer />
    </div>
  );
};

export default Index;
