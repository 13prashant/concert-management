import { useParams } from 'react-router-dom';
// Hooks
import useDocument from '../hooks/useDocument';
// Material components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// Components
import ConcertCover from '../components/concert/ConcertCover';
import SongsIndex from '../components/concert/SongsIndex';
import SingersDetails from '../components/concert/SingersDetails';
import ArtistsDetails from '../components/concert/ArtistsDetails';
// Constants
import { COLLECTION_CONCERTS } from '../utils/constants';

const Concert = () => {
  const { concertId } = useParams();
  const {
    document: concert,
    isPending,
    error,
  } = useDocument(COLLECTION_CONCERTS, concertId);

  if (isPending) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ConcertCover concert={concert} />
        </Grid>
        <Grid item xs={12} lg={7}>
          <SongsIndex songs={concert.songs} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ArtistsDetails artists={concert.artists} />
        </Grid>
        <Grid item xs={12} lg={2}>
          <SingersDetails singers={concert.singers} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Concert;
