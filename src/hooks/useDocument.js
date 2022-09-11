import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../configs/firebase';

const useDocument = (collectionName, documentId) => {
  const [document, setDocument] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setError(null);

        const documentRef = doc(db, collectionName, documentId);

        const documentSnap = await getDoc(documentRef);

        if (documentSnap.exists()) {
          setDocument({ ...documentSnap.data(), id: documentSnap.id });
        } else {
          setError('No such document!');
        }

        setIsPending(false);
      } catch (error) {
        setIsPending(false);
        setError(error.message);
        console.error('Error: ', error.message);
      }
    })();
  }, [collectionName, documentId]);

  return { document, isPending, error };
};

export default useDocument;
