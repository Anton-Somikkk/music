/* eslint-disable import/prefer-default-export */
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({ redirectPath = "/authorization", isAllowed }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
} 
