import { createSlice } from "@reduxjs/toolkit";
import { authSliceGetInitialState } from "../utils/getters";

export const createAuthSlice = () => {
  // Create an initial state for the auth slice
  const initialState = authSliceGetInitialState();

  // Define the auth slice with reducers for managing authentication state
  const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setAccessToken: (state, action) => {
        state.accessToken = action.payload;
        state.isAuthenticated = true;
      },
      logout: (state) => {
        state.accessToken = null;
        state.isAuthenticated = false;
        state.user = null;
        localStorage.removeItem("accessToken");
      },
      setUser: (state, action) => {
        state.user = action.payload.user;
      },
    },
  });

  const selectors = {
    authState: (state) => state.auth,
    isAuthenticated: (state) => state.auth.isAuthenticated,
    accessToken: (state) => state.auth.accessToken,
    user: (state) => state.auth.user,
  };

  return {
    ...slice,
    selectors,
  };
};
