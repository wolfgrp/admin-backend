import { loginWithCognito } from "../services/awsAuth.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginWithCognito(email, password);
    res.json({ success: true, token });
  } catch (error) {
    res.status(401).json({ success: false, error: error.message });
  }
};
