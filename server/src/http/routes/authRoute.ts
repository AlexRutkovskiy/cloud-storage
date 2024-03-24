import express from "express";
import { auth } from "../controllers/authController.js";
import { loginRequest } from "../requests/auth/loginRequest.js";
import { registerRequest } from "../requests/auth/registerRequest.js";

const authRouter = express.Router();

authRouter.post("/register", registerRequest.validate(), auth.register);
authRouter.post("/login", loginRequest.validate(), auth.login);
authRouter.get("/logout", auth.logout);

export { authRouter };
