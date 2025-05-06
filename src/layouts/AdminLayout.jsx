
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "../contexts/AuthContext";
import { BarChart3, Users, Settings, Bell, Search, LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AdminLayout = ({ children }) => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  
  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: BarChart3, current: true },
    { name: "User Management", href: "/admin/users", icon: Users, current: false },
    { name: "Settings", href: "/admin/settings", icon: Settings, current: false },
  ];
  
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} hidden md:block bg-white border-r transition-all duration-300`}>
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between h-16 px-4 border-b">
            {sidebarOpen && <div className="text-xl font-bold text-primary highlight-gradient">CVK Admin</div>}
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? '<' : '>'}
            </Button>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  flex items-center px-2 py-2 text-sm font-medium rounded-md
                  ${item.current 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-gray-700 hover:bg-gray-100'}
                `}
              >
                <item.icon className={`${sidebarOpen ? 'mr-3' : ''} h-5 w-5`} />
                {sidebarOpen && <span>{item.name}</span>}
              </a>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b h-16 flex items-center justify-between px-4">
          <div className="flex items-center">
            <span className="md:hidden text-xl font-bold text-primary highlight-gradient mr-4">CVK Admin</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..."
                className="w-40 lg:w-64 h-9 rounded-full px-4 border focus:outline-none focus:ring-2 focus:ring-primary/20" 
              />
              <Search className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
            </div>
            
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
          </div>
        </header>
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
