import { createListenerMiddleware } from "@reduxjs/toolkit";
import { handleAuthSuccess } from "./handleAuthSuccess";

export function createAuthListeners(config) {
  const { baseApi, authSlice } = config;
  const authListenerMiddleware = createListenerMiddleware();

  //   Start listening to specific actions related to authentication

  authListenerMiddleware.startListening({
    matcher: baseApi.endpoints.login.matchFulfilled,
    effect: (action, { dispatch, getState }) => {
      handleAuthSuccess(action, { dispatch, getState });
    },
  });

  authListenerMiddleware.startListening({
    matcher: baseApi.endpoints.logout.matchFulfilled,
    effect: (action, { dispatch }) => {
      dispatch(authSlice.actions.logout());
    },
  });
}
