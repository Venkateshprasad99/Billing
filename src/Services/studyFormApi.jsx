import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const  studyFormApi = createApi({
    reducerPath: "studyFormApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://www.w3schools.com/"
    }),
    endpoints: (builder) => ({
        getStudyForm: builder.query({
            url:"todos",
            method:"GET"
            // query: (studyFormId) => `/study-forms/${studyFormId}`,
        }),
    }),
});

export const {useGetDataQuery} = studyFormApi; 