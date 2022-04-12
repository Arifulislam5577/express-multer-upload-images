import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import articleRouter from "./routes/articleRoute.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Database connected");
});

app.use("/api/v1/article", articleRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
