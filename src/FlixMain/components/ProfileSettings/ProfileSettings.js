import React, { useState } from "react";
import { Image, Row, Col, Form, Modal, Button } from "react-bootstrap";
import styles from "./ProfileSettings.module.css";
import CustomBTN from "../../global/components/CustomBTN/CustomBTN";
import { BiSolidFilm } from "react-icons/bi";
import { MdPlaylistAdd, MdOutlineEmail } from "react-icons/md";
import { BsHandIndexThumb } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { FaUser, FaSave, FaMapPin, FaHeart, FaPencilAlt } from "react-icons/fa";
import { FaHouse, FaMapLocationDot } from "react-icons/fa6";
import EditForm from "./EditForm/EditForm";
import NotificationsProfileBar from "../../global/components/NotificationsProfileBar/NotificationsProfileBar";

const ProfileSettings = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleClose = () => setShowEditForm(false);
  const handleShow = () => setShowEditForm(true);

  const image = process.env.PUBLIC_URL + "/images/user-04.jpg";

  const userInfo = {
    name: "Stacy Anderson",
    userName: "stacyStacy84",
    email: "stacy@email.com",
    streetAddress: "123 Anywhere Street",
    zipcode: "M8X0C1",
    city: "Toronto",
  };

  const iconMapping = {
    name: <AiFillEdit />,
    userName: <FaUser />,
    email: <MdOutlineEmail />,
    streetAddress: <FaHouse />,
    zipcode: <FaMapPin />,
    city: <FaMapLocationDot />,
  };

  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    // Add more properties as needed
  });

  const labelMapping = {
    name: "Name",
    userName: "User Name",
    email: "Email",
    streetAddress: "Street Adress",
    zipcode: "Zipcode",
    city: "City",
  };

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
      <EditForm show={showEditForm} handleClose={handleClose} />
      <div className="mt-2 d-flex w-100 align-items-center justify-content-between">
        <h4>Profile Settings</h4>
        <NotificationsProfileBar />
      </div>
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
              icon={
                isEditMode ? (
                  <FaSave className="fs-6" />
                ) : (
                  <FaPencilAlt className="fs-6" />
                )
              }
              padding="smBTNPadding"
              onClick={handleShow}
            />
            <CustomBTN
              text="Manage plan"
              textColor="text-dark"
              variant="light"
              padding="smBTNPadding"
            />
          </div>
        </div>
      </div>
      {isEditMode ? (
        <div className="mt-5">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your username"
                  // defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue="Otto"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="8" controlId="validationCustom03">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="example@email.com"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="8" controlId="validationCustom03">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your street address"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>ZIP Code</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your zip code"
                  // defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your city"
                  defaultValue="Otto"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Form>
          <div className="d-flex align-items-start">
            <CustomBTN
              text={isEditMode ? "Save Changes" : "Edit Profile"}
              textColor="text-light"
              bgColor="redBTNbg"
              icon={
                isEditMode ? (
                  <FaSave className="fs-6" />
                ) : (
                  <FaPencilAlt className="fs-6" />
                )
              }
              padding="smBTNPadding"
              onClick={() => setIsEditMode(!isEditMode)}
            />
          </div>
        </div>
      ) : (
        <>
          <div>
            <h5 className="fw-semibold mt-5">Activity Summary</h5>
            <Row className="mt-4">
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
          <h5 className="fw-semibold mt-4 mb-4">Personal Details</h5>
          <Row>
            {Object.keys(userInfo).map((key, index) => (
              <Col key={index} xs={12} sm={6} className="mb-3">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center gap-2">
                    <span className={`${styles.icon} mb-1`}>
                      {iconMapping[key]}{" "}
                    </span>
                    <small>{labelMapping[key] || key}</small>
                  </div>
                  <span className="">{userInfo[key]}</span>
                </div>
              </Col>
            ))}
            {/* {userInfo.map((user, index) => (
              <React.Fragment key={index}>
                {Object.entries(user).map(([key, value]) => {
                  if (key === "icon") return null;
                  return (
                    <Col key={key} xs={12} sm={6} className="mb-3">
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center gap-2">
                          <span className={`${styles.icon} mb-1`}>
                            {user.icon}{" "}
                          </span>
                          <small>{labelMapping[key] || key}</small>
                        </div>
                        <span className="">{value}</span>
                      </div>
                    </Col>
                  );
                })}
              </React.Fragment>
            ))} */}
          </Row>
        </>
      )}
    </div>
  );
};

export default ProfileSettings;
