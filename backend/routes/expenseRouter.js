import express from "express";
const router = express.Router();

import { addExpense, getExpense, deleteExpense } from "../controllers/expense.js";

router.post("/add-expense", addExpense).get("/get-expense", getExpense).delete("/delete-expense/:id", deleteExpense);

export default router;