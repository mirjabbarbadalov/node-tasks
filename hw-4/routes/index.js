import { Router } from "express";
import {
  getAllNews,
  getNewsById,
  addNews,
  updateNews,
  deleteNews,
} from "../controllers/index.js";

const newsPostsRouter = Router();

// GET ALL NEWS
newsPostsRouter.get("/newsposts", getAllNews);

// GET SELECTED NEWS
newsPostsRouter.get("/newsposts/:id", getNewsById);

// POST METHOD
newsPostsRouter.post("/newsposts", addNews);

// PUT METHOD
newsPostsRouter.put("/newsposts/:id", updateNews);

// DELETE METHOD
newsPostsRouter.delete("/newsposts/:id", deleteNews);

// FOR WRONG PATH
newsPostsRouter.get("*", (req, res) => {
  res.status(404).json({ error: "Wrong Path!" });
});

export default newsPostsRouter;
