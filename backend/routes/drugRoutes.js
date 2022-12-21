import express from "express";
const router = express.Router();

import {protect, admin} from "../middlewares/authMiddleware.js";

//Controllers
import {
  getDrugs,
  createDrug,
  updateDrug,
  deleteDrug,
  getDrug,
} from "../controllers/drugController.js";

//Routes
router.get("/", protect, getDrugs);
router.post("/", protect, createDrug);
router.get("/:id", protect, getDrug);
router.delete("/:id", protect, deleteDrug);
router.put("/:id", protect, updateDrug);

export default router;
