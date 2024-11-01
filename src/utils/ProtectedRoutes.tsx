import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
export function ProtectedRoutes() {
  return auth.currentUser ? <Outlet /> : <Navigate to="/" />;
}
