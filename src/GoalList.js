import React from "react";
import { useSelector } from "react-redux";
import NewGoalForm from "./NewGoalForm";
import Goal from "./Goal";
import "./GoalList.css";

function calculateGoalTotal(goals) {
  let total = 0;
  for (let goal of goals) {
    total += +goal.count;
  }
  return total;
}

function GoalList() {
  const goals = useSelector(st => st.goals);

  return (
    <div>
      <h1>Weekly Goals!</h1>
      <NewGoalForm />
      {goals.map(goal => (
        <Goal {...goal} key={goal.id} />
      ))}
      <h4 className="GoalList-total">
        Total number of weekly goals: {calculateGoalTotal(goals)}
      </h4>
    </div>
  );
}

export default GoalList;
