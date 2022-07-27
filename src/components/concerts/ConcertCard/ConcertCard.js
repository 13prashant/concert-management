import { useState } from 'react';
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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
// Material icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
// Material colors
import { red } from '@mui/material/colors';
// Utils
import { createConcertSlug } from '../../../utils/utils';

const ITEM_HEIGHT = 48;

const ConcertCard = ({ concert }) => {
  const navigate = useNavigate();

  const { title, venue, time, coverImage, artists } = concert;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            {new Date(time.toDate()).toDateString()}
          </Typography>
        </CardContent>

        <CardActions>
          <AvatarGroup total={artists.length}>
            {artists.map((artist) => (
              <Avatar key={artist} sx={{ bgcolor: red[500] }}>
                {`${Array.from(artist.split(' ')[0])[0]}${
                  Array.from(artist.split(' ')[1])[0]
                }`}
              </Avatar>
            ))}
          </AvatarGroup>
        </CardActions>
      </CardActionArea>

      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{
          position: 'absolute',
          right: 8,
          bottom: 8,
        }}
      >
        <IconButton
          sx={{ ml: 'auto' }}
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>

        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
            },
          }}
        >
          {['Edit', 'Delete'].map((option) => (
            <MenuItem key={option} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </Card>
  );
};

export default ConcertCard;
