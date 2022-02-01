import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  error: "",
  data: {
    velocity: {
      x: 0,
      y: 0,
      z: 0,
    },
    altitude: 0,
    temperature: 0,
    goingUp: false,
    statusMessage: "Still Ok",
  },
};

export const assignmentSliceB = createSlice({
  name: "assignmentB",
  initialState,
  reducers: {
    setAssignmentB: (state, action) => {
      return { ...state, data: action.payload };
    },
    setError: (state, action) => {
      return { ...state, error: action.payload };
    },
    setOpen: (state, action) => {
      return { ...state, open: action.payload };
    },
  },
});

export const { setAssignmentB, setError, setOpen } = assignmentSliceB.actions;

export default assignmentSliceB.reducer;
