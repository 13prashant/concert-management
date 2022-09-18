import { useState } from 'react';
// Material components
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// Util Functions
import { breakSongsListBySongNumber } from '../../utils/functions/breakSongsListBySongNumber';

const SongsIndex = ({ songs }) => {
  const [intervalafterSongNumber, setIntervalAfterSongNumber] = useState('4');
  const { firstList, secondList } = breakSongsListBySongNumber(
    songs,
    intervalafterSongNumber
  );

  return (
    <>
      <Typography mb={2} component="div" variant="h5">
        Songs
      </Typography>
      <SongsList songs={firstList} />
      <Typography mb={2} component="div" variant="h5" align="center" my={2}>
        I N T E R V A L
      </Typography>
      <SongsList songs={secondList} />
    </>
  );
};

const SongsList = ({ songs }) => {
  return (
    <Card>
      {songs.map(
        ({
          srNo,
          name,
          singers = [],
          pdf,
          scale = 'C',
          timeSignature = '3/3',
          tempo = '113',
        }) => (
          <List key={srNo}>
            <a href={pdf} rel="noreferrer" target="_blank">
              <ListItem disablePadding>
                <ListItemButton>
                  <Typography mr={2} component="div" variant="h5">
                    {srNo}
                  </Typography>
                  <ListItemText primary={name} secondary={[...singers]} />
                  <Typography mr={2} component="div" variant="h6">
                    {scale}
                  </Typography>
                  <Typography mr={2} component="div" variant="h6">
                    {timeSignature}
                  </Typography>
                  <Typography mr={2} component="div" variant="h6">
                    {tempo}
                  </Typography>
                </ListItemButton>
              </ListItem>
            </a>
          </List>
        )
      )}
    </Card>
  );
};

export default SongsIndex;
