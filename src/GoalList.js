import React, { useState } from "react";
import NewGoalForm from "./NewGoalForm";
import Goal from "./Goal";
import "./GoalList.css";

function calculateGoalTotal(goals) {
  let total = 0;
  for (let goal of goals) {
    total += goal.count;
  }
  return total;
}

function GoalList(props) {
  const [goals, setGoals] = useState([
    { description: "Exercise", count: 3 },
    { description: "No sweets", count: 5 }
  ]);

  return (
    <div>
      <h1>Weekly Goals!</h1>
      <NewGoalForm />
      {goals.map(goal => <Goal {...goal} />)}
      <h4 className="GoalList-total">Total number of weekly goals: {calculateGoalTotal(goals)}</h4>
    </div>
  );
}

export default GoalList;
