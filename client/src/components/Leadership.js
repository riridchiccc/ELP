import React from "react";
import "../Pages/Dashboard.css";
import "../Pages/courses.css";

const Leadership = () => {
  return (
    <div className="course-container">
      <h2 className="course-title">Leadership and Influence</h2>
      <p className="course-description">
        Leadership is about inspiring others to achieve a common goal. In this
        module, you'll explore different leadership styles and strategies for
        motivating and leading teams effectively.
      </p>
      <p className="course-content-header">
        Key takeaways from this module include:
      </p>
      <ul className="course-list">
        <li>Different types of leadership styles and when to use them.</li>
        <li>The importance of leading with integrity and building trust.</li>
        <li>How to motivate and inspire teams to achieve their goals.</li>
      </ul>

      <h3 className="video-title">Watch This Video</h3>
      <p className="video-description">
        This video explores leadership styles and provides insights on how to
        lead with influence and integrity.
      </p>
      <div className="iframe">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/vlpKyLklDDY?si=_qmjS_PhemPo3LMc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      </div>

      <h3 className="exercise-title">Practical Exercise</h3>
      <p className="exercise-description">
        Lead a group activity and practice motivating and guiding others.
        Reflect on your leadership style and areas of improvement.
      </p>
    </div>
  );
};

export default Leadership;
