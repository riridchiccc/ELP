import React from "react";
import "../Pages/Dashboard.css";
import "../Pages/courses.css";

const EmotionalIntelligence = () => {
  return (
    <div className="course-container">
      <h2 className="course-title">Emotional Intelligence (EQ)</h2>
      <p className="course-description">
        Emotional Intelligence (EQ) is the ability to understand and manage your
        own emotions, as well as the emotions of others. In this module, you'll
        learn how to develop EQ to improve your relationships and personal
        growth.
      </p>
      <p className="course-content-header">You'll cover topics like:</p>
      <ul className="course-list">
        <li>Self-awareness and how it impacts your emotional responses.</li>
        <li>Empathy and its role in understanding others.</li>
        <li>How to manage your emotional triggers in various situations.</li>
      </ul>

      <h3 className="video-title">Watch This Video</h3>
      <p className="video-description">
        This video introduces the concept of Emotional Intelligence and explains
        its significance in both personal and professional life.
      </p>
      <div className="iframe">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Y7m9eNoB3NU?si=qFpNRF0ZYJ1Yjy9o"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      </div>
      <h3 className="exercise-title">Practical Exercise</h3>
      <p className="exercise-description">
        Journal your emotional triggers and reflect on them daily. This will
        help you understand your emotions better and improve your emotional
        regulation.
      </p>
    </div>
  );
};

export default EmotionalIntelligence;
