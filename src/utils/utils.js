export const createBreadCrumbTitle = (path) => {
  let result = [];

  let words = path.split('-');

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    result.push(`${word[0].toUpperCase()}${word.substring(1)}`);
  }

  return result.join(' ');
};

export const createConcertSlug = (title) =>
  title.split(' ').join('-').toLowerCase();

//Creating avatar name based on input artist array
export const createAvatarName = (string) => {
  let strArr = string.split(' ');
  if (strArr.length === 1) {
    return `${strArr[0][0]}`;
  } else {
    return `${strArr[0][0]}${strArr[1][0]}`;
  }
};

//Unique Id
export const uniqueId = () => {
  return Math.floor(Math.random() * 100) * Date.now();
};

export const breakLyricsArrayByAlphabets = (lyricsArr) => {
  let result = [];

  let alphabeticalArr = [lyricsArr[0]];

  for (let i = 1; i < lyricsArr.length; i++) {
    let lyrics = lyricsArr[i];
    let fileNameFirstChar = lyrics.fileName.charAt(0).toLowerCase();

    let fileNameFirstCharOfLastLyricsOfAlphabeticalArr = alphabeticalArr[
      alphabeticalArr.length - 1
    ].fileName
      .charAt(0)
      .toLowerCase();

    if (fileNameFirstChar !== fileNameFirstCharOfLastLyricsOfAlphabeticalArr) {
      result.push(alphabeticalArr);
      alphabeticalArr = [lyricsArr[i]];
      result.push(alphabeticalArr);
    } else {
      alphabeticalArr.push(lyricsArr);
    }
  }
  return result;
};
