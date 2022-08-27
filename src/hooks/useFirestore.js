import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db, timestamp } from '../configs/firebase';

export const useFirestore = () => {
  const [document, setDocument] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // Add documents

  const addDocument = async (document, collectionName) => {
    setIsPending(true);
    document.createdAt = timestamp(Date.now());
    try {
      await addDoc(collection(db, collectionName), document);

      setIsPending(false);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  };

  return { document, isPending, error, addDocument };
};
