import React from 'react'
import { IoMdNotificationsOff } from "react-icons/io";
import { Image } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";

const NotificationsProfileBar = () => {

    const image = process.env.PUBLIC_URL + "/images/user-04.jpg";

  return (
    <div className="d-flex gap-3 align-items-center">
    <div className="d-flex align-items-center gap-2 text-light me-2">
      <IoMdNotificationsOff className="ms-2 fs-5"/>
      <span>Notifications</span>
    </div>
    <Image src={image} height={30} width={30} roundedCircle />
    <FaChevronDown className="text-light"/>
  </div>
  )
}

export default NotificationsProfileBar
