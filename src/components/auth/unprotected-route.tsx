import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const UnProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  return localStorage.getItem("authorization") ? (
    <Navigate to="/dashboard/inicio" />
  ) : (
    <>{children}</>
  );
};

export default UnProtectedRoute;
