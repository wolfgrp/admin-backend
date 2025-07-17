export const formatDate = (date = new Date()) => {
  return date.toISOString().split("T")[0];
};
