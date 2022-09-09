import { useEffect, useRef, useState } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../configs/firebase';
import { QUERY_LIMIT } from '../utils/constants';

export const useCollection = (
  collectionName,
  _orderQuery = ['createdAt', 'desc'],
  queryLimit = QUERY_LIMIT
) => {
  const orderQuery = useRef(_orderQuery).current;

  const [documents, setDocuments] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setError(null);

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
  }, [collectionName, orderQuery, queryLimit]);

  return { documents, isPending, error };
};
