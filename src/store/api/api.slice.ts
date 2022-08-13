import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { envConfig } from "../../config";

export default createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: envConfig.env().API_URL }),
  tagTypes: [],
  endpoints: () => ({}),
});
