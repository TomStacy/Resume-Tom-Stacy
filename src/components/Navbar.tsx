import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Linkedin, Github, User, Code, Briefcase, FolderGit } from 'lucide-react';
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  // Detect dark mode by checking html.dark
  useEffect(() => {
    const checkDark = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: FolderGit },
    // { name: 'Blog', href: '#blog' },
    // { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? `scrolled ${isDarkMode ? 'bg-background/95' : 'bg-white'} shadow-md backdrop-blur-sm`
          : 'bg-transparent'
      }`}
    >

      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className={`${styles.navbarLink} text-sm font-medium`}>TOM STACY</span>
            <div className="mx-2 self-center h-5" style={{ width: 1, background: 'rgba(255,255,255,0.6)' }} />
            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              <a
                href="mailto:contactme@tomstacy.com"
                className={styles.navbarLink}
                aria-label="Email Tom Stacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-4 w-4" />
              </a>
              <div className="mx-2 self-center h-5" style={{ width: 1, background: 'rgba(255,255,255,0.6)' }} />
              <a
                href="https://www.linkedin.com/in/tom-stacy"
                className={styles.navbarLink}
                aria-label="Tom Stacy on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <div className="mx-2 self-center h-5" style={{ width: 1, background: 'rgba(255,255,255,0.6)' }} />
              <a
                href="https://github.com/tomstacy"
                className={styles.navbarLink}
                aria-label="Tom Stacy on GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${styles.navbarLink} text-sm font-medium flex items-center gap-2`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  <Icon className="h-4 w-4" />
                  {link.name}
                </a>
              );
            })}
            <span className={styles.themeToggle}><ThemeToggle /></span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={styles.themeToggle}
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
          <div className="md:hidden bg-white border-t mt-4 py-4 px-2 rounded-lg">
            <div className="flex flex-col space-y-3">
              {/* Social Icons for Mobile */}
              <span className={`${styles.mobileLink} text-sm font-medium`}>TOM STACY</span>
              <div className="mx-2 self-center h-5" style={{ width: 1, background: 'rgba(255,255,255,0.6)' }} />
              <div className="flex items-center space-x-2">
                <a
                  href="mailto:contactme@tomstacy.com"
                  className={styles.mobileLink}
                  aria-label="Email Tom Stacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <div className="mx-2 self-center h-5" style={{ width: 1, background: 'rgba(255,255,255,0.6)' }} />
                <a
                  href="https://www.linkedin.com/in/tomstacy"
                  className={styles.mobileLink}
                  aria-label="Tom Stacy on LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <div className="mx-2 self-center h-5" style={{ width: 1, background: 'rgba(255,255,255,0.6)' }} />
                <a
                  href="https://github.com/tomstacy"
                  className={styles.mobileLink}
                  aria-label="Tom Stacy on GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`${styles.mobileLink} flex items-center gap-2`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({
                        behavior: 'smooth'
                      });
                      setMobileMenuOpen(false);
                    }}
                  >
                    <Icon className="h-4 w-4" />
                    {link.name}
                  </a>
                );
              })}
              <div className="py-2 px-4">
                <span className={styles.mobileThemeToggle}><ThemeToggle /></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
