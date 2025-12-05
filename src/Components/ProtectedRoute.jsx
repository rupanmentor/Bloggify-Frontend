import React from "react";
import NotFound from "../Pages/NotFound";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  if (!token) {
    return <Navigate to="/login" />;
  }
  if (adminOnly && role !== "admin") {
    return <NotFound />;
  }

  return children;
};

export default ProtectedRoute;
