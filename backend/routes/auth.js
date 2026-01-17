import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json("User already exists");

  const hashed = await bcrypt.hash(password, 10);

  await User.create({ name, email, password: hashed });
  res.json("Signup successful");
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json("Wrong password");

  res.json("Login successful");
});

export default router;
