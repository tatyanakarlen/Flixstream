import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      FlixBooks: Streaming & Accounting
      <div className="d-flex flex-column">
      <Link to="/flix">flix</Link>
      <Link to="/books">books</Link>
      </div>
    </div>
  )
}

export default Home
