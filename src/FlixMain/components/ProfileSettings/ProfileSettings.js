import { supabase } from "../../../supabaseClient";
import React, { useState, useContext, useEffect } from "react";
import { Image, Row, Col, Form, Modal, Button } from "react-bootstrap";
import styles from "./ProfileSettings.module.css";
import CustomBTN from "../../global/components/CustomBTN/CustomBTN";
import { BiSolidFilm } from "react-icons/bi";
import { MdPlaylistAdd, MdOutlineEmail } from "react-icons/md";
import { BsHandIndexThumb } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import {
  FaUser,
  FaSave,
  FaMapPin,
  FaHeart,
  FaPencilAlt,
  FaGlobe,
} from "react-icons/fa";
import { FaHouse, FaMapLocationDot, FaClipboardUser } from "react-icons/fa6";
import NotificationsProfileBar from "../../global/components/NotificationsProfileBar/NotificationsProfileBar";
import { UserContext } from "../../../userContext";

const ProfileSettings = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const { user } = useContext(UserContext);
  const [userId, setUserId] = useState(user.identities[0].user_id);
  console.log(userId, "user id");

  const handleClose = () => setShowEditForm(false);
  const handleShow = () => setShowEditForm(true);

  const image = process.env.PUBLIC_URL + "/images/user-04.jpg";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: user.email,
    streetAddress: "",
    apt: "",
    zipcode: "",
    city: "",
    country: "",
    province: "",
    userId: userId,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        console.log("Fetching data for userId:", userId);
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("user_id", userId);

        console.log("API Response data:", data);

        if (error) {
          console.error("Error fetching profile:", error);
          return;
        }

        if (data && data.length > 0) {
          const userData = data[0];
          setIsEditMode(true); // User data exists, so it's Edit Mode
          setFormData({
            firstName: userData.first_name || "",
            lastName: userData.last_name || "",
            userName: userData.user_name || "",
            email: userData.email || "",
            streetAddress: userData.street_address || "",
            zipcode: userData.zipcode || "",
            city: userData.city || "",
            country: userData.country || "",
            province: userData.province || "",
          });
        } else {
          console.log("No matching data found.");
          setIsEditMode(false); // No user data, so it's Add Mode
          setFormData({
            firstName: "",
            lastName: "",
            userName: "",
            email: user.email,
            streetAddress: "",
            zipcode: "",
            city: "",
            country: "",
            province: "",
          });
        }
      }
    };

    fetchUserData();
  }, [userId]);

  console.log(isEditMode, "is edit mode");

  console.log(formData, "form data");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("users").upsert({
      user_id: userId,
      first_name: formData.firstName,
      last_name: formData.lastName,
      user_name: formData.userName,
      email: user.email,
      street_address: formData.streetAddress,
      zipcode: formData.zipcode,
      city: formData.city,
      country: formData.country,
      province: formData.province,
    });

    if (error) {
      console.error("Error updating user data:", error);
    } else {
      console.log("User data updated successfully!");
    }
  };

  console.log(formData, "formData");

  const iconMapping = {
    firstName: <AiFillEdit />,
    lastName: <FaClipboardUser />,
    userName: <FaUser />,
    email: <MdOutlineEmail />,
    streetAddress: <FaHouse />,
    apt: <FaHouse />,
    zipcode: <FaMapPin />,
    city: <FaMapLocationDot />,
    province: <FaMapLocationDot />,
    country: <FaGlobe />,
  };

  const labelMapping = {
    firstName: "First Name",
    lastName: "Last Name",
    userName: "Username",
    email: "Email",
    streetAddress: "Street Address",
    apt: "Apt/Suite",
    zipcode: "Zipcode",
    city: "City",
    province: "Province",
    country: "Country",
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
    <div className="text-light pe-3">
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
              // type={isEditMode ? "submit" : "button"}
              onClick={(e) => {
                if (isEditMode) {
                  handleSubmit(e);
                  setIsEditMode(false) 
                } else {
                  setIsEditMode(true); 
                }
              }}
              text={isEditMode ? "Save changes" : "Edit profile"}
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
            />
            <CustomBTN
              text={isEditMode ? "Cancel" : "Manage plan"}
              textColor="text-dark"
              variant="light"
              padding="smBTNPadding"
              onClick={() => setIsEditMode(false)}
            />
          </div>
        </div>
      </div>
      {isEditMode ? (
        <div className="mt-5">
          <Form className={styles.form} onSubmit={handleSubmit}>
            <Row className={`${styles.row} mb-3`}>
              <Form.Group
                className={styles.formGroupCol}
                as={Col}
                md="4"
                controlId="validationCustom01"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  // defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className={styles.formGroupCol}
                as={Col}
                md="4"
                controlId="validationCustom02"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group
                className={styles.formGroupCol}
                as={Col}
                md="4"
                controlId="validationCustom01"
              >
                <Form.Label>Username</Form.Label>
                <Form.Control
                  value={formData.userName}
                  onChange={handleInputChange}
                  name="userName"
                  type="text"
                  placeholder="example@email.com"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a username.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className={styles.formGroupCol}
                as={Col}
                md="4"
                controlId="validationCustom02"
              >
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="example@email.com"
                  name="email"
                  required
                  onChange={handleInputChange}
                  value={formData.email}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email address.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group
                className={styles.formGroupCol}
                as={Col}
                md="8"
                controlId="validationCustom03"
              >
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="123 Anywhere Street"
                  name="streetAddress"
                  required
                  onChange={handleInputChange}
                  value={formData.streetAddress}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email address.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                className={styles.formGroupCol}
                as={Col}
                md="4"
                controlId="validationCustom01"
              >
                <Form.Label>Country</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="country"
                  placeholder="Select country"
                  onChange={handleInputChange}
                  value={formData.country}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className={styles.formGroupCol}
                as={Col}
                md="4"
                controlId="validationCustom02"
              >
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="city"
                  placeholder="Select city"
                  onChange={handleInputChange}
                  value={formData.city}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                className={styles.formGroupCol}
                as={Col}
                md="4"
                controlId="validationCustom01"
              >
                <Form.Label>Province</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="province"
                  placeholder="Select province"
                  onChange={handleInputChange}
                  value={formData.province}
                  // defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className={styles.formGroupCol}
                as={Col}
                md="4"
                controlId="validationCustom02"
              >
                <Form.Label>ZIP Code</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="zipcode"
                  placeholder="Enter ZIP Code"
                  onChange={handleInputChange}
                  value={formData.zipcode}
                  // defaultValue="Otto"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Form>
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
            {Object.keys(formData).map((key, index) => {
              if (key === "userId") return null; // Skip rendering userId

              return (
                <Col key={index} xs={12} sm={6} className="mb-3">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className={`${styles.icon} mb-1`}>
                        {iconMapping[key]}{" "}
                      </span>
                      <small>{labelMapping[key] || key}</small>
                    </div>
                    <span className="">{formData[key]}</span>
                  </div>
                </Col>
              );
            })}
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
