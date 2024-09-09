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

  if (loading) {
    return <div>Loading...</div>;
  }
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
      {/* Conditional Redirect */}
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
      {/* You can also add other routes like /welcome explicitly if needed */}
    </Routes>
  );
};

const App = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      // Check if the access token is close to expiring and refresh it
      const expiresAt = localStorage.getItem("expires_at");
      const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

      if (expiresAt && currentTime > expiresAt - 300) {
        // Refresh 5 minutes before expiry
        refreshAuthToken();
      }
    }, 1000 * 60 * 5); // Check every 5 minutes

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const { user, loading } = useContext(UserContext);

  useEffect(() => {}, [user]);

  if (loading) {
    return <div className="text-light">Loading...</div>; // Show a loading indicator while fetching user data
  }

  return <AppRoutes />;
};

export default App;
