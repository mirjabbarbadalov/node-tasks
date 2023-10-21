import express from "express";
import { newsPostRouter } from "./routes/newsposts.routes.ts";
import { AppDataSource } from "../data-source.ts";
import authRouter from "./routes/auth.route.ts";

import swaggerDocument from "../swagger-output.json" assert { type: "json" };
import swaggerUi from "swagger-ui-express";

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
app.use("/api", authRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.json("server is working");
});

app.listen(5000, () => {
  console.log("server is running");
});
