import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import { PublicRoutes } from "./utils/PublicRoutes";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { UserSessionInfoProp } from "../types/Account";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { useFetchUserSessionInfo } from "../hooks/Session/useFetchUserSessionInfo";
import Loading from "./components/Loader/Loading";
import { UserContext } from "../hooks/Session/useUserContext";
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [userSessionInfo, setUserSessionInfo] =
    useState<UserSessionInfoProp | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      try {
        setLoading(true);
        if (user != null) {
          const userFound = await useFetchUserSessionInfo({ userId: user.uid });
          setUserSessionInfo(userFound as UserSessionInfoProp);
        }
      } catch (e) {
        console.log(e);
        setUserSessionInfo(null);
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return <Loading LoadingName="Loading the application..." />;
  }

  return (
    <UserContext.Provider value={userSessionInfo}>
      <Router>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
