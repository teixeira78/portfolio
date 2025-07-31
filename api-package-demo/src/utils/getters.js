import { jwtDecode } from "jwt-decode";

export const authSliceGetInitialState = () => {
  // Check if there is a token in localStorage
  const storedToken = localStorage.getItem("accessToken");

  if (storedToken) {
    // Decode the token to get user information
    const decodedToken = jwtDecode(storedToken);

    return {
      // Set the initial state based on the decoded token
      isAuthenticated: true,
      accessToken: storedToken,
      user: decodedToken.user,
    };
  }

  return {
    // If no token is found, set the initial state to unauthenticated
    isAuthenticated: false,
    accessToken: null,
    user: null,
  };
};
