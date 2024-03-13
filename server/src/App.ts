import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { rootRouter } from "./http/routes/rootRoute.js";
import { config } from "./utils/config/config.js";
import { errorHandler } from "./utils/exception/errorHandler.js";

const app: Application = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(helmet());
app.use(cors());

app.use(`/api/${config.API_VERSION}`, rootRouter);

app.use(errorHandler);

export { app };
