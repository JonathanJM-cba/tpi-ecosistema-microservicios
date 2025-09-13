import express, { Express, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (_, res: Response) => {
  res.send("API Gateway is running");
});

app.get("/api/v1", (_, res: Response) => {
  res.send("API Gateway v1");
});

app.listen(PORT, () => {
  console.log(`API Gateway corriendo en http://localhost:${PORT}`);
});
