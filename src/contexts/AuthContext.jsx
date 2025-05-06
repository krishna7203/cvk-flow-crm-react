
import { createContext, useContext, useState } from "react";

// Create the auth context
const AuthContext = createContext(undefined);

// Roles enum
export const ROLES = {
  ADMIN: "admin",
  EMPLOYEE: "employee",
  CUSTOMER: "customer",
  GUEST: "guest",
};

// Auth provider component
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [role, setRole] = useState(ROLES.GUEST);

  // Demo login function - in a real app, this would authenticate with a backend
  const login = (email, password, selectedRole) => {
    // Simulate successful login
    setCurrentUser({
      id: "user-123",
      name: "Demo User",
      email: email,
    });
    setRole(selectedRole);
    return true;
  };

  // Demo logout function
  const logout = () => {
    setCurrentUser(null);
    setRole(ROLES.GUEST);
  };

  // Check if user has a specific role
  const hasRole = (requiredRole) => {
    return role === requiredRole;
  };

  const value = {
    currentUser,
    role,
    login,
    logout,
    hasRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook for using auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
