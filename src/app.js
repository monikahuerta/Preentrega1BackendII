import express from "express";
import cookieParser from "cookie-parser";
import passport from "passport";
import sessionRoutes from "./routes/session.routes.js";
import { connectDB } from "./config/db.config.js";
import passportConfig from "./config/passport.config.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
connectDB();

app.use("/api/sessions", sessionRoutes);

export default app;
