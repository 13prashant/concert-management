import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../configs/firebase';

export const useCollection = (collectionName) => {
  const [documents, setDocuments] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // collection ref
        const collectionRef = collection(db, collectionName);

        const result = [];

        const querySnapshot = await getDocs(collectionRef);

        querySnapshot.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(result);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setIsPending(false);
        setError(error.message);
        console.error('Error: ', error.message);
      }
    })();
  }, [collectionName]);

  return { documents, isPending, error };
};
