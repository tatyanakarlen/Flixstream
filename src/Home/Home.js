import { Link } from "react-router-dom";
import { Button, Row, Col, Image } from "react-bootstrap";
import styles from "./Home.module.css";
import { FaStream } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";


const image = process.env.PUBLIC_URL + "/images/patrick-nagel-print.png";

const Home = () => {
  return (
    <div
      className={`${styles.homePageContainer} d-flex justify-content-center align-items-center`}
    >
      <div
        className={`${styles.homePageInnerWrapper} text-light w-100 d-flex flex-column`}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="fw-bold">
            CHOOSE<br></br>OPTION
          </h2>
          <div className="d-flex gap-3">
            <Link to="/flixStream">
              <Button className={`${styles.btn} fw-semibold`} variant="light">
                FlixStream
              </Button>
            </Link>

            <Link to="/swiftBooks">
              <Button className={`${styles.btn} fw-semibold`} variant="light">
                SwiftBooks
              </Button>
            </Link>
          </div>
        </div>
        <Row className="mt-5">
          <Col>
            <Link to="/flixStream">
              <div className={`${styles.card} p-4 d-flex d-flex flex-column`}>
                <Image src={image}></Image>
                <h5 className="fw-semibold mt-4">FlixStream</h5>
                <small className={styles.greySmall}>
                  Video streaming platform UI
                </small>
                <div className="d-flex mt-4 align-items-center justify-content-between w-100">
                  <div className="d-flex gap-3 align-items-center">
                    <FaStream />
                    <span>Media Dashboard</span>
                  </div>
                  <div>
                    <small>UI/UX</small>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col>
            <Link className={styles.cardLink} to="/swiftBooks">
              <div className={`${styles.card} p-4 d-flex d-flex flex-column`}>
                <Image src={image}></Image>
                <h5 className="fw-semibold mt-4">SwiftBooks</h5>
                <small className={styles.greySmall}>
                  Accounting software UI
                </small>
                <div className="d-flex mt-4 align-items-center justify-content-between w-100">
                  <div className="d-flex gap-3 align-items-center">
                    <FaChartBar />
                    <span>Financial Dashboard</span>
                  </div>
                  <div>
                    <small>UI/UX</small>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
