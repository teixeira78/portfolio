import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";

export const myApi = (config) => {
  const {
    baseUrl = "https://api.example.com",
    clientId = "defaultClientId",
    reducerPath = "myApi",
    tagTypes = [],
  } = config;

  const baseQuery = fetchBaseQuery({
    baseUrl,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Client-Id", clientId);
      return headers;
    },
  });

  const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
      // Acquire a mutex to prevent multiple refresh requests from being sent simultaneously
      const mutex = new Mutex();

      // Check if mutex is locked
      if (!mutex.isLocked()) {
        // if not locked, acquire the mutex
        const release = await mutex.acquire();

        try {
          // Attempt to refresh the token
          const refreshResult = await baseQuery(
            { url: "/auth/refresh", method: "POST" },
            api,
            extraOptions
          );

          if (refreshResult?.data) {
            // If refresh is successful, update the access token in the state
            api.dispatch({
              type: "auth/setAccessToken",
              payload: refreshResult.data.accessToken,
            });

            // Retry the original query with the new token
            result = await baseQuery(args, api, extraOptions);
          } else {
            // If refresh fails, dispatch logout action
            api.dispatch({
              type: "auth/logout",
            });
          }
        } finally {
          // Release the mutex after the operation is complete
          release();
        }
      } else {
        // If the mutex is locked, wait for it to be released before retrying
        await mutex.waitForUnlock();
        result = await baseQuery(args, api, extraOptions);
      }
      return result;
    }

    return result;
  };

  return createApi({
    reducerPath,
    baseQuery: baseQueryWithReauth,
    tagTypes,
    endpoints: () => ({}),
  });
};
