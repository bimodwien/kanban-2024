import express, { NextFunction, Request, Response, urlencoded } from "express";
import cors from "cors";
import { corsOption } from "./config";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors(corsOption));

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Kanbim API");
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
});

export default app;
