import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        📚 <span>StudyVerse</span>
      </div>

      <div className="nav-links">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/notes">Notes</NavLink>

        <NavLink to="/quiz">Quiz</NavLink>

        <NavLink to="/tests">Tests</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/contact">Contact</NavLink>

      </div>

    </nav>
  );
}

export default Navbar;