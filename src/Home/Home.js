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
            <Link to="/flix">
              <Button className={`${styles.btn} fw-semibold`} variant="light">
                Flix
              </Button>
            </Link>

            <Link to="/books">
              <Button className={`${styles.btn} fw-semibold`} variant="light">
                Books
              </Button>
            </Link>
          </div>
        </div>
        <Row className="mt-5">
          <Col>
            <Link to="/flix">
              <div className={`${styles.card} p-4 d-flex d-flex flex-column`}>
                <Image src={image}></Image>
                <h5 className="fw-semibold mt-4">Flix</h5>
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
            <Link className={styles.cardLink} to="/flix">
              <div className={`${styles.card} p-4 d-flex d-flex flex-column`}>
                <Image src={image}></Image>
                <h5 className="fw-semibold mt-4">Books</h5>
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

      {/* FlixBooks: Streaming & Accounting
      <div className="d-flex flex-column">
      <Link to="/flix">flix</Link>
      <Link to="/books">books</Link>
      </div> */}
    </div>
  );
};

export default Home;
