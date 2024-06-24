import React from "react";
import styles from "./SideNav.module.css";
import { BiSolidFilm } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
import { RiCloudOffLine } from "react-icons/ri";
import { FaGear } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";
import CustomBTN from "../CustomBTN/CustomBTN";

const SideNav = () => {
  const location = useLocation();
  const links = [
    {
      text: "Browse",
      link: "/flixStream",
      icon: <BiSolidFilm />,
    },
    {
      text: "Discover",
      link: "/flixStream/discover",
      icon: <FaSearch />,
    },
    {
      text: "My List",
      link: "/flixStream/my-list",
      icon: <FaThList />,
    },
    {
      text: "Offline",
      link: "/",
      icon: <RiCloudOffLine />,
    },
  ];
  return (
    <div
      className={`${styles.sideNav} borderRadiusSmall h-100 d-flex flex-column text-light p-3 justify-content-between`}
    >
      <div className="d-flex flex-column">
        <h4 className={`${styles.flixStreamLogo} fw-semibold`}>Flixstream</h4>
        <div className="mt-3 d-flex flex-column gap-3">
          {links.map((link, index) => (
            <Link className="text-light text-decoration-none" to={link.link}>
            <span
              key={index}
              className={`d-flex align-items-center gap-3 px-3 py-2 rounded ${
                styles.link
              } ${location.pathname === link.link ? styles.activeLink : ""}`}
            >
              <div className="fs-6 mb-1">{link.icon}</div>
              <span>{link.text}</span>
            </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="d-flex flex-column">
        <div
          className={`${styles.upgradePromo} borderRadiusSmall p-3 d-flex flex-column text-light`}
        >
          <p className="fs-6">Upgrade to Premium for exclusive benefits!</p>
          <div className="mt-2 w-100">
            <CustomBTN
              text="Join"
              textColor="text-light"
              bgColor="redBTNbg"
              icon={false}
            />
          </div>
        </div>
        <div className="d-flex flex-column mt-3">
          <span
            className={`d-flex align-items-center gap-3 px-3 py-2 rounded ${styles.link}`}
          >
            <span className="fs-6 mb-1">
              <FaGear />
            </span>
            <div className="fs-6 mb-1">Profile</div>
          </span>
          <span
            className={`d-flex align-items-center gap-3 px-3 py-2 rounded ${styles.link}`}
          >
            <span className="fs-6 mb-1">
              <MdLogout />
            </span>
            <div className="fs-6 mb-1">Sign out</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
