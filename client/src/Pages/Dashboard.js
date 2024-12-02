import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";
import ProtectedRoute from "./ProtectedRoutes";
import "./Home.css";
import time from "../images/time.jpg";
import productivity from "../images/productivity.jpg";
import leader from "../images/leader.jpg";
import conflict from "../images/conflict.jpg";
import communication from "../images/communication.jpg";
import intelligence from "../images/intelligencejpg.jpg";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <p>You need to log in to access the dashboard.</p>;
  }

  return (
    <ProtectedRoute>
     
        <div className="home-container">
          <h1 className="hey">Welcome, </h1>
          <h2 className="hey">
            Explore expert-led courses to enhance your skills and grow in your
            career
          </h2>

          <div className="card-holder">
            <Link to="/time-management" style={{ textDecoration: "none" }}>
              <div className="card">
                <img src={time} alt="leadership" className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">Module 1: Time Management</h3>
                  <p className="card-description">Free</p>
                </div>
              </div>
            </Link>

            <Link to="/productivity" style={{ textDecoration: "none" }}>
              {" "}
              <div className="card">
                <img
                  src={productivity}
                  alt="leadership"
                  className="card-image"
                />
                <div className="card-content">
                  <h3 className="card-title">Module 2: Productivity</h3>
                  <p className="card-description">Free</p>
                </div>
              </div>
            </Link>

            <Link to="/communication-skills" style={{ textDecoration: "none" }}>
              <div className="card">
                <img
                  src={communication}
                  alt="leadership"
                  className="card-image"
                />
                <div className="card-content">
                  <h3 className="card-title">Module 3: Communication Skills</h3>
                  <p className="card-description">Free</p>
                </div>
              </div>
            </Link>

            <Link to="/conflict-resolution" style={{ textDecoration: "none" }}>
              <div className="card">
                <img src={conflict} alt="leadership" className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">Module 4: Conflict Resolution</h3>
                  <p className="card-description">Free</p>
                </div>
              </div>
            </Link>

            <Link
              to="/emotional-intelligence"
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <img
                  src={intelligence}
                  alt="leadership"
                  className="card-image"
                />
                <div className="card-content">
                  <h3 className="card-title">
                    Module 5: Emotional Intelligence
                  </h3>
                  <p className="card-description">Free</p>
                </div>
              </div>
            </Link>

            <Link to="/leadership" style={{ textDecoration: "none" }}>
              <div className="card">
                <img src={leader} alt="leadership" className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">Module 6: Leadership</h3>
                  <p className="card-description">Free</p>
                </div>
              </div>
            </Link>

            <div className="card">
              <img src={leader} alt="leadership" className="card-image" />
              <div className="card-content">
                <h3 className="card-title">Module 7: Leadership</h3>
                <p className="card-description">Free</p>
              </div>
            </div>

            <div className="card">
              <img src={leader} alt="leadership" className="card-image" />
              <div className="card-content">
                <h3 className="card-title">Module 8: Leadership</h3>
                <p className="card-description">Free</p>
              </div>
            </div>
          </div>
        </div>
      
    </ProtectedRoute>
  );
};

export default Dashboard;
