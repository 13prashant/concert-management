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

export const breakLyricsArrayByAlphabets = (lyrics) => {
  //Lyrics array must be sorted
  lyrics.sort((a, b) => {
    if (a.fileName.toLowerCase() < b.fileName.toLowerCase()) return -1;
    if (a.fileName.toLowerCase() > b.fileName.toLowerCase()) return 1;
    return 0;
  });
  let res = [];
  let firstNameFirstChar = [];

  //Pointers
  let p1 = 0;
  let p2 = 1;
  let p3 = 0;

  //Create array based on first character of filename
  for (let ele of lyrics) {
    firstNameFirstChar.push(ele.fileName.charAt(0).toLowerCase());
  }

  //Create arrays inside array based on simliar char of fileName
  while (p2 <= firstNameFirstChar.length) {
    if (firstNameFirstChar[p1] === firstNameFirstChar[p2]) {
      p2++;
    }

    if (firstNameFirstChar[p1] !== firstNameFirstChar[p2]) {
      res.push(new Array(p2 - p1).fill(0));
      p1 = p2;
      p2++;
    }
  }
  //Assign object to result array
  for (let ele of res) {
    for (let j = 0; j < ele.length; j++) {
      ele[j] = lyrics[p3];
      p3++;
      if (p3 === lyrics.length) {
        break;
      }
    }
  }
  return res;
};
