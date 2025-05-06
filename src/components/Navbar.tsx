
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary highlight-gradient">CVK</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Resources</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Support</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="rounded-full px-6">Sign In</Button>
          <Button className="rounded-full px-6 btn-gradient">Try Free</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#features" className="text-sm font-medium py-2 hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium py-2 hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="text-sm font-medium py-2 hover:text-primary transition-colors">Resources</a>
            <a href="#" className="text-sm font-medium py-2 hover:text-primary transition-colors">Support</a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="rounded-full px-6 w-full">Sign In</Button>
              <Button className="rounded-full px-6 w-full btn-gradient">Try Free</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
