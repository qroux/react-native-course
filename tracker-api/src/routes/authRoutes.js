import express from "express";
import mongoose from "mongoose";

const User = mongoose.model("User");
const router = express.Router();

router.post("/signup", (req, res) => {
  const newUser = new User({ email: "text@test.com", password: "azerty123" });

  res.send("Signup route working" + newUser);
});

export { router as AuthRoutes };
