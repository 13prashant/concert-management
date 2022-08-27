import { useEffect, useState } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage, timestamp } from '../configs/firebase';
import { useFirestore } from './useFirestore';
import { COLLECTION_LYRICS } from '../utils/constants';

export const useStorage = (bucketName, file) => {
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const { addDocument } = useFirestore();

  useEffect(() => {
    (async () => {
      setError(null);

      const storageRef = ref(storage, bucketName);

      const uploadTask = uploadBytes(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          setError(error.message);
          console.log('Error: ', error);
        },
        async () => {
          const fileName = file.name;
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          const createdAt = timestamp();

          await addDocument(
            {
              fileName,
              downloadUrl,
              createdAt,
            },
            COLLECTION_LYRICS
          );

          setUrl(downloadUrl);
        }
      );
    })();
  }, [bucketName, file]);

  return { url, progress, error };
};
