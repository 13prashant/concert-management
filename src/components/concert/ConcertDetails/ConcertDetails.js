// Material Components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ConcertDetails = ({ concert }) => {
  const { title, venue, time, coverImage } = concert;

  return (
    <Card sx={{ display: 'flex', height: 250 }}>
      <CardMedia component="img" image={coverImage} alt={title} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.primary" component="div">
            {venue}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            {time.toDate().toLocaleString()}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ConcertDetails;
