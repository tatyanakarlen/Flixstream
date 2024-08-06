import logo from "./logo.svg";
import "./App.css";
import React, { useContext, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Link,
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom"; 
import { UserContext } from "./userContext";
import { supabase } from "./supabaseClient";
import FlixMain from "./FlixMain/FlixMain";
import MoviePlayer from "./FlixMain/components/MoviePlayer/MoviePlayer";
import Discover from "./FlixMain/components/Discover/Discover";
import MyList from "./FlixMain/components/MyList/MyList";
import ProfileSettings from "./FlixMain/components/ProfileSettings/ProfileSettings";
import Welcome from "./FlixMain/components/Welcome/Welcome";
import Home from "./FlixMain/components/Home/Home";


const AppRoutes = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);
      if (user) {
        navigate('/dashboard');
      } else {
        navigate('/welcome');
      }
      setIsLoading(false);
    };
    checkAuth();
  }, [user, navigate]);

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading indicator while checking auth
  }

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/dashboard" element={<FlixMain />}>
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
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;

