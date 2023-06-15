import{configureStore} from "@reduxjs/toolkit";
import studyReducer from "../Feauters/Slice";
import {studyFormApi} from "../Services/studyFormApi";
export const store = configureStore({
    reducer: {
        study: studyReducer,
        [studyFormApi.reducerPath]:studyFormApi.reducer,
    },
   
})