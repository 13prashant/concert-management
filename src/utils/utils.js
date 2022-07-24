export const createBreadCrumbTitle = (path) =>
  `${path[0].toUpperCase()}${path.slice(1).replace('-', ' ')}`;
