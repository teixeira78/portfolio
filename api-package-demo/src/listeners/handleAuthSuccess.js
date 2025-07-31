import jwtDecode from "jwt-decode";

export const handleAuthSuccess = (action, { dispatch }) => {
  const { accessToken } = action.payload;

  if (accessToken) {
    dispatch({
      type: "auth/setAccessToken",
      payload: accessToken,
    });
    const decodedToken = jwtDecode(accessToken);
    dispatch({
      type: "auth/setUser",
      payload: { user: decodedToken.user },
    });
    localStorage.setItem("accessToken", accessToken);
  }
};
