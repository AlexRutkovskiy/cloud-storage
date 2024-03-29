import express from "express";
import { authRouter } from "./authRoute.js";

const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);

export { rootRouter };
