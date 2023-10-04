import express from "express";
import dotenv from "dotenv";
import logger from "./middleware/index.js";
import newsPostsRouter from "./routes/index.js";

dotenv.config();

const HOST = process.env.HOST;
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

//  LOGGING
app.use(logger);

// Routes

app.use("/api", newsPostsRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});
