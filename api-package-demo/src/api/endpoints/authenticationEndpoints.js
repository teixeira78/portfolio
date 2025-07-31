import { myApi } from "../myApi";

export const authEndpoints = myApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      // Provides auth data to cache
      providesTags: (result) =>
        result ? [{ type: "Auth", id: "CURRENT" }] : [],
    }),
    logout: build.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      // Clear auth cache on logout
      invalidatesTags: [{ type: "Auth", id: "CURRENT" }],
    }),
    refreshToken: build.mutation({
      query: (refreshToken) => ({
        url: "/auth/refresh",
        method: "POST",
        body: { refreshToken },
      }),
      // Update current auth cache
      providesTags: [{ type: "Auth", id: "CURRENT" }],
    }),

    // Get current user profile (protected route)
    getCurrentUser: build.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: [{ type: "Auth", id: "CURRENT" }],
      // This will be invalidated on logout
    }),

    // Register new user
    register: build.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData, // { email, password, name, etc. }
      }),
      // Provides auth data after successful registration
      providesTags: (result) =>
        result ? [{ type: "Auth", id: "CURRENT" }] : [],
    }),

    // Forgot password
    forgotPassword: build.mutation({
      query: (email) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: { email },
      }),
    }),

    // Reset password
    resetPassword: build.mutation({
      query: ({ token, newPassword }) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: { token, newPassword },
      }),
      // Provides auth data after successful password reset
      providesTags: (result) =>
        result ? [{ type: "Auth", id: "CURRENT" }] : [],
    }),
  }),
});
