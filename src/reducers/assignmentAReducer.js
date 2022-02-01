import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  velocity: {
    x: 0,
    y: 0,
    z: 0,
  },
  altitude: 0,
  temperature: 0,
  goingUp: false,
  statusMessage: "Still Ok",
};

export const assignmentSlice = createSlice({
  name: "assignmentA",
  initialState,
  reducers: {
    setAssignment: (state, action) => {
      console.log("reducer", action);
      return action.payload;
    },
  },
});

export const { setAssignment } = assignmentSlice.actions;

export default assignmentSlice.reducer;
