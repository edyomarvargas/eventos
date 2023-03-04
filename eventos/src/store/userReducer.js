const INITIAL_STATE = {
  userEmail: "",
  isLogged: false,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userEmail: action.userEmail,
        isLogged: true,
      };
    case "LOGOUT":
      return {
        ...state,
        userEmail: "",
        isLogged: false,
      };
    default:
      return state;
  }
}

export default userReducer;
