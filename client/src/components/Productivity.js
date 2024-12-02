import React from "react";
import "../Pages/courses.css";

const Productivity = () => {
  return (
    <div className="course-container">
      <h2 className="course-title">Productivity and Self-Discipline</h2>
      <p className="course-description">
        Being productive requires focus and discipline. In this module, you'll
        learn how to stay productive by building productive habits and
        eliminating distractions.
      </p>
      <p className="course-content-header">Key concepts include:</p>
      <ul className="course-list">
        <li>The importance of focus and eliminating distractions.</li>
        <li>How to develop and stick to productive habits.</li>
        <li>
          Strategies for overcoming procrastination and maintaining momentum.
        </li>
      </ul>

      <h3 className="video-title">Watch This Video</h3>
      <p className="video-description">
        This video provides actionable strategies for improving your
        productivity and staying on track with your goals.
      </p>
<div className="iframe">
<iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/T4CB5RPbtCk?si=m7k15KyF7pplZ8C4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
</div>

      <h3 className="exercise-title">Practical Exercise</h3>
      <p className="exercise-description">
        Use a productivity tracking app to monitor your daily habits and make
        improvements over time.
      </p>
    </div>
  );
};

export default Productivity;
