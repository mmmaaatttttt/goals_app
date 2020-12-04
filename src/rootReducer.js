import { ADD_GOAL } from "./actionTypes";

const INITIAL_STATE = { goals: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_GOAL:
      return { ...state, goals: [...state.goals, action.payload] };

    default:
      return state;
  }
}

export default rootReducer;
