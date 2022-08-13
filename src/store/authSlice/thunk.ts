import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosReq } from "../../common";
import { RootState } from "..";
import { LoginPayload, User } from "../../type";

const sliceName = "auth";

export const login = createAsyncThunk<
  { user: User; accessToken: string },
  LoginPayload,
  { state: RootState }
>(`${sliceName}/loginStatus`, async (body) => {
  debugger;
  try {
    const resp = await axiosReq.post("/login", body);
    return resp.data;
  } catch (e: any) {
    console.log(e);
  }
});
