export const restrictTo = (role) => (req, res, next) => {
  // If role !== role required
  next();
};
