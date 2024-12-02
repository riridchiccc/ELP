import React from "react";
import "../Pages/Dashboard.css";
import "../Pages/courses.css";

const ConflictResolution = () => {
  return (
    <div className="course-container">
      <h2 className="course-title">Conflict Resolution and Negotiation</h2>
      <p className="course-description">
        Learning how to resolve conflicts and negotiate effectively is a key
        skill in both personal and professional environments. This module will
        help you develop conflict resolution skills and negotiate better
        outcomes.
      </p>
      <p className="course-content-header">
        Topics covered in this module include:
      </p>
      <ul className="course-list">
        <li>Different conflict resolution styles.</li>
        <li>How to listen actively and respond calmly during conflict.</li>
        <li>Effective negotiation techniques for win-win outcomes.</li>
      </ul>

      <h3 className="video-title">Watch This Video</h3>
      <p className="video-description">
        This video explains how to manage conflict and negotiate effectively in
        different situations.
      </p>
   <div className="iframe">
   <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TkmrY0vdd_k?si=rr8ckkQP-zwUGG9Q"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
   </div>

      <h3 className="exercise-title">Practical Exercise</h3>
      <p className="exercise-description">
        Practice negotiating in various scenarios with a partner, aiming for
        mutually beneficial outcomes.
      </p>
    </div>
  );
};

export default ConflictResolution;
