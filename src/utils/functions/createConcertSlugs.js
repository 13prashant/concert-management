export const createConcertSlug = (title) =>
  title.split(' ').join('-').toLowerCase();
