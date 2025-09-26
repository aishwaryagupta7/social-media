// routes/user.routes.ts
import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";

const router = express.Router();

// Example protected route
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    msg: "Welcome to your profile!",
    user: req.user, // info from JWT
  });
});

export default router;
