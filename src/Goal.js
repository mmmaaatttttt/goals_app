import React from "react";
import "./Goal.css";

function Goal({ description, count }) {
  return (
    <div className="Goal">
      <p className="Goal-description">{description}</p>
      <p className="Goal-count">Weekly goal count: {count}</p>
    </div>
  )
}

export default Goal;