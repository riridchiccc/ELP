import React from "react";
import "../Pages/Dashboard.css";
import "../Pages/courses.css";

const CommunicationSkills = () => {
  return (
    <div className="course-container">
      <h2 className="course-title">Communication Skills</h2>
      <p className="course-description">
        Effective communication is key in both personal and professional
        settings. In this module, we'll cover essential communication techniques
        that will help you get your message across clearly and confidently.
      </p>
      <p className="course-content-header">
        By the end of this module, you should be able to:
      </p>
      <ul className="course-list">
        <li>
          Understand the importance of verbal and non-verbal communication.
        </li>
        <li>Improve your active listening skills.</li>
        <li>Build your confidence in public speaking.</li>
      </ul>

      <h3 className="video-title">Watch This Video</h3>
      <p className="video-description">
        This video discusses how to communicate effectively in various
        situations, focusing on building strong relationships and conveying your
        message clearly.
      </p>
      <div className="iframe">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6-shbSFc48E?si=rL4P20jetartXuKR"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      </div>
      <h3 className="exercise-title">Practical Exercise</h3>
      <p className="exercise-description">
        Record and practice your elevator pitch. This will help you prepare for
        situations where you need to introduce yourself quickly and effectively.
      </p>
      <button className="recording-button">Start Recording</button>
    </div>
  );
};

export default CommunicationSkills;
