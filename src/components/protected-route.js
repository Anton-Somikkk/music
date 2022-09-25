/* eslint-disable import/prefer-default-export */
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children, redirectPath = "/authorization", isAllowed }) {
  if (isAllowed !== "token=Name") {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
} 
