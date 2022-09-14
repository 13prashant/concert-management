// Hooks
import { useCollection } from '../hooks/useCollection';
// Material components
import Grid from '@mui/material/Grid';
// Components
import ConcertCard from '../components/concerts/ConcertCard';
// Constants
import { COLLECTION_CONCERTS, QUERY_LIMIT } from '../utils/constants';

const Concerts = () => {
  const {
    documents: concerts,
    isPending,
    error,
  } = useCollection(COLLECTION_CONCERTS, ['time', 'desc'], QUERY_LIMIT);

  if (isPending) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>{error}</h3>;
  }

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
