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
import Search from "./FlixMain/Search/Search";
import Home from "./Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/flixStream" element={<FlixMain />}>
          <Route path="search" element={<Search />} />
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
