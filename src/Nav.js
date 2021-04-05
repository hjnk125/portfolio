import './Nav.css';
import { BrowserRouter as Router, Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <Router>
        <Link to="/projects" className="Nav-btn">Projects</Link>
        <Link to="/" className="Nav-btn">About Me</Link>
      </Router>
    </div>
  );
}

export default Nav;
