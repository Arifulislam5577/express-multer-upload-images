import express from "express";
import { addArticle } from "../controllers/articleControllers.js";
import { uploadImage } from "../middleware/uploadMiddleware.js";
const router = express.Router();

router.route("/").post(uploadImage, addArticle);

export default router;
