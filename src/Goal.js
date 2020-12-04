import React from "react";
import { useDispatch } from "react-redux";
import { removeGoal } from "./actionCreators"
import "./Goal.css";

function Goal({ description, count, id }) {
  const dispatch = useDispatch();
  return (
    <div className="Goal">
      <p className="Goal-description">{description}</p>
      <button onClick={() => dispatch(removeGoal(id))}>X</button>
      <p className="Goal-count">Weekly goal count: {count}</p>
    </div>
  );
};

export default Goal;
