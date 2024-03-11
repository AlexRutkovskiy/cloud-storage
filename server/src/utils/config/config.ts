import dotenv from "dotenv";
dotenv.config();

export const config = {
  API_VERSION: process.env.API_VERSION ?? "v1",
  PORT: process.env.PORT ?? 3001,
  DB: {
    URL: process.env.DB_URL ?? "",
  },
};
