/* eslint-disable import/named */
/* eslint-disable import/prefer-default-export */
import { Routes, Route } from "react-router-dom";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Authorization } from "./pages/authorization";
import { ProtectedRoute } from "./components/protected-route";


export function AppRoutes({user}) {
  return (
    <Routes>
      {/* <Route path="/" element={<Wrapper />} /> */}
      <Route path="/authorization" element={<Authorization />} />
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <Wrapper />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}