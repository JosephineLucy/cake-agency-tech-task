import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

configDotenv();
const endpoint: URL = new URL(process.env.API_ENDPOINT || "");

const app = express();

app.use(cors());

app.get("/orders", async (_req, res) => {
  const response = await fetch(endpoint);
  const data = await response.json();
  res.json(await data);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
