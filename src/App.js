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
import Home from "./Home/Home";
import Browse from "./FlixMain/components/Browse/Browse";
import Discover from "./FlixMain/components/Discover/Discover";
import MyList from "./FlixMain/components/MyList/MyList";
import ProfileSettings from "./FlixMain/components/ProfileSettings/ProfileSettings";
import Welcome from "./FlixMain/components/Welcome/Welcome";

{
  /* <Route
          path="/recipes/:recipeId"
          element={
            <Recipe
              filteredRecipes={filteredRecipes}
              loading={loading}
              setLoading={setLoading}
              likedRecipes={likedRecipes}
              setLikedRecipes={setLikedRecipes}
              isRecipeLiked={isRecipeLiked}
              setIsRecipeLiked={setIsRecipeLiked}
            />
          }
        /> */
}

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<FlixMain />}>
          <Route path="/dashboard" element={<Browse />} />
          <Route path="/dashboard/discover" element={<Discover />} />
          <Route path="/dashboard/my-list" element={<MyList />} />
          <Route path="/dashboard/play/:movieId" element={<MoviePlayer />} />
          <Route path="/dashboard/profile-settings" element={<ProfileSettings />} />
        </Route>
        <Route path="/swiftBooks" element={<BooksMain />} />
        <Route path="/" element={<Home />} />
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
