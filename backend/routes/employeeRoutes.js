import express from "express";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employeeController.js";

const router = express.Router();

router.get("/", getEmployees);

router.post("/add", addEmployee);

router.put("/:id", updateEmployee);

router.delete("/:id", deleteEmployee);

export default router;