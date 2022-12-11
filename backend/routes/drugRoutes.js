import express from "express";
const router = express.Router();

//Controllers
import {
  getDrugs,
  createDrugs,
  updateDrugs,
  deleteDrugs,
  getDrug,
} from "../controllers/drugController.js";

//Routes
router.get("/", getDrugs);
router.post("/", createDrugs);
router.get("/:id", getDrug);
router.delete("/:id", deleteDrugs);
router.put("/:id", updateDrugs);

export default router;
