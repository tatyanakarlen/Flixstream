import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FlixMain from './FlixMain/FlixMain';
import BooksMain from './BooksMain/BooksMain';
import Home from './Home/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/flix" element={<FlixMain />} />
        <Route path="/books" element={<BooksMain />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </Router>
  );
}

export default App;
