import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../configs/firebase';
import { useAuthContext } from './useAuthContext';
import { LOGIN } from '../contexts/AuthContext';

const googleProvider = new GoogleAuthProvider();

export const useLogin = () => {
  const { dispatch } = useAuthContext();

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // Signed-in user info
      const user = result.user;

      dispatch({ type: LOGIN, payload: user });
    } catch (error) {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.customData.email;
      // const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };

  return { login };
};
