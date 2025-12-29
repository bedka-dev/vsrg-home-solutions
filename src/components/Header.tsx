import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener to change header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          <div className="flex items-center gap-2">
            <div className={`font-bold text-2xl transition-colors ${
              isScrolled ? 'text-primary' : 'text-primary-foreground'
            }`}>
              VSRG
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#home" 
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-primary-foreground hover:text-secondary'
              }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-primary-foreground hover:text-secondary'
              }`}
            >
              About Us
            </a>
            <a 
              href="#how-it-works" 
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-primary-foreground hover:text-secondary'
              }`}
            >
              How It Works
            </a>
            <a 
              href="#contact" 
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-primary-foreground hover:text-secondary'
              }`}
            >
              Contact Us
            </a>
          </nav>

          <div className="flex items-center gap-4">
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
              href="#home" 
              className={`block transition-colors font-medium ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-primary-foreground hover:text-secondary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`block transition-colors font-medium ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-primary-foreground hover:text-secondary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#how-it-works" 
              className={`block transition-colors font-medium ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-primary-foreground hover:text-secondary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
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
