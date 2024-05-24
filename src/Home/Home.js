import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from "./Home.module.css";

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
          <div className="d-flex gap-2">
            <Button variant="light">flix</Button>
            <Button variant="light">books</Button>
          </div>
        </div>
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
