import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const CreateConcert = () => {
  //Concert form state
  const [title, setTitle] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState(Date);
  const [image, setImage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && venue && date && image) {
      console.log(title);
      console.log(venue);
      console.log(date);
      console.log(image);
      setTitle('');
      setVenue('');
      setDate(Date);
      setImage('');
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
          onChange={(e) => {
            setVenue(e.target.value);
          }}
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Date & Time"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => (
              <TextField
                fullWidth
                color="primary"
                sx={{ marginTop: 2, marginBottom: 2 }}
                {...params}
              />
            )}
          />

          <TextField
            sx={{ marginTop: 2, marginBottom: 2 }}
            name="upload-photo"
            type="file"
            color="primary"
            value={image}
            fullWidth
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </LocalizationProvider>

        <Button
          onClick={() => console.log('you clicked me')}
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
