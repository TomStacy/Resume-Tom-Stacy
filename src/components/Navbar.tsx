import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Tech Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <style>{`:root { --navbar-foreground: hsl(210, 40%, 98%); }`}</style>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            {/* "Executive Engineer" text has been removed */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary`}
                style={{ color: 'var(--navbar-foreground)' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {link.name}
              </a>
            ))}
            <span style={{ color: 'var(--navbar-foreground)' }}><ThemeToggle className="" /></span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: 'var(--navbar-foreground)' }}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t mt-4 py-4 px-2 rounded-lg">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2 px-4 rounded hover:bg-muted"
                  style={{ color: 'var(--navbar-foreground)' }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({
                      behavior: 'smooth'
                    });
                    setMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <div className="py-2 px-4">
                <span style={{ color: 'var(--navbar-foreground)' }}><ThemeToggle className="" /></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
