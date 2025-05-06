
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, ROLES } from "./contexts/AuthContext";
import Index from "./pages/Index";
import Resources from "./pages/Resources";
import Support from "./pages/Support";
import Login from "./pages/Login";
import AccessDenied from "./pages/AccessDenied";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/admin/Dashboard";
import EmployeeDashboard from "./pages/employee/Dashboard";
import CustomerDashboard from "./pages/customer/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/access-denied" element={<AccessDenied />} />
            
            {/* Admin routes */}
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute 
                  element={<AdminDashboard />} 
                  allowedRoles={[ROLES.ADMIN]} 
                />
              } 
            />
            
            {/* Employee routes */}
            <Route 
              path="/employee/dashboard" 
              element={
                <ProtectedRoute 
                  element={<EmployeeDashboard />} 
                  allowedRoles={[ROLES.ADMIN, ROLES.EMPLOYEE]} 
                />
              } 
            />
            
            {/* Customer routes */}
            <Route 
              path="/customer/dashboard" 
              element={
                <ProtectedRoute 
                  element={<CustomerDashboard />} 
                  allowedRoles={[ROLES.ADMIN, ROLES.CUSTOMER]} 
                />
              } 
            />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
