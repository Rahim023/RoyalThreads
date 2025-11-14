import Product from "../models/Product.js";

// 📌 GET all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// 📌 GET single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// 📌 GET products by category
export const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Product.find({ category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// 📌 GET featured products for Homepage
export const getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find().limit(8);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
