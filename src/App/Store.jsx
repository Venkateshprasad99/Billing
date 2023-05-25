import{configureStore} from "@reduxjs/toolkit";
import studyReducer from "./Feauters/Slice";
import {studyFormApi} from "./Services/studyFormApi";
export const Store = configureStore({
    reducer: {
        study: studyReducer,
        [studyFormApi.reducerPath]:studyFormApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(studyFormApi)
})