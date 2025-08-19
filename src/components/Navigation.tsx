import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold bg-gradient-luxury bg-clip-text text-transparent">
              RAM Kishan's Perfume
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link to="/collections" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
                Collection
              </Link>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={(e) => {
                  if (window.location.pathname !== '/') {
                    e.preventDefault();
                    window.location.href = '/#about';
                  }
                }}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={(e) => {
                  if (window.location.pathname !== '/') {
                    e.preventDefault();
                    window.location.href = '/#contact';
                  }
                }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              className="bg-gradient-luxury text-primary-foreground hover:shadow-glow transition-all duration-300"
              onClick={() => {
                if (window.location.pathname !== '/') {
                  window.location.href = '/#contact';
                } else {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} size="sm">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2 border border-border">
              <Link to="/" className="block px-3 py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/collections" className="block px-3 py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Collection
              </Link>
              <a 
                href="#about" 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  if (window.location.pathname !== '/') {
                    e.preventDefault();
                    window.location.href = '/#about';
                  }
                }}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  if (window.location.pathname !== '/') {
                    e.preventDefault();
                    window.location.href = '/#contact';
                  }
                }}
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <Button 
                  variant="default" 
                  className="w-full bg-gradient-luxury text-primary-foreground"
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (window.location.pathname !== '/') {
                      window.location.href = '/#contact';
                    } else {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;