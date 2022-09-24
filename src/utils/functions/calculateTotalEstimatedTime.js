export const calculateTotalEstimatedTime = (songs, estimatedIntervalTime) => {
  if (!songs || !estimatedIntervalTime) {
    return { totalMinutes: null, totalSeconds: null };
  }
  const totalSongsMintutes = songs.reduce((acc, cv) => {
    return acc + (cv.estimatedTime?.minutes || 0);
  }, 0);

  const totalSongsSeconds = songs.reduce((acc, cv) => {
    return acc + (cv.estimatedTime?.seconds || 0);
  }, 0);

  const seconds = totalSongsSeconds + estimatedIntervalTime.seconds;

  const remainderSeconds = seconds % 60;
  const pureSeconds = seconds - remainderSeconds;
  const minutesToAdd = pureSeconds / 60;

  const totalMinutes =
    totalSongsMintutes + estimatedIntervalTime.minutes + minutesToAdd;
  const totalSeconds = seconds - pureSeconds;

  const totalEstimatedTime = { totalHours: '00', totalMinutes, totalSeconds };

  return { totalEstimatedTime };
};
