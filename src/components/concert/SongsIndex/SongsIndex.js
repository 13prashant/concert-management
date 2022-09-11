// Material components
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const SongsIndex = ({ songs }) => {
  return (
    <>
      <Typography mb={2} component="div" variant="h5">
        Songs
      </Typography>
      <Card>
        {songs.map(({ srNo, name, singers, pdf }) => (
          <List key={srNo}>
            <a href={pdf} rel="noreferrer" target="_blank">
              <ListItem disablePadding>
                <ListItemButton>
                  <Typography mr={2} component="div" variant="h5">
                    {srNo}
                  </Typography>
                  <ListItemText primary={name} secondary={[...singers]} />
                </ListItemButton>
              </ListItem>
            </a>
          </List>
        ))}
      </Card>
    </>
  );
};

export default SongsIndex;
