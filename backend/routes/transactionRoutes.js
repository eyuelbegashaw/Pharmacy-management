import express from "express";
const router = express.Router();

//Controllers
import {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getTransaction,
} from "../controllers/transactionController.js";

//Routes
router.get("/", getTransactions);
router.post("/", createTransaction);
router.get("/:id", getTransaction);
router.delete("/:id", deleteTransaction);
router.put("/:id", updateTransaction);

export default router;
