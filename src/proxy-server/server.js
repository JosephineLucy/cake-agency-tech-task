import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const response = await fetch("https://fauxdata.codelayer.io/api/orders");
  const data = await response.json();
  res.json(await data);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
