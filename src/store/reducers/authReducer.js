const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login err");
      return { ...state, authError: "Login failed" };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        // spread operator is used to avoid overwriting what is in the state
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;
    default:
      return state;
  }
};

export default authReducer;
