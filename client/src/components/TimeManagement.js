import React from "react";
import "../Pages/Dashboard.css";
import "../Pages/courses.css";

const TimeManagement = () => {
  return (
    <div className="course-container header">
      <h2 className="course-title hi">Time Management</h2>
      <p className="course-description">
        Time management is a crucial skill that can help you be more productive
        and reduce stress. This module will teach you effective techniques to
        make the best use of your time.
      </p>
      <p className="course-content-header">In this module, you'll learn:</p>
      <ul className="course-list">
        <li>How to prioritize tasks effectively.</li>
        <li>How the Pomodoro technique can help you stay focused.</li>
        <li>Ways to overcome procrastination and boost your productivity.</li>
      </ul>

      <h3 className="video-title">Watch This Video to Get Started</h3>
      <p className="video-description">
        This video explains some key time management techniques, including how
        to effectively plan your day to increase productivity.
      </p>
     <div className="iframe">
     <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/iONDebHX9qk?si=z5CGI_yYZMlHmFLf"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

     </div>
      <h3 className="exercise-title">Practical Exercise</h3>
      <p className="exercise-description">
        Download the Time Management Template and fill it in to plan your daily
        tasks efficiently.
      </p>
      <button className="download-btn">Download Template</button>
    </div>
  );
};

export default TimeManagement;
