import express from "express";
import dotenv from "dotenv";
import { readFile } from "fs/promises";
import { readFileSync } from "fs";

dotenv.config();

const HOST = process.env.HOST;
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

// let dataArray = readFileSync("data.json").toString();

// console.log(dataArray);

app.get("/api/newsposts", (req, res) => {
  const page = req.query.page;
  console.log(page);
  res.end("salam");
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});

console.log(readFile("data.json"));
