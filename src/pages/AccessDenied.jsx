
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";

const AccessDenied = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto bg-red-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-6">
          <Shield className="h-8 w-8 text-red-500" />
        </div>
        <h1 className="text-3xl font-bold mb-3">Access Denied</h1>
        <p className="text-gray-600 mb-8">
          You don't have permission to access this page. Please contact your administrator if you believe this is a mistake.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => navigate("/")} variant="outline" className="rounded-full">
            Return Home
          </Button>
          <Button onClick={() => navigate(-1)} className="rounded-full btn-gradient">
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
