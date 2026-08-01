import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/employees", employeeRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Employee Management System API is Running...");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Error:", err.message);
  });