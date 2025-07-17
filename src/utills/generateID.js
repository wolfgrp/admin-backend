export const generateEmployeeID = (name) => {
  return `${name.slice(0, 3).toUpperCase()}-${Date.now()}`;
};
