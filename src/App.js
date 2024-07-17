import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import FlixMain from "./FlixMain/FlixMain";
import BooksMain from "./BooksMain/BooksMain";
import MoviePlayer from "./FlixMain/components/MoviePlayer/MoviePlayer";
import AppHome from "./AppHome/AppHome";
import Browse from "./FlixMain/components/Home/Home";
import Discover from "./FlixMain/components/Discover/Discover";
import MyList from "./FlixMain/components/MyList/MyList";
import ProfileSettings from "./FlixMain/components/ProfileSettings/ProfileSettings";
import Welcome from "./FlixMain/components/Welcome/Welcome";
import Home from "./FlixMain/components/Home/Home"



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<FlixMain />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/dashboard/discover" element={<Discover />} />
          <Route path="/dashboard/my-list" element={<MyList />} />
          <Route path="/dashboard/play/:movieId" element={<MoviePlayer />} />
          <Route path="/dashboard/profile-settings" element={<ProfileSettings />} />
        </Route>
        <Route path="/swiftBooks" element={<BooksMain />} />
        <Route path="/" element={<AppHome />} />
      </Routes>
    </Router>
  );
}

export default App;

{
  /* <Route path="user" element={<User />}>
<Route path="profile" element={<Profile />} />
<Route path="account" element={<Account />} />
</Route> */
}
