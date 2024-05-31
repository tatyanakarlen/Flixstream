import Nav from "./components/Nav/Nav";
import { useState } from "react";
import HomePageHero from "./components/HomePageHero/HomePageHero";
import DiscoverNewReleases from "./components/DiscoverNewReleases/DiscoverNewReleases";
import { Outlet, useOutlet, useLocation } from "react-router-dom";

const FlixMain = () => {
  const location = useLocation();
  const [searchMode, setSearchMode] = useState(false);

  /// search mode, will return different nav with search bar and different component

  return (
    <div className="d-flex flex-column h-100">
      <Nav searchMode={searchMode} setSearchMode={setSearchMode} />
      {location.pathname === "/flixStream" ? (
        <div>
          <HomePageHero />
          <DiscoverNewReleases />
        </div>
      ) : (
        <Outlet context={[searchMode, setSearchMode]}/>
      )}
    </div>
  );
};

export default FlixMain;
