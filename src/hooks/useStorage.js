import { useEffect, useState } from 'react';
import { listAll, ref } from 'firebase/storage';
import { storage } from '../configs/firebase';

export const useStorage = async (bucketName) => {
  debugger;
  const [list, setList] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setError(null);

        // list ref
        const listRef = ref(storage, bucketName);

        let result = [];

        const response = await listAll(listRef);

        response.items.forEach((itemRef) => {
          result.push(itemRef.name);
        });

        setList(result);
        setIsPending(false);
      } catch (error) {
        setIsPending(false);
        setError(error.message);
        console.log('Error: ', error.message);
      }
    })();
  }, [bucketName]);

  console.log(list, isPending, error);

  return { list, isPending, error };
};
