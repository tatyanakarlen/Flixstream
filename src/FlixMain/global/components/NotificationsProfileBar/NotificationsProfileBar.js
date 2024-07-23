import React from "react";
import { IoMdNotificationsOff } from "react-icons/io";
import { Image } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import useMediaQueries from "../../../utils/UseMediaQuery";

const NotificationsProfileBar = () => {
  const image = process.env.PUBLIC_URL + "/images/user-04.jpg";

  const { isTablet, isMobile, isXsMobile, isDesktopOrLaptop } =
    useMediaQueries();

  return (
    <div className={`d-flex ${!isDesktopOrLaptop ? "gap-1" : "gap-2"} align-items-center`}>
      <div className="d-flex align-items-center gap-2 text-light me-2">
        <IoMdNotificationsOff className="ms-2 fs-5" />
        {isDesktopOrLaptop && <span>Notifications</span>}
      </div>
      <Image src={image} height={30} width={30} roundedCircle />
    </div>
  );
};

export default NotificationsProfileBar;
