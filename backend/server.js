//Modules
import express from "express";
import dotenv from "dotenv";

//Database
import connectDB from "./config/db.js";

//Routes
import categoryRoutes from "./routes/categoryRoutes.js";
import drugRoutes from "./routes/drugRoutes.js";
import stockRoutes from "./routes/stockRoutes.js";
import supplierRoutes from "./routes/supplierRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import userRoutes from "./routes/userRoutes.js";

//middlewares
import {NotFound, ErrorMiddleware} from "./middlewares/errorMiddleware.js";

//Configs
dotenv.config();
connectDB();
const app = express();
app.use(express.json());

//Routes
app.use("/api/category", categoryRoutes);
app.use("/api/drug", drugRoutes);
app.use("/api/stock", stockRoutes);
app.use("/api/supplier", supplierRoutes);
app.use("/api/transaction", transactionRoutes);
app.use("/api/user", userRoutes);

app.use(NotFound);
app.use(ErrorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
