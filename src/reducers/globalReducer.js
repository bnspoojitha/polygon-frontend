export const reducerTypes = {
    SET_JWT: "SET_JWT",
};

export const init_state_global = {
  jwt: "",
};

export const globalReducer = (state, action) => {
  switch (action.type) {
    case reducerTypes.SET_JWT:
      return {
        ...state,
        jwt: action.payloadGlobal.jwt, 
      };
    default:
      return state;
  }
};