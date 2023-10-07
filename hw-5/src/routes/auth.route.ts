import { Router } from "express";
const authRouter = new Router();

authRouter.post("/register", (req, res) => {
  const { email, password, confirmPassword } = req.body;
  if (email && password && confirmPassword) {
    if (password === confirmPassword) {
      res.json("created");
    }
  } else {
    res.json({ msg: "give all data" });
  }
});

export default authRouter;
