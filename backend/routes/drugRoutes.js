import express from "express";
const router = express.Router();

//Controllers
import {
  getDrugs,
  createDrug,
  updateDrug,
  deleteDrug,
  getDrug,
} from "../controllers/drugController.js";

//Routes
router.get("/", getDrugs);
router.post("/", createDrug);
router.get("/:id", getDrug);
router.delete("/:id", deleteDrug);
router.put("/:id", updateDrug);

export default router;
