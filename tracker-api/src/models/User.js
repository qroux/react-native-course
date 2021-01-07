import mongoose from "mongoose";

// CREATE the Schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// ASSOCIATE the schema with mongoose.model
mongoose.model("User", userSchema);

// NB, no export needed, only used Once
