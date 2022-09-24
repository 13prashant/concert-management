import { useState } from 'react';
// Material components
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
// Material icons
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
// Util Functions
import { breakSongsListBySongNumber } from '../../utils/functions/breakSongsListBySongNumber';

const SongsIndex = ({
  songs,
  estimatedIntervalTime,
  setEstimatedIntervalTime,
}) => {
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
      <Typography mb={2} component="div" variant="p" align="center" my={2}>
        I N T E R V A L{' '}
        <Chip
          label={`${estimatedIntervalTime.minutes}:${estimatedIntervalTime.seconds}`}
          size="small"
        />
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
          estimatedTime = {
            minutes: 7,
            seconds: 13,
          },
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
                  <IconButton
                    onClick={(e) => {
                      console.log('clicked');
                    }}
                    aria-label="pdf"
                    color="primary"
                  >
                    <PictureAsPdfIcon />
                  </IconButton>
                  <IconButton
                    onClick={(e) => {
                      console.log('clicked');
                    }}
                    aria-label="audio"
                    color="primary"
                  >
                    <MusicNoteIcon />
                  </IconButton>
                  <Chip
                    label={`${estimatedTime.minutes}:${estimatedTime.seconds}`}
                    size="small"
                  />
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
