// Material Components
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const SingersDetails = ({ singers }) => {
  return (
    <>
      <Typography mb={2} component="div" variant="h5">
        Singers
      </Typography>
      <Card>
        <List>
          {singers.map((singer) => (
            <ListItem key={singer} disablePadding>
              <ListItemButton>
                <ListItemText primary={singer} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  );
};

export default SingersDetails;
