import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types";

const initialstate = []; // initial state

export default (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      const newState = state.filter((todo) => todo.id !== action.payload);
      return newState;
    case UPDATE_TODO:
      const updatedState = state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.todo.title;
          todo.description = action.payload.todo.description;
        }
        return todo;
      });
      return updatedState;
    default:
      return state;
  }
};
