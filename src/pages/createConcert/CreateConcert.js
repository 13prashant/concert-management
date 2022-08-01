import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../configs/firebase';

const CreateConcert = () => {
  //Concert form states
  const [title, setTitle] = useState('');
  const [venue, setVenue] = useState('');
  const [time, setTime] = useState(null);
  console.log(time);
  const [coverImage, setCoverImage] = useState('');
  const [artists, setArtists] = useState(['Nishant', 'Prashant', 'Hriday']);
  const [titleError, setTitleError] = useState(false);
  const [venueError, setVenueError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Setting the error state for empty/unchanged inputs and removing it after 5 seconds

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
    // We Have to add a check for a dates. if user put past dates from current day we have to put an error showing put valid input

    if (coverImage === '') {
      setImageError(true);
      setTimeout(() => {
        setImageError(false);
      }, 5000);
    }

    if (title && venue && time && coverImage) {
      // Adding document in firestore
      try {
        const docRef = await addDoc(collection(db, 'concerts'), {
          artists,
          title,
          venue,
          time,
          coverImage,
        });
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }

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
          value={coverImage}
          fullWidth
          onChange={(e) => {
            setCoverImage(e.target.value);
          }}
        />
        <Button
          sx={{ marginTop: 2, marginBottom: 2 }}
          type="submit"
          color="primary"
          variant="contained"
          size="large"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default CreateConcert;
