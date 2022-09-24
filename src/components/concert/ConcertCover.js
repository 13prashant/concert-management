// Material Components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
// Material Icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ConcertCover = ({ concert, totalEstimatedTime }) => {
  const { title, venue, time, coverImage } = concert;

  return (
    <Card sx={{ height: 400, position: 'relative' }}>
      <div
        style={{
          zIndex: '95',
          width: '70%',
          height: '100%',
          background:
            'linear-gradient(90deg, rgba(255,255,255,1) 10%, rgba(0,0,0,0) 100%)',
          position: 'absolute',
        }}
      ></div>
      <Box
        sx={{
          padding: '50px',
          position: 'absolute',
          zIndex: '99',
        }}
      >
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1" color="text.primary" mt={1}>
          {venue}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {time.toDate().toLocaleString()}
        </Typography>

        {/* <Typography variant="subtitle" position="absolute" bottom={0}>
          Total Estimated Time:{' '} */}
        <Chip
          icon={<AccessTimeIcon />}
          label={`${totalEstimatedTime.totalHours}:${totalEstimatedTime.totalMinutes}:${totalEstimatedTime.totalSeconds}`}
          size="medium"
          sx={{
            position: 'absolute',
            bottom: '0',
          }}
        />
        {/* </Typography> */}
      </Box>
      <CardMedia
        component="img"
        image={coverImage}
        alt={title}
        sx={{
          height: '100%',
          position: 'absolute',
        }}
      />
    </Card>
  );
};

export default ConcertCover;
