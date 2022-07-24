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
