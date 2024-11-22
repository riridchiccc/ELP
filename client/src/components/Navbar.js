import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../services/firebase'; 
import Logo from '../images/logo.png';
import './Navbar.css'

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
        <img src= {Logo} alt="logo"></img> </div>
        <ul
       
         className="nav-menu">
          <li>
             <Link to="/" className="nav-link">
                  Home
              </Link>
              </li>
          {!isAuthenticated ? (
            <>
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
              <li className="dropdown">
                <button className="nav-link">Courses</button>
                <div className="dropdown-content">
                  <Link to="/courses/1">C Program</Link>
                  <Link to="/courses/2">Javascript</Link>
                  <Link to="/courses/3">Python</Link>
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