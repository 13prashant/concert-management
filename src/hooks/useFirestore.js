import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, timestamp } from '../configs/firebase';

export const useFirestore = () => {
  const [document, setDocument] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const addDocument = async (collectionName, document) => {
    try {
      setError(null);
      setIsPending(true);

      document.createdAt = timestamp(Date.now());

      const collectionRef = collection(db, collectionName);

      await addDoc(collectionRef, document);

      setIsPending(false);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  };

  return { document, isPending, error, addDocument };
};
