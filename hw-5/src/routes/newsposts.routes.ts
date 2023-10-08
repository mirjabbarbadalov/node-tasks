import { Router } from "express";
import newspostsService from "../services/newsposts.service.ts";
import { authenticateToken } from "../../middleware/auth.middleware.ts";

export const newsPostRouter = new Router();

newsPostRouter.get("/", authenticateToken, async (req, res) => {
  const newsposts = await newspostsService.getPosts(req.query);
  res.setHeader("content-type", "application/json").json(newsposts);
});
newsPostRouter.get("/:id", async (req, res) => {
  const post = await newspostsService.getPostById(+req.params.id);
  if (!post) {
    res
      .setHeader("content-type", "application/json")
      .json({ msg: "there is no post " });
  }
  res.setHeader("content-type", "application/json").json(post);
});
newsPostRouter.post("/", async (req, res) => {
  const result = await newspostsService.createNewPost(req.body);
  res.status(200).json({ msg: "New post has been created!", result });
});
newsPostRouter.put("/:id", async (req, res) => {
  const result = await newspostsService.editPostById(+req.params.id, req.body);
  res.setHeader("content-type", "application/json").status(200).json(result);
});
newsPostRouter.delete("/:id", async (req, res) => {
  const result = await newspostsService.deletePost(+req.params.id);
  return res
    .setHeader("content-type", "application/json")
    .status(200)
    .send(result);
});
