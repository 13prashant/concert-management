import { useState } from 'react';
import { storage } from '../configs/firebase';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { uniqueId } from '../utils/utils';

export const useStorage = () => {
  const [docUrl, setDocUrl] = useState('');
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState('');

  const downloadDocument = (metadatacontentType, storagePath, file) => {
    const metadata = {
      contentType: `${metadatacontentType}`,
    };

    const storageRef = ref(storage, storagePath + uniqueId());

    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },

      (error) => {
        setError(error.message);
        console.log(error);
      },
      async () => {
        try {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          console.log(downloadUrl);
          setDocUrl(downloadUrl);
          console.log(docUrl);
        } catch (error) {
          console.log(error);
        }
      }
    );
  };

  return { docUrl, error, progress, downloadDocument };
};
