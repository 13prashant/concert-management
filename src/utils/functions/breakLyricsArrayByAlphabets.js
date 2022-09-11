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
