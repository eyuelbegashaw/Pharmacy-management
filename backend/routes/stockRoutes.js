import express from "express";
const router = express.Router();

import {protect, admin} from "../middlewares/authMiddleware.js";

//Controllers
import {
  getStocks,
  createStock,
  updateStock,
  deleteStock,
  getStock,
} from "../controllers/stockController.js";

//Routes
router.get("/", protect, getStocks);
router.post("/", protect, admin, createStock);
router.get("/:id", protect, admin, getStock);
router.delete("/:id", protect, admin, deleteStock);
router.put("/:id", protect, admin, updateStock);

export default router;
