import { Phone, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGoToContact } from "@/hooks/use-go-to-contact";

interface HeaderProps {
  transparent?: boolean; // If true, header starts transparent and becomes solid on scroll
}

const Header = ({ transparent = false }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const goToContact = useGoToContact();

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

  // Close dropdown on Escape and return focus to the toggle button
  useEffect(() => {
    if (!solutionsOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSolutionsOpen(false);
        solutionsButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [solutionsOpen]);

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
            <Phone className="h-4 w-4" aria-hidden="true" />
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
          <nav aria-label="Main" className="hidden md:flex items-center justify-center gap-8">
            <Link
              to="/"
              className={`transition-colors font-medium pb-1 ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-primary-foreground hover:text-secondary'
              } ${isActive('/') ? 'border-b-2 border-secondary' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors font-medium pb-1 ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-primary-foreground hover:text-secondary'
              } ${isActive('/about') ? 'border-b-2 border-secondary' : ''}`}
            >
              About Us
            </Link>
            <div className="relative" ref={solutionsRef}>
              <button
                ref={solutionsButtonRef}
                type="button"
                aria-expanded={solutionsOpen}
                aria-controls="solutions-menu"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={`flex items-center gap-1 transition-colors font-medium pb-1 ${
                  isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-primary-foreground hover:text-secondary'
                } ${isSolutionsActive() ? 'border-b-2 border-secondary' : ''}`}
              >
                Solutions
                <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && (
                <div id="solutions-menu" className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg py-2 ${
                  isScrolled ? 'bg-background border border-border' : 'bg-background/95 backdrop-blur'
                }`}>
                  <Link
                    to="/challenges"
                    className={`block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors ${
                      isActive('/challenges') ? 'bg-muted font-semibold' : ''
                    }`}
                    onClick={() => setSolutionsOpen(false)}
                  >
                    Challenges
                  </Link>
                  <Link
                    to="/how-it-works"
                    className={`block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors ${
                      isActive('/how-it-works') ? 'bg-muted font-semibold' : ''
                    }`}
                    onClick={() => setSolutionsOpen(false)}
                  >
                    How It Works
                  </Link>
                  <Link
                    to="/locations"
                    className={`block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors ${
                      isActive('/locations') ? 'bg-muted font-semibold' : ''
                    }`}
                    onClick={() => setSolutionsOpen(false)}
                  >
                    Locations
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className={`transition-colors font-medium pb-1 ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-primary-foreground hover:text-secondary'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Button container - fixed width matching logo for centering */}
          <div className="flex items-center justify-end gap-4 w-48">
            <Button
              className="hidden md:inline-flex bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
              onClick={goToContact}
            >
              Get My Cash Offer
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden transition-colors ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav id="mobile-nav" aria-label="Mobile" className={`md:hidden py-4 border-t space-y-4 ${
            isScrolled ? 'border-border bg-background/95' : 'border-primary-foreground/20 bg-black/40'
          }`}>
            <Link
              to="/"
              className={`block transition-colors font-medium ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-primary-foreground hover:text-secondary'
              } ${isActive('/') ? 'border-l-4 border-secondary pl-2' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block transition-colors font-medium ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-primary-foreground hover:text-secondary'
              } ${isActive('/about') ? 'border-l-4 border-secondary pl-2' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <div>
              <button
                type="button"
                aria-expanded={mobileSolutionsOpen}
                aria-controls="mobile-solutions-menu"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className={`flex items-center gap-1 transition-colors font-medium w-full ${
                  isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-primary-foreground hover:text-secondary'
                } ${isSolutionsActive() ? 'border-l-4 border-secondary pl-2' : ''}`}
              >
                Solutions
                <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileSolutionsOpen && (
                <div id="mobile-solutions-menu" className="pl-4 mt-2 space-y-2">
                  <Link
                    to="/challenges"
                    className={`block transition-colors font-medium ${
                      isScrolled
                        ? 'text-foreground hover:text-primary'
                        : 'text-primary-foreground hover:text-secondary'
                    } ${isActive('/challenges') ? 'font-semibold' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Challenges
                  </Link>
                  <Link
                    to="/how-it-works"
                    className={`block transition-colors font-medium ${
                      isScrolled
                        ? 'text-foreground hover:text-primary'
                        : 'text-primary-foreground hover:text-secondary'
                    } ${isActive('/how-it-works') ? 'font-semibold' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How It Works
                  </Link>
                  <Link
                    to="/locations"
                    className={`block transition-colors font-medium ${
                      isScrolled
                        ? 'text-foreground hover:text-primary'
                        : 'text-primary-foreground hover:text-secondary'
                    } ${isActive('/locations') ? 'font-semibold' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Locations
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className={`block transition-colors font-medium ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-primary-foreground hover:text-secondary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button 
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
              onClick={() => {
                setMobileMenuOpen(false);
                goToContact();
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
