import { ADD_GOAL, REMOVE_GOAL } from "./actionTypes";

const INITIAL_STATE = { goals: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_GOAL:
      return { ...state, goals: [...state.goals, action.payload] };

    case REMOVE_GOAL:
      return {
        ...state,
        goals: state.goals.filter(goal => goal.id !== action.id)
      };

    default:
      return state;
  }
}

export default rootReducer;
