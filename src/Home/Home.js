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
            <Button className={`${styles.btn} fw-semibold`} variant="light">
              Flix
            </Button>
            <Button className={`${styles.btn} fw-semibold`} variant="light">
              Books
            </Button>
          </div>
        </div>
        <Row className="mt-5">
          <Col>
            <div className={`${styles.card} p-3 d-flex d-flex flex-column`}>
              <Image src={image}></Image>
              <h5 className="fw-semibold mt-4">Flix</h5>
              <small>Video streaming platform UI</small>
              <div className="d-flex gap-3 mt-4 align-items-center">
                <FaStream />
                <span>something</span>
              </div>
            </div>
          </Col>
          <Col>
            <div className={`${styles.card} p-3 d-flex d-flex flex-column`}>
              <Image src={image}></Image>
              <h5 className="fw-semibold mt-4">Flix</h5>
              <small>Accounting software UI</small>
              <div className="d-flex gap-3 mt-4 align-items-center">
                <FaChartBar />
                <span>something</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* FlixBooks: Streaming & Accounting
      <div className="d-flex flex-column">
      <Link to="/flix">flix</Link>
      <Link to="/books">books</Link>
      </div> */}
    </div>
  );
};

export default Home;
