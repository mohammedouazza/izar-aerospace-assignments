import { combineReducers } from "@reduxjs/toolkit";
import assignmentAReducer from "./assignmentAReducer";
import assignmentBReducer from "./assignmentBReducer";

const rootReducer = combineReducers({
  assignmentA: assignmentAReducer,
  assignmentB: assignmentBReducer,
});

export default rootReducer;
