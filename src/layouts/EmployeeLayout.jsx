
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "../contexts/AuthContext";
import { Home, Users, Calendar, MessageSquare, Bell, LogOut, User, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const EmployeeLayout = ({ children }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  
  const navigation = [
    { name: "Dashboard", href: "/employee/dashboard", icon: Home, current: true },
    { name: "Customers", href: "/employee/customers", icon: Users, current: false },
    { name: "Calendar", href: "/employee/calendar", icon: Calendar, current: false },
    { name: "Messages", href: "/employee/messages", icon: MessageSquare, current: false },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top navigation */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/employee/dashboard" className="flex items-center">
                <span className="text-xl font-bold text-primary highlight-gradient">CVK Employee</span>
              </a>
            </div>
            
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center text-sm font-medium h-16 border-b-2
                    ${item.current 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-gray-600 hover:text-gray-900'}
                  `}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User size={20} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600 flex items-center gap-2">
                    <LogOut className="h-4 w-4" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu size={20} />
              </Button>
            </div>
          </div>
          
          {/* Mobile navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`
                      block px-3 py-2 rounded-md text-base font-medium
                      ${item.current
                        ? 'bg-gray-100 text-primary'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                    `}
                  >
                    <div className="flex items-center">
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Main content */}
      <main>{children}</main>
    </div>
  );
};

export default EmployeeLayout;
