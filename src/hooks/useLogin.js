import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../configs/firebase';
import { useAuthContext } from './useAuthContext';
import { LOGIN } from '../contexts/AuthContext';

const googleProvider = new GoogleAuthProvider();

export const useLogin = () => {
  const { dispatch } = useAuthContext();

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const login = async () => {
    setError(null);
    setIsPending(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);

      // Signed-in user info
      const user = result.user;

      dispatch({ type: LOGIN, payload: user });
      setIsPending(false);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  };

  return { login, isPending, error };
};
