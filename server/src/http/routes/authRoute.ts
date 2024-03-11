import express from "express";
import { auth } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/register", auth.register);
authRouter.post("/login", auth.login);
authRouter.get("/logout", auth.logout);

export { authRouter };
