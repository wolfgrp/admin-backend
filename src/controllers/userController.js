export const onboardUser = async (req, res) => {
  const { name, role, phone } = req.body;
  // Add row to Sheet (manual method)
  res.json({ success: true, message: "User onboarding pending Google Sheet entry." });
};
