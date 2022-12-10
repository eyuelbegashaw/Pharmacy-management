//Modules
import express from "express";
import dotenv from "dotenv";

//Database
import connectDB from "./config/db.js";
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

//Routes
app.use("/api/category", categoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
