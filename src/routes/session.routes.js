import express from "express";
import { register, login, currentUser } from "../controllers/session.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/current", auth, currentUser);

export default router;
