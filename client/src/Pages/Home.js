// src/pages/Home.js
import React from "react";
import "./Home.css";
import time from "../images/time.jpg";
import productivity from "../images/productivity.jpg";
import leader from "../images/leader.jpg";
import conflict from "../images/conflict.jpg";
import communication from "../images/communication.jpg";
import intelligence from "../images/intelligencejpg.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <h1  className="hey">Welcome to the Future of Learning</h1>
      <h3 className="hey">
        Explore expert-led courses to enhance your skills and grow in your
        career
      </h3>

      <div className="card-holder">
        <div className="card">
          <img src={time} alt="leadership" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Module 1: Time Management</h3>
            <p className="card-description">Free</p>
          </div>
        </div>

        <div className="card">
          <img src={productivity} alt="leadership" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Module 2: Productivity</h3>
            <p className="card-description">Free</p>
          </div>
        </div>

        <div className="card">
          <img src={communication} alt="leadership" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Module 3: Communication Skills</h3>
            <p className="card-description">Free</p>
          </div>
        </div>

        <div className="card">
          <img src={conflict} alt="leadership" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Module 4: Conflict Resolution</h3>
            <p className="card-description">Free</p>
          </div>
        </div>

        <div className="card">
          <img src={intelligence} alt="leadership" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Module 5: Emotional Intelligence</h3>
            <p className="card-description">Free</p>
          </div>
        </div>

        <div className="card">
          <img src={leader} alt="leadership" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Module 6: Leadership</h3>
            <p className="card-description">Free</p>
          </div>
        </div>


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
  );
};

export default Home;
