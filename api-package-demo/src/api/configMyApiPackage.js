import { createAuthListeners } from "../listeners/createAuthListeners";
import { createAuthSlice } from "../slices/authSlice";
import { userEndpoints } from "./endpoints/userEndpoints";
import { authEndpoints } from "./endpoints/authenticationEndpoints";

import { myApi } from "./myApi";

/**
 * Configures and initializes the API package with authentication
 * Creates a complete API setup including base API, auth slice, and middleware
 *
 * @param {Object} config - Configuration object for API initialization
 * @param {string} [config.baseUrl] - Base URL for API endpoints
 * @param {string} [config.clientId] - Client ID for authentication
 * @param {string} [config.reducerPath="myApi"] - Redux toolkit query reducer path
 * @param {string[]} [config.tagTypes=[]] - Array of tag types for cache invalidation
 * @returns {Object} Configured API package with all necessary components
 * @returns {Object} returns.baseApi - RTK Query API instance
 * @returns {Object} returns.userEndpoints - User-related API endpoints
 * @returns {Object} returns.authEndpoints - Authentication API endpoints
 * @returns {Array} returns.middleware - Array of middleware (API + auth listeners)
 * @returns {Object} returns.authSlice - Redux auth slice for state management
 */
export const configMyApiPackage = (config) => {
  // Initialize the base RTK Query API with the provided configuration
  // This creates the foundation for all API calls
  const baseApi = myApi(config);

  // Handles user authentication status in Redux store
  const authSlice = createAuthSlice();

  // Set up authentication listeners for automatic token management
  const authListeners = createAuthListeners({ baseApi, authSlice });

  return {
    baseApi,
    userEndpoints,
    authEndpoints,
    middleware: [baseApi.middleware, authListeners.middleware],
    authSlice,
  };
};
