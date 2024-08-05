import React, { useState } from "react";
import { Modal, Form, Col, Row, InputGroup } from "react-bootstrap";
import styles from "./AuthModal.module.css";
import { TbMovie } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import CustomBTN from "../../../global/components/CustomBTN/CustomBTN";
import { FcGoogle } from "react-icons/fc";

const AuthModal = ({
  show,
  handleCloseAuthModal,
  isLoginMode,
  setIsLoginMode,
}) => {
  
  return (
    <Modal
      dialogClassName={styles.modal}
      show={show}
      onHide={handleCloseAuthModal}
      centered
    >
      <div className={`${styles.modalInner} text-light d-flex flex-column`}>
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center">
            <TbMovie />
            <span className="fw-semibold">FlixStream</span>
          </div>
          <IoClose
            onClick={handleCloseAuthModal}
            className={`${styles.closeBTN} fs-4`}
          />
        </div>
        <h2 className="fw-semibold mt-4">
          {isLoginMode ? "Sign In" : "Create Your Account"}
        </h2>
        <Form className={`${styles.form} mt-2`}>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className={styles.formInput}
                required
                type="text"
                placeholder="Example@email.com"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className={styles.formInput}
                type="text"
                placeholder="Enter password"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a password.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          {!isLoginMode && (
            <div className="d-flex gap-3 mt-4 align-items-center">
              <input
                className={`${styles.checkbox} mb-2`}
                type="checkbox"
              ></input>

              <h6 className="fw-normal">
                I agree to the{" "}
                <span
                  className={`${styles.termsAndConditionsSpan} fw-semibold`}
                >
                  Terms and Conditions
                </span>
              </h6>
            </div>
          )}
          <div className="mt-4 d-flex justify-content-between align-items-center">
            <div className="flex-grow-1">
              <CustomBTN
                width="w-100"
                text={isLoginMode ? "Sign In" : "Sign Up"}
                textColor="text-light"
                bgColor="redBTNbg"
                padding="py-2"
              />
            </div>
            <div className="d-flex justify-content-center flex-grow-1 gap-2 align-items-center">
            {isLoginMode ? 'New user?' : 'Have an account?'}
              <span
                role="button"
                // onClick={() => setIsLoginMode(false)}
                onClick={
                  isLoginMode
                    ? () => setIsLoginMode(false)
                    : () => setIsLoginMode(true)
                }
                className={`${styles.signUpSpan} fw-semibold text-decoration-underline`}
              >
                {isLoginMode ? 'Sign up' : 'Login'}
              </span>
            </div>
          </div>

          <div
            role="button"
            className={`${styles.googleOAuthBTN} w-100 d-flex gap-2 justify-content-center align-items-center mt-3 w-100`}
          >
            <FcGoogle className="fs-4" />
            <span className="fw-light">Continue with Google</span>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default AuthModal;
