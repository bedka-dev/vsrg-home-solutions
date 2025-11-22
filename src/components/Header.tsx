import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar with phone */}
        <div className="flex items-center justify-between py-3 border-b border-border">
          <div className="text-sm text-muted-foreground">
            Victory Springs Realty Group
          </div>
          <a 
            href="tel:9722110909" 
            className="flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>(972) 211-0909</span>
          </a>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="font-bold text-2xl text-primary">VSRG</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
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
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border space-y-4">
            <a 
              href="#home" 
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#how-it-works" 
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#contact" 
              className="block text-foreground hover:text-primary transition-colors font-medium"
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
