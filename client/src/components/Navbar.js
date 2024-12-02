import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import Logo from "../images/logo.png";
import "./Navbar.css";

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setIsAuthenticated(false);
        navigate("/login");
      })
      .catch((error) => console.error("Error logging out:", error));
  };

  return (
    <nav className="navbar ">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="logo"></img>{" "}
        </div>
        <ul className="nav-menu">
          {!isAuthenticated ? (
            <>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="dropdown">
                <button className="nav-link">Courses</button>
                <div className="dropdown-content">
                  <Link to="/time-management">Time Management</Link>
                  <Link to="/communication-skills">Communication Skills</Link>
                  <Link to="/emotional-intelligence">
                    Emotional Intelligence
                  </Link>
                  <Link to="/leadership">Leadership</Link>
                  <Link to="/productivity">Productivity</Link>
                  <Link to="/conflict-resolution">Conflict Resolution</Link>
                </div>
              </li>
              <li>
                <button className="nav-link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
