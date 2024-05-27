import Nav from "./components/Nav/Nav";
import HomePageHero from "./components/HomePageHero/HomePageHero";

const FlixMain = () => {
  return (
    <div className="d-flex flex-column h-100">
      <Nav />
      <HomePageHero />
    </div>
  );
};

export default FlixMain;
