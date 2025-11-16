import express from "express";
import { getAllProducts, getTrendingProducts } from "../controllers/productController.js";

const router = express.Router();

// All products
router.get("/", getAllProducts);

// Only trending products
router.get("/trending", getTrendingProducts);

export default router;
