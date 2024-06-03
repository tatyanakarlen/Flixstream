import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import HomePageHero from "./components/HomePageHero/HomePageHero";
import DiscoverNewReleases from "./components/DiscoverNewReleases/DiscoverNewReleases";
import { Outlet, useOutlet, useLocation } from "react-router-dom";

const FlixMain = () => {
  const location = useLocation();
  const [searchMode, setSearchMode] = useState(false);
  const [searchInput, setSearchInput] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const sciFi = process.env.PUBLIC_URL + "/images/sci-fi.jpg";
  const people = process.env.PUBLIC_URL + "/images/people.jpg";

  const allMovies = [
    {
      image: sciFi,
      title: "Fantasy Realm",
      description: "Journey through magical lands and epic adventures.",
      likes: "5",
    },
    {
      image: people,
      title: "Mystery Chronicles",
      description: "Unraveling the most intriguing and puzzling cases.",
      likes: "20",
    },
    {
      image: sciFi,
      title: "Historical Insights",
      description: "Diving deep into significant events and eras of the past.",
      likes: "72",
    },
    {
      image: people,
      title: "Comedy Highlights",
      description: "Laugh out loud with the best comedies and sitcoms.",
      likes: "25",
    },
    {
      image: sciFi,
      title: "Horror Tales",
      description: "Prepare for spine-chilling scares.",
      likes: "12",
    },
    {
      image: people,
      title: "Dramatic Stories",
      description: "Embrace powerful emotions and compelling narratives.",
      likes: "19",
    },
    {
      image: sciFi,
      title: "Action Adventures",
      description: "Experience adrenaline-pumping thrills and epic battles.",
      likes: "8",
    },
    {
      image: people,
      title: "Fantasy Quests",
      description: "Embark on magical journeys and mythical adventures.",
      likes: "3",
    },
    {
      image: sciFi,
      title: "Fantasy Realm",
      description: "Journey through magical lands and epic adventures.",
      likes: "5",
    },
    {
      image: people,
      title: "Mystery Chronicles",
      description: "Unraveling the most intriguing and puzzling cases.",
      likes: "20",
    },
    {
      image: sciFi,
      title: "Historical Insights",
      description: "Diving deep into significant events and eras of the past.",
      likes: "72",
    },
    {
      image: people,
      title: "Comedy Highlights",
      description: "Laugh out loud with the best comedies and sitcoms.",
      likes: "25",
    },
    {
      image: sciFi,
      title: "Horror Tales",
      description: "Prepare for spine-chilling scares.",
      likes: "12",
    },
    {
      image: people,
      title: "Dramatic Stories",
      description: "Embrace powerful emotions and compelling narratives.",
      likes: "19",
    },
    {
      image: sciFi,
      title: "Action Adventures",
      description: "Experience adrenaline-pumping thrills and epic battles.",
      likes: "8",
    },
    {
      image: people,
      title: "Fantasy Quests",
      description: "Embark on magical journeys and mythical adventures.",
      likes: "3",
    },
  ];

  useEffect(() => {
    console.log(searchInput, 'searchInput from parent');
  }, [searchInput]); // Effect runs only when `count` changes


  return (
    <div className="d-flex flex-column h-100">
      <Nav searchMode={searchMode} setSearchMode={setSearchMode} filteredData={filteredData} setFilteredData={setFilteredData} allMovies={allMovies} searchInput={searchInput} setSearchInput={setSearchInput}/>
      {location.pathname === "/flixStream" ? (
        <div>
          <HomePageHero />
          <DiscoverNewReleases allMovies={allMovies}/>
        </div>
      ) : (
        <Outlet context={[searchMode, setSearchMode, allMovies, filteredData, searchInput]}/>
      )}
    </div>
  );
};

export default FlixMain;
