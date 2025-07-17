import express from "express";
import { changePassword } from "../controllers/settingsController.js";
const router = express.Router();

router.post("/change-password", changePassword);
export default router;
