import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UserContext } from "./userContext";
import FlixMain from "./FlixMain/FlixMain";
import MoviePlayer from "./FlixMain/components/MoviePlayer/MoviePlayer";
import Discover from "./FlixMain/components/Discover/Discover";
import MyList from "./FlixMain/components/MyList/MyList";
import ProfileSettings from "./FlixMain/components/ProfileSettings/ProfileSettings";
import Welcome from "./FlixMain/components/Welcome/Welcome";
import Home from "./FlixMain/components/Home/Home";
import { refreshAuthToken } from "./FlixMain/utils/refreshAuthToken";

const ProtectedRoute = ({ element }) => {
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (user === null) {
        navigate("/", { replace: true });
      }
    }
  }, [user, loading, navigate]);

  return user ? element : null;
};

const AppRoutes = () => {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to="/dashboard" replace /> : <Welcome />}
      />{" "}
      <Route
        path="/dashboard"
        element={<ProtectedRoute element={<FlixMain />} />}
      >
        <Route index element={<Home />} />
        <Route path="discover" element={<Discover />} />
        <Route path="my-list" element={<MyList />} />
        <Route path="play/:movieId" element={<MoviePlayer />} />
        <Route path="profile-settings" element={<ProfileSettings />} />
      </Route>
    </Routes>
  );
};

const App = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const expiresAt = localStorage.getItem("expires_at");
      const currentTime = Math.floor(Date.now() / 1000);

      if (expiresAt && currentTime > expiresAt - 300) {
        refreshAuthToken();
      }
    }, 1000 * 60 * 5);

    return () => clearInterval(interval);
  }, []);

  const { user, loading } = useContext(UserContext);

  useEffect(() => {}, [user]);

  return <AppRoutes />;
};

export default App;
