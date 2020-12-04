import { ADD_GOAL, REMOVE_GOAL } from "./actionTypes";

function addGoal(payload) {
  return {
    type: ADD_GOAL,
    payload
  }
}

function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id
  }
}

export { addGoal, removeGoal };