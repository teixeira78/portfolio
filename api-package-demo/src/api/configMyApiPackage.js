import { createAuthListeners } from "../listeners/createAuthListeners";
import { createAuthSlice } from "../slices/authSlice";
import { myApi } from "./myApi";

export const configMyApiPackage = (config) => {
  // Initialize the API with the provided configuration
  const baseApi = myApi(config);
  const authSlice = createAuthSlice();
  const authListeners = createAuthListeners({ baseApi, authSlice });

  return {
    baseApi,
    middleware: [baseApi.middleware, authListeners.middleware],
    authSlice,
  };
};
