import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../entity/user.entity";
import { AppDataSource } from "../../data-source";

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    return res.status(400).json({ msg: "Please provide all required fields." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ msg: "Passwords do not match." });
  }

  try {
    const existingUser = await AppDataSource.getRepository(User).findOne(email);
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = AppDataSource.getRepository(User).create({
      email,
      password: hashedPassword,
    });
    await AppDataSource.getRepository(User).save(newUser);

    const token = jwt.sign({ userId: newUser.id }, "your-secret-key-here", {
      expiresIn: "1h",
    });

    return res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error." });
  }
});

// Login endpoint
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ msg: "Please provide all required fields." });
  }

  try {
    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User does not exist." });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ msg: "Invalid credentials." });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, "your-secret-key-here", {
      expiresIn: "1h",
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error." });
  }
});

export default authRouter;
