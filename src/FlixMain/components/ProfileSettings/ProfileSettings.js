import React, { useState } from "react";
import { Image, Row, Col, Form } from "react-bootstrap";
import styles from "./ProfileSettings.module.css";
import CustomBTN from "../../global/components/CustomBTN/CustomBTN";
import { FaPencilAlt } from "react-icons/fa";
import { BiSolidFilm } from "react-icons/bi";
import { MdPlaylistAdd } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { BsHandIndexThumb } from "react-icons/bs";

const ProfileSettings = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const image = process.env.PUBLIC_URL + "/images/user-04.jpg";

  const userWatchHistory = [
    { action: "Watched", number: "120", icon: <BiSolidFilm /> },
    { action: "Saved", number: "40", icon: <MdPlaylistAdd /> },
    { action: "Liked", number: "119", icon: <FaHeart /> },
  ];

  const notifications = [
    {
      title: "Receive updates and announcement",
    },
    {
      title: "Get the latest news and updates",
    },
    {
      title: "Stay informed with community news",
    },
    {
      title: "Manage your notifications preferences",
    },
  ];

  return (
    <div className="text-light">
      {isEditMode ? (
        <div>i am edit form</div>
      ) : (
        <div>
          <h4 className="mt-5">Profile Settings</h4>
          <div className="d-flex mt-4 gap-4">
            <Image src={image} height={110} width={110} roundedCircle />
            <div className="d-flex flex-column mt-2">
              <h5>Username: stacystacy19</h5>
              <small className={styles.subscriptionPlan}>
                Subscription plan: Premium
              </small>
              <div className="d-flex gap-2 mt-2">
                <CustomBTN
                  text="Edit Profile"
                  textColor="text-light"
                  bgColor="redBTNbg"
                  icon={<FaPencilAlt className="fs-6" />}
                  padding="smBTNPadding"
                />
                <CustomBTN
                  text="Join"
                  textColor="text-dark"
                  variant="light"
                  padding="smBTNPadding"
                />
              </div>
            </div>
          </div>
          <div>
            <h5 className="fw-semibold mt-5">Activity Summary</h5>
            <Row className="mt-3">
              {userWatchHistory.map((action, index) => (
                <Col
                  key={index}
                  sm={12}
                  md={6}
                  lg={4}
                  className="mb-4 text-light"
                >
                  <div
                    className={`${styles.iconContainer} pt-2 pb-3 d-flex flex-column justify-content-center align-items-center`}
                  >
                    <div
                      className={`text-dark bg-light px-2 rounded-sm fs-3 mt-2`}
                    >
                      {action.icon}
                    </div>
                    <div className="d-flex mt-3 gap-1">
                      <small>{action.action}:</small>
                      <small>{action.number} Movies</small>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <h5 className="fw-semibold mt-4 mb-4">Notifications</h5>
          <Row>
            {notifications.map((notification, index) => (
              <div>
                <Col key={index} xs={12}>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">{notification.title}</p>
                    <Form.Check type="switch" className={styles.switch} />
                  </div>
                </Col>
                <hr></hr>
              </div>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default ProfileSettings;
