/* eslint-disable import/named */
/* eslint-disable import/prefer-default-export */
import { Routes, Route } from "react-router-dom";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Authorization } from "./pages/authorization";
import { ProtectedRoute } from "./components/protected-route";
import { Registration } from "./pages/registration";
import { Collections } from "./pages/collections";
import { MyTracks } from "./pages/my-tracks";
import { NotFound } from "./pages/not-found";

export function AppRoutes() {

  return (
    <Routes>
      
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/registration" element={<Registration />} />

      <Route element={<ProtectedRoute isAllowed={document.cookie}/>}>
        <Route path="/" element={<Wrapper />} />
        <Route path="/collection/:id" element={<Collections />} />
        <Route path="/my-tracks" element={<MyTracks />} />
      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}