import React, { useContext } from "react";
import styles from "./SideNav.module.css";
import { BiSolidFilm } from "react-icons/bi";
import { FaThList } from "react-icons/fa";
import { RiCloudOffLine } from "react-icons/ri";
import { FaGear } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { TbMovie } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";
import { useLocation, Link } from "react-router-dom";
import CustomBTN from "../CustomBTN/CustomBTN";
import useMediaQueries from "../../../utils/UseMediaQuery";
import { Col, Image } from "react-bootstrap";
import { UserContext } from "../../../../userContext";
import { useNavigate } from "react-router-dom";

const SideNav = ({ setSearchInput, setFilteredData }) => {
  const logoMobile =
    process.env.PUBLIC_URL + "/images/logo/Icon-Only-Color.png";
  const { logout } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate()
  const { isLgDesktopOrLaptop } = useMediaQueries();

  const handleLinkClick = () => {
    setSearchInput("");
    setFilteredData([]);
  };

  const handleLogout = async () => {
    await logout(navigate);
  };

  const links = [
    {
      text: "Home",
      link: "/dashboard",
      icon: <GoHomeFill />,
    },
    {
      text: "Discover",
      link: "/dashboard/discover",
      icon: <BiSolidCameraMovie />,
    },
    {
      text: "My List",
      link: "/dashboard/my-list",
      icon: <FaThList />,
    },
    {
      text: "Profile",
      link: "/dashboard/profile-settings",
      icon: <FaGear />,
    },
  ];

  return (
    <Col className={styles.fixedSideNav} xs={isLgDesktopOrLaptop ? 2 : 1}>
      <div className={`h-100 ${styles.sideNavWrapper}`}>
        <div
          className={`${
            styles.sideNav
          } borderRadiusSmall h-100 d-flex flex-column text-light ${
            isLgDesktopOrLaptop ? "p-3" : "p-2"
          } justify-content-between`}
        >
          <div className="d-flex flex-column">
            {isLgDesktopOrLaptop ? (
              <div className="d-flex align-items-center gap-2">
                <Image src={logoMobile} height={32} />
                <h5 className={`${styles.flixStreamLogo} fw-semibold mb-0`}>
                  Flixstream
                </h5>
              </div>
            ) : (
              <Image src={logoMobile} width={44} className="ms-1"/>
            
            )}
            <div className="mt-4 d-flex flex-column gap-3">
              {links.map((link, index) => (
                <Link
                  onClick={handleLinkClick}
                  className="text-light text-decoration-none"
                  to={link.link}
                  key={index}
                >
                  <span
                    key={index}
                    className={`d-flex align-items-center ${
                      !isLgDesktopOrLaptop && "justify-content-center"
                    } gap-3 px-3 py-2 rounded ${styles.link} ${
                      location.pathname === link.link ? styles.activeLink : ""
                    }`}
                  >
                    <div
                      className={`${
                        isLgDesktopOrLaptop ? "fs-6" : "fs-5"
                      } mb-1`}
                    >
                      {link.icon}
                    </div>
                    {isLgDesktopOrLaptop && <span>{link.text}</span>}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex flex-column mt-3 text-light">
              <span
                className={`d-flex align-items-center ${
                  !isLgDesktopOrLaptop && "justify-content-center"
                } gap-3 px-3 py-2 rounded ${styles.link}`}
              >
                <span
                  className={`mb-1 ${isLgDesktopOrLaptop ? "fs-6" : "fs-5"}`}
                >
                  <RiCloudOffLine />
                </span>
                {isLgDesktopOrLaptop && (
                  <div className="fs-6 mb-1">Offline</div>
                )}
              </span>
              <span
                role="button"
                onClick={logout}
                className={`d-flex align-items-center ${
                  !isLgDesktopOrLaptop && "justify-content-center"
                } gap-3 px-3 py-2 rounded ${styles.link}`}
              >
                <span
                  className={`mb-1 ${isLgDesktopOrLaptop ? "fs-6" : "fs-5"}`}
                >
                  <MdLogout />
                </span>
                {isLgDesktopOrLaptop && (
                  <div className="fs-6 mb-1">Sign out</div>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SideNav;
