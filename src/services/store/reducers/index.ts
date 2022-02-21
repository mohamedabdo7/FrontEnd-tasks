import { combineReducers } from "redux";
import allTasks from "./tasksReducer";

const rootReducer = combineReducers({
  tasks: allTasks,
});

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;
