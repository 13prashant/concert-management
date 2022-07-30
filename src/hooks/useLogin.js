import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../configs/firebase';
import { useAuthContext } from './useAuthContext';
import { LOGIN } from '../contexts/AuthContext';

const googleProvider = new GoogleAuthProvider();

export const useLogin = () => {
  const { dispatch } = useAuthContext();

  const login = async () => {
    console.log('clicked');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // Signed-in user info
      const { displayName, email, photoURL, uid } = result.user;
      const user = {
        displayName,
        email,
        photoURL,
        uid,
      };
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
