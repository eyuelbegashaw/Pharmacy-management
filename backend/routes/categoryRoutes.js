import express from "express";
const router = express.Router();

//Controllers
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

router.get("/", getCategories);
router.post("/", createCategory);
router.delete("/:id", deleteCategory);
router.put("/:id", updateCategory);

export default router;
