import { User } from "../models/User.model.js";
import { hashPassword, comparePassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";

export const register = async (req, res) => {
  const { first_name, last_name, email, age, password } = req.body;
  const user = new User({ first_name, last_name, email, age, password: hashPassword(password) });
  await user.save();
  res.json({ message: "Usuario registrado" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !comparePassword(password, user.password)) {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }
  const token = generateToken(user);
  res.cookie("currentUser", token, { httpOnly: true }).json({ message: "Login exitoso" });
};

export const currentUser = async (req, res) => {
  res.json(req.user);
};
