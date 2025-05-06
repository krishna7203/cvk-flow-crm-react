
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAuth, ROLES } from "../contexts/AuthContext";
import { useToast } from "@/components/ui/toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState(ROLES.CUSTOMER);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!email.trim() || !password.trim()) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }
    
    // Call login function from auth context
    const success = login(email, password, selectedRole);
    
    if (success) {
      toast({
        title: "Login successful",
        description: "You are now logged in as " + selectedRole,
      });
      
      // Redirect based on role
      switch (selectedRole) {
        case ROLES.ADMIN:
          navigate("/admin/dashboard");
          break;
        case ROLES.EMPLOYEE:
          navigate("/employee/dashboard");
          break;
        case ROLES.CUSTOMER:
          navigate("/customer/dashboard");
          break;
        default:
          navigate("/");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 to-purple-50 py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            {/* For demo purposes, allow selecting a role */}
            <div className="space-y-2">
              <Label>Select role for demo</Label>
              <RadioGroup 
                defaultValue={ROLES.CUSTOMER} 
                value={selectedRole}
                onValueChange={setSelectedRole}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={ROLES.ADMIN} id="admin" />
                  <Label htmlFor="admin">Admin</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={ROLES.EMPLOYEE} id="employee" />
                  <Label htmlFor="employee">Employee</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={ROLES.CUSTOMER} id="customer" />
                  <Label htmlFor="customer">Customer</Label>
                </div>
              </RadioGroup>
            </div>
            
            <Button type="submit" className="w-full btn-gradient rounded-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
