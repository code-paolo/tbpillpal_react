import { Navigate } from "react-router-dom";
import Login from "../pages/Auth/Login";
import { auth } from "../../firebase";
export function PublicRoutes() {
  return auth.currentUser ? <Navigate to="/dashboard" /> : <Login />;
}
