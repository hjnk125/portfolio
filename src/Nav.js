import './Nav.css';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <Link to="/projects" className="Nav-btn">Projects</Link>
      <Link to="/" className="Nav-btn">About Me</Link>

      <h4>HOJUNG KIM</h4>
    </div>
  );
}

export default Nav;
