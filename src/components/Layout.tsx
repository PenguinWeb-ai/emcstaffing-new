import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);

    // Handle anchor scrolling after route change
    const hash = location.hash;
    if (hash) {
      // Wait for the new page to load
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    if (window.innerWidth < 1024) { // lg breakpoint
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    }
  };

  const handleAboutClick = (sectionId?: string) => {
    handleNavClick();
    if (location.pathname === '/about' && sectionId) {
      scrollToSection(sectionId);
    }
  };

  const handleReadyClick = (sectionId?: string) => {
    handleNavClick();
    if (location.pathname === '/ready-to-work' && sectionId) {
      scrollToSection(sectionId);
    }
  };

  const handleRequestClick = (sectionId?: string) => {
    handleNavClick();
    if (location.pathname === '/request-consultant' && sectionId) {
      scrollToSection(sectionId);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const preventContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white shadow-md z-50" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="flex justify-between h-28">
            <div className="flex-shrink-0 flex items-center py-4">
              <Link 
                to="/" 
                onClick={() => { scrollToTop(); handleNavClick(); }} 
                className="focus:outline-none"
                aria-label="EMC Staffing Home"
              >
                <img 
                  src="/transparent4.webp" 
                  alt="EMC Staffing Logo" 
                  width="300"
                  height="300"
                  className="h-24 w-auto object-contain" 
                  onContextMenu={preventContextMenu}
                  draggable="false"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </Link>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                onClick={scrollToTop}
                className={`text-secondary hover:text-highlight transition-colors font-semibold text-sm relative pb-2 ${
                  isActive('/') ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.125rem] after:bg-primary' : ''
                }`}
                aria-label="Home"
                aria-current={isActive('/') ? 'page' : undefined}
              >
                HOME
              </Link>
              <div className="relative group">
                <button
                  className={`text-secondary group-hover:text-highlight transition-colors font-semibold text-sm relative pb-2 flex items-center ${
                    isActive('/about') ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.125rem] after:bg-primary' : ''
                  }`}
                >
                  ABOUT EMC
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)] transition-all duration-300 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                >
                  <Link
                    to="/about"
                    onClick={() => { handleNavClick(); scrollToTop(); }}
                    className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors text-sm"
                  >
                    Who We Are
                  </Link>
                  <Link
                    to="/about#what-sets-us-apart"
                    onClick={() => handleAboutClick('what-sets-us-apart')}
                    className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors text-sm"
                  >
                    What Sets Us Apart?
                  </Link>
                 
                  <Link
                    to="/about#mission"
                    onClick={() => handleAboutClick('mission')}
                    className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors text-sm"
                  >
                    Mission
                  </Link>

                  <Link
                    to="/about#vision"
                    onClick={() => handleAboutClick('vision')}
                    className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors text-sm"
                  >
                    Vision
                  </Link>

                  <Link
                    to="/about#core-values"
                    onClick={() => handleAboutClick('core-values')}
                    className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors text-sm"
                  >
                    Core Values
                  </Link>
                  
                  <Link
                    to="/about#leadership"
                    onClick={() => handleAboutClick('leadership')}
                    className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors text-sm"
                  >
                    Leadership
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button
                  className={`text-secondary group-hover:text-highlight transition-colors font-semibold text-sm relative pb-2 flex items-center ${
                    isActive('/ready-to-work') ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.125rem] after:bg-primary' : ''
                  }`}
                >
                  READY TO WORK
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)] transition-all duration-300 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                >
                  <Link
                    to="/ready-to-work"
                    onClick={() => { handleNavClick(); scrollToTop(); }}
                    className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors text-sm"
                  >
                    Make a Difference
                  </Link>
                  <Link
                    to="/ready-to-work#how-it-works"
                    onClick={() => handleReadyClick('how-it-works')}
                    className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors text-sm"
                  >
                    How it Works
                  </Link>
                  <Link
                    to="/ready-to-work#lets-get-started"
                    onClick={() => handleReadyClick('lets-get-started')}
                    className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors text-sm"
                  >
                    Let's Get Started!
                  </Link>
                  <Link
                    to="/ready-to-work#candidates-faq"
                    onClick={() => handleReadyClick('candidates-faq')}
                    className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors text-sm"
                  >
                    Candidates' FAQ
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button
                  className={`text-secondary group-hover:text-highlight transition-colors font-semibold text-sm relative pb-2 flex items-center ${
                    isActive('/request-consultant') ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.125rem] after:bg-primary' : ''
                  }`}
                >
                  REQUEST A CONSULTANT
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)] transition-all duration-300 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                >
                  <Link
                    to="/request-consultant"
                    onClick={() => { handleNavClick(); scrollToTop(); }}
                    className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors text-sm"
                  >
                    Expert Support
                  </Link>
                  <Link
                    to="/request-consultant#our-process"
                    onClick={() => handleRequestClick('our-process')}
                    className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors text-sm"
                  >
                    Our Process
                  </Link>
                  <Link
                    to="/request-consultant#submit-request"
                    onClick={() => handleRequestClick('submit-request')}
                    className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors text-sm"
                  >
                    Submit a Request
                  </Link>
                  <Link
                    to="/request-consultant#clients-faq"
                    onClick={() => handleRequestClick('clients-faq')}
                    className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors text-sm"
                  >
                    Clients' FAQ
                  </Link>
                </div>
              </div>
              <Link 
                to="/contact"
                onClick={handleNavClick}
                className={`px-6 py-2 bg-primary text-white hover:bg-highlight transition-colors duration-300 rounded-lg font-semibold text-sm ${
                  isActive('/contact') ? 'bg-highlight' : ''
                }`}
                aria-label="Contact Us"
                aria-current={isActive('/contact') ? 'page' : undefined}
              >
                CONTACT
              </Link>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="lg:hidden text-secondary p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                onClick={() => { scrollToTop(); handleNavClick(); }}
                className={`block px-4 py-3 text-sm text-secondary hover:text-highlight w-full text-left font-semibold ${
                  isActive('/') ? 'border-l-4 border-primary' : ''
                }`}
              >
                HOME
              </Link>
              <Link 
                to="/about"
                onClick={() => { scrollToTop(); handleNavClick(); }}
                className={`block px-4 py-3 text-sm text-secondary hover:text-highlight w-full text-left font-semibold ${
                  isActive('/about') ? 'border-l-4 border-primary' : ''
                }`}
              >
                ABOUT EMC
              </Link>
              <Link 
                to="/ready-to-work"
                onClick={() => { scrollToTop(); handleNavClick(); }}
                className={`block px-4 py-3 text-sm text-secondary hover:text-highlight w-full text-left font-semibold ${
                  isActive('/ready-to-work') ? 'border-l-4 border-primary' : ''
                }`}
              >
                READY TO WORK
              </Link>
              <Link 
                to="/request-consultant"
                onClick={() => { scrollToTop(); handleNavClick(); }}
                className={`block px-4 py-3 text-sm text-secondary hover:text-highlight w-full text-left font-semibold ${
                  isActive('/request-consultant') ? 'border-l-4 border-primary' : ''
                }`}
              >
                REQUEST A CONSULTANT
              </Link>
              <Link 
                to="/contact"
                onClick={handleNavClick}
                className="block px-4 py-3 text-sm bg-primary text-white hover:text-highlight w-full text-left rounded-lg font-semibold"
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-28">{children}</div>

      <footer className="bg-dark text-white" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <p className="mt-8 text-2xl text-gray-300 max-w-[250px]">
                When Disaster Strikes, We Deliver the People Who Make a Difference.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-center">
                <li>
                  <Link 
                    to="/about" 
                    onClick={() => { scrollToTop(); handleNavClick(); }} 
                    className="text-gray-300 hover:text-highlight transition-colors duration-300"
                  >
                    ABOUT EMC
                  </Link>
                </li>
                <li>
                  <Link to="/ready-to-work" onClick={handleNavClick} className="text-gray-300 hover:text-highlight transition-colors duration-300">
                    READY TO WORK
                  </Link>
                </li>
                <li>
                  <Link to="/request-consultant" onClick={handleNavClick} className="text-gray-300 hover:text-highlight transition-colors duration-300">
                    REQUEST A CONSULTANT
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => { scrollToTop(); handleNavClick(); }} className="text-gray-300 hover:text-highlight transition-colors duration-300">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Contact</h3>
              <ul className="space-y-3 flex flex-col items-center">
                <li className="flex items-center justify-center text-gray-300 w-full">
                  <Phone className="w-5 h-5 mr-3" />
                  <a 
                    href="tel:+16892839646" 
                    className="hover:text-highlight transition-colors duration-300"
                  >
                    (689) 283-9646
                  </a>
                </li>
                <li className="flex items-center justify-center text-gray-300 w-full">
                  <Mail className="w-5 h-5 mr-3" />
                  <a 
                    href="mailto:info@emc-staffing.com"
                    className="hover:text-highlight transition-colors duration-300"
                  >
                    info@emc-staffing.com
                  </a>
                </li>
                <li className="flex items-center justify-center text-gray-300 w-full">
                  <MapPin className="w-5 h-5 mr-3" />
                  <a 
                    href="https://maps.google.com/?q=3801+Avalon+Park+East+Blvd.+Suite+200+Orlando,+FL+32828"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center hover:text-highlight transition-colors duration-300"
                  >
                    3801 Avalon Park East Blvd.<br />
                    Suite 200<br />
                    Orlando, FL 32828
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#8a122d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="text-center text-white font-semibold text-sm">
              <p>
                © 2025 EMC Staffing | <Link to="/privacy" className="hover:text-highlight transition-colors">Privacy</Link> | <Link to="/terms" className="hover:text-highlight transition-colors">Terms</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;