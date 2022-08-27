import { useCollection } from '../../hooks/useCollection';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { COLLECTION_LYRICS, QUERY_LIMIT } from '../../utils/constants';

const Lyrics = () => {
  const {
    documents: lyrics,
    isPending,
    error,
  } = useCollection(COLLECTION_LYRICS);

  if (isPending) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div>
      {lyrics.map(({ fileName, pdf, writtenBy, composedBy }) => (
        <List key={fileName}>
          <a href={pdf} rel="noreferrer" target="_blank">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={fileName}
                  secondary={`Written By: ${writtenBy}, Composed By: ${composedBy}`}
                />
              </ListItemButton>
            </ListItem>
          </a>
        </List>
      ))}
    </div>
  );
};

export default Lyrics;
