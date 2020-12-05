import { ADD_GOAL, REMOVE_GOAL } from "./actionTypes";
import axios from "axios";

function addGoalWithQuote(payload) {
  return async function(dispatch) {
    let response = await axios.get("http://numbersapi.com/random/trivia?json");
    let quote = response.data.text;
    dispatch(addGoal({...payload, quote}));
  }
}

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

export { addGoalWithQuote, removeGoal };