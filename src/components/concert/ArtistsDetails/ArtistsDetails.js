// Material Components
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const ArtistsDetails = ({ artists }) => {
  return (
    <>
      <Typography mb={2} component="div" variant="h5">
        Artists
      </Typography>
      <Card>
        <List>
          {artists.map(({ name, instrument }) => (
            <ListItem key={name} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img
                    src={`/images/instruments/${
                      instrument?.toLowerCase() === 'piano'
                        ? 'keyboard'
                        : instrument?.toLowerCase()
                    }.png`}
                    width={25}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  );
};

export default ArtistsDetails;
