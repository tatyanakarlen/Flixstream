import Nav from "./components/Nav/Nav";
import HomePageHero from "./components/HomePageHero/HomePageHero";
import DiscoverNewReleases from "./components/DiscoverNewReleases/DiscoverNewReleases";

const FlixMain = () => {
  return (
    <div className="d-flex flex-column h-100">
      <Nav />
      <HomePageHero />
      <DiscoverNewReleases />
    </div>
  );
};

export default FlixMain;
