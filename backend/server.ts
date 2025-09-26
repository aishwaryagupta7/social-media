import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Connect DB
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on http://localhost:5000"));
  })
  .catch(err => console.error(err));
