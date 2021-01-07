import * as User from "./models/User.js";

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import { AuthRoutes } from "./routes/authRoutes.js";

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());
// routes
app.use(AuthRoutes);

const mongoUri =
  "mongodb+srv://admin:passwordpassword@cluster0.k9ofs.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongodb instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB :", err);
});

// routes
app.get("/", (req, res) => {
  res.status("400").send("Index Working");
});

app.listen(port, () => console.log(`listenning on port ${port}`));
