import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();
const PORT = 3001;

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: "Ok" });
});

app.listen(PORT, () => {
  console.log(`Server run on PORT=${PORT} URL=http://localhost:${PORT}`);
});
