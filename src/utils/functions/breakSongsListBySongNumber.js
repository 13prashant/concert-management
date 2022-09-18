export const breakSongsListBySongNumber = (songs, songNumber) => {
  const foundSongBySongNumber = songs.find((song) => song.srNo === songNumber);

  const indexToSplit = songs.indexOf(foundSongBySongNumber);

  const firstList = songs.slice(0, indexToSplit + 1);
  const secondList = songs.slice(indexToSplit + 1);

  return { firstList, secondList };
};
