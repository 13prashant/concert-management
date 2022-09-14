// Hooks
import { useCollection } from '../hooks/useCollection';
// Material components
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// Util Functions
import { breakLyricsArrayByAlphabets } from '../utils/functions/breakLyricsArrayByAlphabets';
// Constants
import { COLLECTION_LYRICS } from '../utils/constants';

const Lyrics = () => {
  const {
    documents: lyrics,
    isPending,
    error,
  } = useCollection(COLLECTION_LYRICS, ['fileName', 'asc']);

  if (isPending) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div>
      {breakLyricsArrayByAlphabets(lyrics).map((alphabeticalArr, index) => (
        <div key={index}>
          <h4>{alphabeticalArr[0].fileName.charAt(0).toUpperCase()}</h4>
          {alphabeticalArr.map(({ fileName, pdf, writtenBy, composedBy }) => (
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
      ))}
    </div>
  );
};

export default Lyrics;
