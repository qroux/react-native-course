import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

import requireAuth from "../middlewares/requireAuth.js";

const User = mongoose.model("User");
const router = express.Router();

router.post("/signup", requireAuth, async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");

    res.send({ token });
  } catch (err) {
    res.status(422).send("Some error occured on SignupRoute:" + err.message);
  }
});

export { router as AuthRoutes };
