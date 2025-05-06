
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ element, allowedRoles }) => {
  const { currentUser, role } = useAuth();

  // Check if the user is logged in and has an allowed role
  if (!currentUser) {
    // If not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // Check if user has permission to access this route
  if (!allowedRoles.includes(role)) {
    // If not authorized, redirect to dashboard or access denied page
    return <Navigate to="/access-denied" replace />;
  }

  // If authorized, render the component
  return element;
};

export default ProtectedRoute;
