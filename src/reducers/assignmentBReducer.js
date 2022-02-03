import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  error: "",
  data: {
    Velocity: {
      x: 0,
      y: 0,
      z: 0,
    },
    Altitude: 0,
    Temperature: 0,
    GoingUp: true,
    StatusMessage: "Still Ok",
  },
  altitudeArr: [],
  temperatureArr: [],
  velocityArr: [{ x: 0, y: 0, z: 0 }],
};

export const assignmentSliceB = createSlice({
  name: "assignmentB",
  initialState,
  reducers: {
    setAssignmentB: (state, action) => {
      //console.log("AssignmentB", action);
      return {
        ...state,
        data: action.payload,
        open: true,
        error: "",
        altitudeArr: [...state.altitudeArr, action.payload.Altitude],
        temperatureArr: [...state.temperatureArr, action.payload.Temperature],
      };
    },
    setError: (state, action) => {
      //console.log("AssignmentB", action);
      return { ...state, error: action.payload, open: false };
    },
  },
});

export const { setAssignmentB, setError } = assignmentSliceB.actions;

export default assignmentSliceB.reducer;
