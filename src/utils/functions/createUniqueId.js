export const createUniqueId = () => {
  return Math.floor(Math.random() * 100) * Date.now();
};
