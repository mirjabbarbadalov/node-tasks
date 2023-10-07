import express from "express";
import { newsPostRouter } from "./routes/newsposts.routes.ts";
import { AppDataSource } from "../data-source.ts";
import authRouter from "./routes/auth.route.ts";

AppDataSource.initialize()
  .then(() => {
    console.log("connection has established...");
  })
  .catch((err) => {
    console.log("there's an error with connection. Fix it!");
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use("/api/newsposts", newsPostRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.json("server is working");
});

app.listen(5000, () => {
  console.log("server is running");
});
