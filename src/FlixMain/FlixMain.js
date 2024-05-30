import Nav from "./components/Nav/Nav";
import HomePageHero from "./components/HomePageHero/HomePageHero";
import DiscoverNewReleases from "./components/DiscoverNewReleases/DiscoverNewReleases";
import { Outlet, useOutlet, useLocation } from "react-router-dom";

const FlixMain = () => {
  const location = useLocation();
  console.log(location, "location");

  return (
    <>
      {location.pathname === "/flixStream" ? (
        <div className="d-flex flex-column h-100">
          <Nav />
          <HomePageHero />
          <DiscoverNewReleases />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default FlixMain;
