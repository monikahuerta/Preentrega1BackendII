import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: { type: String, unique: true },
  age: Number,
  password: String, // Hasheado con bcrypt
  cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
  role: { type: String, default: "user" },
});

export const User = mongoose.model("User", userSchema);
