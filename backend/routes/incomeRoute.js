import express from "express";
const router = express.Router();
import { addIncome, getIncome, deleteIncome } from "../controllers/income.js";

router.post("/add-income", addIncome).get("/get-income", getIncome).delete("/delete-income/:id", deleteIncome);

export default router;