import express from "express";
import mongoose from "mongoose";

const User = mongoose.model("User");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();

    res.send("Signup route working" + user);
  } catch (err) {
    res.status(422).send("Some error occured on SignupRoute:" + err.message);
  }
});

export { router as AuthRoutes };
