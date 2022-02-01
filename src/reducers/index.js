import { combineReducers } from "@reduxjs/toolkit";
import assignmentAReducer from "./assignmentAReducer";

const rootReducer = combineReducers({
  assignmentA: assignmentAReducer,
});

export default rootReducer;
