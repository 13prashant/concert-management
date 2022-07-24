// Material components
import Grid from '@mui/material/Grid';
// Components
import ConcertCard from '../../components/concerts/ConcertCard/ConcertCard';

const concerts = [
  {
    id: 1,
    title: 'Varsad Bhinjave',
    image: 'https://media.timeout.com/images/101206597/750/422/image.jpg',
    venue: 'VNSGU, Surat',
    time: '9 PM, 10th August, 2022',
    artists: [
      'Prashant Patel',
      'Nishant Chavda',
      'Hriday Sur',
      'Sunil Revar',
      'Parth Khalasi',
      'Jinesh Shah',
      'Prem Dave',
      'Hetaxi Trivedi',
      'Nidhi Adhvaryu',
      'Prachi Shukla',
      'Nishi Shukla',
    ],
  },
  {
    id: 2,
    title: 'Sur Shabda Ne Sathvare',
    image:
      'https://www.israel21c.org/wp-content/uploads/2022/03/main-pic-2.jpg',
    venue: 'VNSGU, Surat',
    time: '9 PM, 10th August, 2022',
    artists: [
      'Prashant Patel',
      'Nishant Chavda',
      'Hriday Sur',
      'Sunil Revar',
      'Parth Khalasi',
      'Jinesh Shah',
      'Prem Dave',
      'Hetaxi Trivedi',
      'Nidhi Adhvaryu',
      'Prachi Shukla',
      'Nishi Shukla',
    ],
  },
  {
    id: 3,
    title: 'Aavi Shake To Aav',
    image: 'https://media.timeout.com/images/101206597/750/422/image.jpg',
    venue: 'VNSGU, Surat',
    time: '9 PM, 10th August, 2022',
    artists: [
      'Prashant Patel',
      'Nishant Chavda',
      'Hriday Sur',
      'Sunil Revar',
      'Parth Khalasi',
      'Jinesh Shah',
      'Prem Dave',
      'Hetaxi Trivedi',
      'Nidhi Adhvaryu',
      'Prachi Shukla',
      'Nishi Shukla',
    ],
  },
];

const Concerts = () => {
  return (
    <Grid container spacing={3}>
      {concerts.map((concert) => (
        <Grid key={concert.id} item xs={12} sm={12} md={6} lg={4}>
          <ConcertCard concert={concert} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Concerts;
