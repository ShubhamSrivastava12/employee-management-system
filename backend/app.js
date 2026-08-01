import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.send("Employee Management System API is Running...");
});

export default app;