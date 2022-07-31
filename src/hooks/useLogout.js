import { useState } from 'react';
import { auth } from '../configs/firebase';
import { useAuthContext } from './useAuthContext';
import { LOGOUT } from '../contexts/AuthContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await auth.signOut();

      dispatch({ type: LOGOUT });

      setIsPending(false);
    } catch (error) {
      console.error('Error: ', error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { logout, isPending, error };
};
