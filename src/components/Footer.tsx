import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Victory Springs Realty Group</h3>
            <p className="text-primary-foreground/80">
              Helping DFW homeowners sell their properties quickly and fairly since day one.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="tel:9722110909" 
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(972) 211-0909</span>
              </a>
              <a 
                href="mailto:info@victoryspringsrealty.com" 
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@victoryspringsrealty.com</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>1245 Blessed St, Suite #190<br />Dallas, TX 76227</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                Home
              </a>
              <a href="#about" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                About Us
              </a>
              <a href="#how-it-works" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                How It Works
              </a>
              <a href="#contact" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                Contact Us
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Victory Springs Realty Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
