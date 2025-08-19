import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-luxury-deep-black text-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h4 className="text-2xl font-serif font-bold bg-gradient-luxury bg-clip-text text-transparent mb-4">
            Ram Kishan Perfume's
            </h4>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Your trusted partner for premium fragrances in India. We provide personalized 
              consultation and authentic quality perfumes for every occasion.
            </p>
            <div className="flex space-x-4">
              <Button 
                size="sm" 
                variant="outline" 
                className="border-border hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-border hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-border hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h5 className="text-lg font-semibold text-foreground mb-6">Customer Care</h5>
            <ul className="space-y-4">
              <li>
                <Link to="/customer-care" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <Separator className="border-border" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 Ram Kishan Perfume's. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;