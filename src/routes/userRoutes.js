import express from "express";
import { onboardUser } from "../controllers/userController.js";
const router = express.Router();

router.post("/onboard", onboardUser);
export default router;
