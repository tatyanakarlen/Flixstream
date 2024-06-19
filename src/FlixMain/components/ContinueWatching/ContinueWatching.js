import React from "react";
import styles from "./ContinueWatching.module.css";
import { Row, Col, Image, ProgressBar } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";

const ContinueWatching = () => {
    const flowers = process.env.PUBLIC_URL + "/images/flowers.jpg";

  return (
    <div className="mt-4">
      <h4 className="text-light fw-semibold">Continue watching</h4>
      <Row className="mt-3 g-3">
        <Col sx={12} lg={6}>
          <div className={`${styles.continueWatching} d-flex justify-content-between p-3 align-items-center gap-5`}>
            <div className="d-flex gap-3 w-100">
                <Image src={flowers} width={70} height={70}/>
                <div className="d-flex flex-column w-100 text-light">
                    <h5>Daily News Episode</h5>
                    <ProgressBar variant="danger" now={80} />
                    <small>12m 8 s remaining</small>
                </div>
            </div>
            <div className={`${styles.playBTN} p-2 me-3`}><FaPlay className="fs-4" /></div>
          </div>
        </Col>
        <Col sx={12} lg={6}>
          <div className={`${styles.continueWatching} d-flex justify-content-between p-3 align-items-center gap-5`}>
            <div className="d-flex gap-3 w-100">
                <Image src={flowers} width={70} height={70}/>
                <div className="d-flex flex-column w-100 text-light">
                    <h5>Daily News Episode</h5>
                    <ProgressBar variant="danger" now={80} />
                    <small>12m 8 s remaining</small>
                </div>
            </div>
            <div className={`${styles.playBTN} p-2 me-3`}><FaPlay className="fs-4" /></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContinueWatching;
