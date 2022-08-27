import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../configs/firebase';
import { QUERY_LIMIT } from '../utils/constants';

export const useCollection = (
  collectionName,
  orderQuery = ['createdAt', 'desc'],
  queryLimit = QUERY_LIMIT
) => {
  const [documents, setDocuments] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setError(null);

        // collection ref
        const collectionRef = collection(db, collectionName);

        const result = [];

        const q = query(
          collectionRef,
          orderBy(...orderQuery),
          limit(queryLimit)
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(result);
        setIsPending(false);
      } catch (error) {
        setIsPending(false);
        setError(error.message);
        console.error('Error: ', error.message);
      }
    })();
  }, [collectionName, queryLimit]);

  return { documents, isPending, error };
};
