import { Phone, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  transparent?: boolean; // If true, header starts transparent and becomes solid on scroll
}

const Header = ({ transparent = false }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isSolutionsActive = () => ['/challenges', '/how-it-works', '/locations'].includes(location.pathname);

  // Add scroll listener to change header background (only if transparent mode)
  useEffect(() => {
    if (!transparent) {
      setIsScrolled(true); // Always show solid background
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparent]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top bar with phone */}
        <div className={`flex items-center justify-between py-3 border-b transition-colors ${
          isScrolled ? 'border-border' : 'border-transparent'
        }`}>
          <div className={`text-sm font-semibold transition-colors ${
            isScrolled ? 'text-muted-foreground' : 'text-primary-foreground'
          }`}>
            Victory Springs Realty Group
          </div>
          <a 
            href="tel:9722110909" 
            className={`flex items-center gap-2 font-semibold transition-colors ${
              isScrolled 
                ? 'text-primary hover:text-secondary' 
                : 'text-primary-foreground hover:text-secondary'
            }`}
          >
            <Phone className="h-4 w-4" />
            <span>(972) 211-0909</span>
          </a>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo - fixed width for centering */}
          <div className="flex items-center gap-2 w-48">
            <div className={`font-bold text-2xl transition-colors ${
              isScrolled ? 'text-primary' : 'text-primary-foreground'
            }`}>
              VSRG
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            <a
              href="/"
              className={`transition-colors font-medium pb-1 ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-primary-foreground hover:text-secondary'
              } ${isActive('/') ? 'border-b-2 border-secondary' : ''}`}
            >
              Home
            </a>
            <a
              href="/about"
              className={`transition-colors font-medium pb-1 ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-primary-foreground hover:text-secondary'
              } ${isActive('/about') ? 'border-b-2 border-secondary' : ''}`}
            >
              About Us
            </a>
            <div className="relative" ref={solutionsRef}>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={`flex items-center gap-1 transition-colors font-medium pb-1 ${
                  isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-primary-foreground hover:text-secondary'
                } ${isSolutionsActive() ? 'border-b-2 border-secondary' : ''}`}
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg py-2 ${
                  isScrolled ? 'bg-background border border-border' : 'bg-background/95 backdrop-blur'
                }`}>
                  <a
                    href="/challenges"
                    className={`block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors ${
                      isActive('/challenges') ? 'bg-muted font-semibold' : ''
                    }`}
                    onClick={() => setSolutionsOpen(false)}
                  >
                    Challenges
                  </a>
                  <a
                    href="/how-it-works"
                    className={`block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors ${
                      isActive('/how-it-works') ? 'bg-muted font-semibold' : ''
                    }`}
                    onClick={() => setSolutionsOpen(false)}
                  >
                    How It Works
                  </a>
                  <a
                    href="/locations"
                    className={`block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors ${
                      isActive('/locations') ? 'bg-muted font-semibold' : ''
                    }`}
                    onClick={() => setSolutionsOpen(false)}
                  >
                    Locations
                  </a>
                </div>
              )}
            </div>
            <a
              href="#contact"
              className={`transition-colors font-medium pb-1 ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-primary-foreground hover:text-secondary'
              }`}
            >
              Contact Us
            </a>
          </nav>

          {/* Button container - fixed width matching logo for centering */}
          <div className="flex items-center justify-end gap-4 w-48">
            <Button
              className="hidden md:inline-flex bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get My Cash Offer
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden transition-colors ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className={`md:hidden py-4 border-t space-y-4 ${
            isScrolled ? 'border-border bg-background/95' : 'border-primary-foreground/20 bg-black/40'
          }`}>
            <a
              href="/"
              className={`block transition-colors font-medium ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-primary-foreground hover:text-secondary'
              } ${isActive('/') ? 'border-l-4 border-secondary pl-2' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className={`block transition-colors font-medium ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-primary-foreground hover:text-secondary'
              } ${isActive('/about') ? 'border-l-4 border-secondary pl-2' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <div>
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className={`flex items-center gap-1 transition-colors font-medium w-full ${
                  isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-primary-foreground hover:text-secondary'
                } ${isSolutionsActive() ? 'border-l-4 border-secondary pl-2' : ''}`}
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileSolutionsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <a
                    href="/challenges"
                    className={`block transition-colors font-medium ${
                      isScrolled
                        ? 'text-foreground hover:text-primary'
                        : 'text-primary-foreground hover:text-secondary'
                    } ${isActive('/challenges') ? 'font-semibold' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Challenges
                  </a>
                  <a
                    href="/how-it-works"
                    className={`block transition-colors font-medium ${
                      isScrolled
                        ? 'text-foreground hover:text-primary'
                        : 'text-primary-foreground hover:text-secondary'
                    } ${isActive('/how-it-works') ? 'font-semibold' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How It Works
                  </a>
                  <a
                    href="/locations"
                    className={`block transition-colors font-medium ${
                      isScrolled
                        ? 'text-foreground hover:text-primary'
                        : 'text-primary-foreground hover:text-secondary'
                    } ${isActive('/locations') ? 'font-semibold' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Locations
                  </a>
                </div>
              )}
            </div>
            <a
              href="#contact"
              className={`block transition-colors font-medium ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-primary-foreground hover:text-secondary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </a>
            <Button 
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get My Cash Offer
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
