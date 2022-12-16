import express from "express";
const router = express.Router();

import {
  loginUser,
  registerUser,
  getProfile,
  getAllUsers,
  updateProfile,
  deleteUser,
  updateUser,
  forgotPassword,
  resetPassword,
  checkLink,
} from "../controllers/userController.js";

router.get("/", getAllUsers);
router.put("/profile", updateProfile);
router.put("/forgot-password", forgotPassword);
router.put("/reset-password", resetPassword);
router.get("/checkLink", checkLink);

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/profile", getProfile);

router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;
