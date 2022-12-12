import express from "express";
const router = express.Router();

//Controllers
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUsers,
} from "../controllers/userController.js";

//Routes
router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;
