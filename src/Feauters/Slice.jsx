import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  states: [
    {
      value: "AL",
      label: "Alabama",
    },
    {
      value: "AK",
      label: "Alaska",
    },
    {
      value: "AZ",
      label: "Arizona",
    },
  ],
};

export const studySlice = createSlice({
  name: "study",
  initialState,

  reducers: {
    addState: (study, action) => {
      study.states.push(action.payload);
    },

    clearState: (study,payload ) => {
      study.states = payload;
    },
  },
});

export const { addState, clearState } = studySlice.actions;
export default studySlice.reducer;