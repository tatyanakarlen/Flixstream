import React from "react";
import styles from "./SideNav.module.css";
import { BiSolidFilm } from "react-icons/bi";
import { FaThList } from "react-icons/fa";
import { RiCloudOffLine } from "react-icons/ri";
import { FaGear } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { useLocation, Link } from "react-router-dom";
import CustomBTN from "../CustomBTN/CustomBTN";
import useMediaQueries from "../../../utils/UseMediaQuery";
import { Col } from "react-bootstrap";

const SideNav = () => {
  const location = useLocation();
  const { isLgDesktopOrLaptop } = useMediaQueries();
  console.log(isLgDesktopOrLaptop, "desktop");
  const links = [
    {
      text: "Home",
      link: "/dashboard",
      icon: <GoHomeFill />,
    },
    {
      text: "Discover",
      link: "/dashboard/discover",
      icon: <BiSolidFilm />,
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

  //   <Col className={styles.fixedSideNav} xs={2}>
  //   <div className="h-100 p-3">
  //     <SideNav />
  //   </div>
  // </Col>
  return (
    <Col className={styles.fixedSideNav} xs={isLgDesktopOrLaptop ? 2 : 1}>
      <div className={`${styles.sideNavWrapper} h-100 p-3`}>
        <div
          className={`${styles.sideNav} borderRadiusSmall h-100 d-flex flex-column text-light ${isLgDesktopOrLaptop ? 'p-3' : 'p-2'} justify-content-between`}
        >
          <div className="d-flex flex-column">
            {isLgDesktopOrLaptop ? (
              <h4 className={`${styles.flixStreamLogo} fw-semibold`}>
                Flixstream
              </h4>
            ) : (
              <span
                className={`${styles.logoMobile} mt-2 mb-2 d-flex justify-content-center align-items-center p-2 rounded`}
              >
                <BiSolidCameraMovie className="fs-4" />
              </span>
            )}
            <div className="mt-3 d-flex flex-column gap-3">
              {links.map((link, index) => (
                <Link
                  className="text-light text-decoration-none"
                  to={link.link}
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
            {isLgDesktopOrLaptop && (
              <div
                className={`${styles.upgradePromo} borderRadiusSmall p-3 d-flex flex-column text-light`}
              >
                <p className="fs-6">
                  Upgrade to Premium for exclusive benefits!
                </p>
                <div className="mt-2 w-100">
                  <CustomBTN
                    text="Join"
                    textColor="text-light"
                    bgColor="redBTNbg"
                    icon={false}
                  />
                </div>
              </div>
            )}
            <div className="d-flex flex-column mt-3 text-light">
              <span
                className={`d-flex align-items-center ${!isLgDesktopOrLaptop && 'justify-content-center'} gap-3 px-3 py-2 rounded ${styles.link}`}
              >
                <span className={`mb-1 ${isLgDesktopOrLaptop ? 'fs-6' : 'fs-5'}`}>
                  <RiCloudOffLine />
                </span>
                {isLgDesktopOrLaptop && (
                  <div className="fs-6 mb-1">Offline</div>
                )}
              </span>
              <span
                className={`d-flex align-items-center ${!isLgDesktopOrLaptop && 'justify-content-center'} gap-3 px-3 py-2 rounded ${styles.link}`}
              >
                <span className={`mb-1 ${isLgDesktopOrLaptop ? 'fs-6' : 'fs-5'}`}>
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
