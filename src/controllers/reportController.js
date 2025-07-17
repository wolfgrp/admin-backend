export const getReports = async (req, res) => {
  res.json({ reports: ["Report from manufacturing", "Sales sync"] });
};
