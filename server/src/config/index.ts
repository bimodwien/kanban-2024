import { CorsOptions } from "cors";
import "dotenv/config";

const PORT = process.env.PORT || 8000;

const SECRET_KEY = process.env.SECRET_KEY || "";

const corsOption: CorsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

export { PORT, SECRET_KEY, corsOption };
