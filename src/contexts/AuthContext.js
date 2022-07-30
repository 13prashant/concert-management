import { createContext, useReducer } from 'react';
export const AuthContext = createContext();

// Reducer constants
export const LOGIN = 'login';
export const LOGOUT = 'logout';

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT:
      return { ...state, user: null };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
