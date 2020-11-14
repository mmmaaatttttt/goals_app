import React, { useState } from "react";
import NewGoalForm from "./NewGoalForm";
import Goal from "./Goal";

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
    </div>
  );
}

export default GoalList;
