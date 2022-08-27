import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useFirestore } from '../../hooks/useFirestore';
import { COLLECTION_CONCERTS } from '../../utils/constants';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { useStorage } from '../../hooks/useStorage';
import { uniqueId } from '../../utils/utils';

const CreateConcert = () => {
  //Concert form states
  const [title, setTitle] = useState('');
  const [venue, setVenue] = useState('');
  const [time, setTime] = useState(null);
  const [coverImage, setCoverImage] = useState('');
  const [artists, setArtists] = useState(['Nishant', 'Prashant', 'Hriday']);
  const [titleError, setTitleError] = useState(false);
  const [venueError, setVenueError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [progress, setProgress] = useState('');
  const [urlError, setUrlError] = useState('');

  const { document, isPending, error, addDocument } = useFirestore();
  const { docUrl, downloadDocument } = useStorage();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title === '') {
      setTitleError(true);
      setTimeout(() => {
        setTitleError(false);
      }, 5000);
    }
    if (venue === '') {
      setVenueError(true);
      setTimeout(() => {
        setVenueError(false);
      }, 5000);
    }

    if (time === null) {
      setDateError(true);
      setTimeout(() => {
        setDateError(false);
      }, 5000);
    }

    if (coverImage === '') {
      setImageError(true);
      setTimeout(() => {
        setImageError(false);
      }, 5000);
    }

    if (title && venue && time && coverImage) {
      // Adding document in firestore
      //Creating metadata
      const concertPath = `concert-images/${coverImage.name}`;
      const metaDataType = 'image/jpeg';
      downloadDocument(metaDataType, concertPath, coverImage);

      if (metaDataType === 'image/jpeg') {
        addDocument(
          { title, venue, time, coverImage: docUrl, artists },
          COLLECTION_CONCERTS
        );
      }

      // const metadata = {
      // contentType: 'image/jpeg',
      // };

      // const storageRef = ref(
      //   storage,
      //   `concert-images/${coverImage.name + uniqueId()}`
      // );
      // const uploadTask = uploadBytesResumable(storageRef, coverImage, metadata);
      // uploadTask.on(
      //   'state_changed',
      //   (snapshot) => {
      //     const progress =
      //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //     setProgress(progress);
      //   },
      //   (error) => {
      //     setUrlError(error.message);
      //     console.log(error);
      //   },
      //   async () => {
      //     try {
      //       const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
      //       addDocument(
      //         { title, venue, time, coverImage: downloadUrl, artists },
      //         COLLECTION_CONCERTS
      //       );
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   }
      // );

      //Setting changed states to its intial states
      setTitle('');
      setVenue('');
      setTime(null);
      setCoverImage('');
    }
  };

  return (
    <Container align="center">
      <Typography variant="h3" color="primary">
        Create A New Concert
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          sx={{ marginTop: 2, marginBottom: 2 }}
          label="Concert Title"
          variant="outlined"
          value={title}
          fullWidth
          required
          error={titleError}
          helperText={title === '' ? 'This Field Is Required' : ''}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <TextField
          sx={{ marginTop: 2, marginBottom: 2 }}
          label="Venue"
          variant="outlined"
          value={venue}
          fullWidth
          required
          error={venueError}
          helperText={venue === '' ? 'This Field Is Required' : ''}
          onChange={(e) => {
            setVenue(e.target.value);
          }}
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Date & Time"
            value={time}
            onChange={(newValue) => {
              setTime(newValue);
            }}
            renderInput={(params) => (
              <TextField
                fullWidth
                required
                color="primary"
                sx={{ marginTop: 2, marginBottom: 2 }}
                {...params}
                error={dateError}
                helperText={
                  time === null ? 'Please Update The Date & Time' : ''
                }
              />
            )}
          />
        </LocalizationProvider>

        <TextField
          sx={{ marginTop: 2, marginBottom: 2 }}
          name="upload-photo"
          type="file"
          color="primary"
          error={imageError}
          helperText={coverImage === '' ? 'Cover Image Required' : ''}
          fullWidth
          onChange={(e) => {
            setCoverImage(e.target.files[0]);
          }}
        />
        <Button
          sx={{ marginTop: 2, marginBottom: 2 }}
          type="submit"
          color="primary"
          variant="contained"
          size="large"
          disabled={isPending}
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default CreateConcert;
