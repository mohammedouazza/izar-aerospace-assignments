import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    velocity: {
      x: 0,
      y: 0,
      z: 0,
    },
    altitude: 0,
    temperature: 0,
    goingUp: true,
    statusMessage: "Still Ok",
  },
  altitudeArr: [],
  temperatureArr: [],
  velocityArr: [{ x: 0, y: 0, z: 0 }],
};

export const assignmentSlice = createSlice({
  name: "assignmentA",
  initialState,
  reducers: {
    setAssignment: (state, action) => {
      return {
        ...state,
        data: action.payload,
        altitudeArr: [...state.altitudeArr, action.payload.altitude],
        temperatureArr: [...state.temperatureArr, action.payload.temperature],
        velocityArr: [...state.velocityArr, action.payload.velocity],
      };
    },
  },
});

export const { setAssignment } = assignmentSlice.actions;

export default assignmentSlice.reducer;
