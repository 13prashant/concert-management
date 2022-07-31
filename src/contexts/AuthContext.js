import { createContext, useEffect, useReducer } from 'react';
import { auth } from '../configs/firebase';
export const AuthContext = createContext();

// Reducer constants
export const LOGIN = 'login';
export const LOGOUT = 'logout';
export const IS_AUTH_READY = 'isAuthReady';

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case IS_AUTH_READY:
      return {
        user: action.payload,
        isAuthReady: true,
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
    isAuthReady: false,
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: IS_AUTH_READY, payload: user });
      } else {
        console.log('user signed out');
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
