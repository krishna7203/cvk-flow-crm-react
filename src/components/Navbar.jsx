
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, role, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Determine dashboard link based on user role
  const getDashboardLink = () => {
    switch (role) {
      case "admin":
        return "/admin/dashboard";
      case "employee":
        return "/employee/dashboard";
      case "customer":
        return "/customer/dashboard";
      default:
        return "/login";
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary highlight-gradient">CVK</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
          <Link to="/resources" className="text-sm font-medium hover:text-primary transition-colors">Resources</Link>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Support</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {currentUser ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full flex items-center gap-2">
                  <User size={16} />
                  <span>My Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Logged in as {role}</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => navigate(getDashboardLink())}>
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="outline" className="rounded-full px-6" onClick={() => navigate("/login")}>Sign In</Button>
              <Button className="rounded-full px-6 btn-gradient" onClick={() => navigate("/login")}>Try Free</Button>
            </>
          )}
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
            <Link to="/resources" className="text-sm font-medium py-2 hover:text-primary transition-colors">Resources</Link>
            <a href="#" className="text-sm font-medium py-2 hover:text-primary transition-colors">Support</a>
            
            {currentUser ? (
              <>
                <div className="py-2 text-sm">Logged in as {role}</div>
                <Button className="w-full" onClick={() => navigate(getDashboardLink())}>
                  Go to Dashboard
                </Button>
                <Button variant="outline" className="w-full" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="rounded-full px-6 w-full" onClick={() => navigate("/login")}>Sign In</Button>
                <Button className="rounded-full px-6 w-full btn-gradient" onClick={() => navigate("/login")}>Try Free</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
