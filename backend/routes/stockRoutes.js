import express from "express";
const router = express.Router();

//Controllers
import {
  getStocks,
  createStock,
  updateStock,
  deleteStock,
  getStock,
} from "../controllers/stockController.js";

//Routes
router.get("/", getStocks);
router.post("/", createStock);
router.get("/:id", getStock);
router.delete("/:id", deleteStock);
router.put("/:id", updateStock);

export default router;
