/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
   import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

   export const studyFormApi = createApi({
     reducerPath: "studyFormApi",
     baseQuery: fetchBaseQuery({
       baseUrl: "https://jsonplaceholder.typicode.com/",
     }),
     
     endpoints: (build) => ({
       getData: build.query({
         query: () => ({
           url: "todos",
           method: "GET",
         }),
       }),
       getDataById: build.query({
         query: (id) => ({
           url: `todos/${id}`,
           method: "GET",
         }),
       }),
       
     }),
   });
   
   export const { useGetDataQuery, useGetDataByIdQuery } =
     studyFormApi;
   
   