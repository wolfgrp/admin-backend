import { logAction } from "../services/logger.js";

export const createLog = async (req, res) => {
  const { user, action } = req.body;
  await logAction(user, action);
  res.json({ success: true });
};
