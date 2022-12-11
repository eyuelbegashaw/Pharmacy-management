import express from "express";
const router = express.Router();

//Controllers
import {
  getSuppliers,
  createSupplier,
  updateSupplier,
  deleteSupplier,
  getSupplier,
} from "../controllers/supplierController.js";

//Routes
router.get("/", getSuppliers);
router.post("/", createSupplier);
router.get("/:id", getSupplier);
router.delete("/:id", deleteSupplier);
router.put("/:id", updateSupplier);

export default router;
