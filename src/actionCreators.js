import { ADD_GOAL } from "./actionTypes";

function addGoal(payload) {
  return {
    type: ADD_GOAL,
    payload
  }
}

export { addGoal };