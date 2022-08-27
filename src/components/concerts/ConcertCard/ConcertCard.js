import { useNavigate } from 'react-router-dom';
// Material components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import CardActionArea from '@mui/material/CardActionArea';
// Material colors
import { red } from '@mui/material/colors';
// Utils
import { createAvatarName, createConcertSlug } from '../../../utils/utils';

const ConcertCard = ({ concert }) => {
  const navigate = useNavigate();

  const { title, venue, time, coverImage, artists } = concert;
  return (
    <Card
      sx={{ maxWidth: 345, position: 'relative' }}
      onClick={() => navigate(`${createConcertSlug(title)}`)}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={coverImage} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.primary">
            {venue}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {time.toDate().toLocaleString()}
          </Typography>
        </CardContent>

        <CardActions>
          <AvatarGroup total={artists.length}>
            {artists.map((artist) => (
              <Avatar key={artist} sx={{ bgcolor: red[500] }}>
                {createAvatarName(artist)}
              </Avatar>
            ))}
          </AvatarGroup>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ConcertCard;
