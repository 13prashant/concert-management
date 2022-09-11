export const createAvatarName = (string) => {
  let strArr = string.split(' ');
  if (strArr.length === 1) {
    return `${strArr[0][0]}`;
  } else {
    return `${strArr[0][0]}${strArr[1][0]}`;
  }
};
