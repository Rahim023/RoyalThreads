// controllers/productController.js
import Product from "../models/Products.js";

// GET all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    // Map to a consistent format
    const mapped = products.map(p => ({
      id: p._id,
      title: p.title || p.name,
      img: p.img || p.image,
      price: p.price,
      category: p.category,
      description: p.description || "",
      rating: p.rating || 0,
      brand: p.brand || "",
      stock: p.stock || 0,
      trending: p.trending || false,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
    }));

    res.json(mapped);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET trending products
export const getTrendingProducts = async (req, res) => {
  try {
    let products = await Product.find({ trending: true });

    // Fallback if no trending products
    if (products.length === 0) {
      products = await Product.find().limit(8);
    }

    const mapped = products.map(p => ({
      id: p._id,
      title: p.title || p.name,
      img: p.img || p.image,
      price: p.price,
      category: p.category,
      description: p.description || "",
      rating: p.rating || 0,
      brand: p.brand || "",
      stock: p.stock || 0,
      trending: p.trending || false,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
    }));

    res.json(mapped);
  } catch (err) {
    console.error("Error fetching trending products:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const mapped = {
      id: product._id,
      title: product.title || product.name,
      img: product.img || product.image,
      price: product.price,
      category: product.category,
      description: product.description || "",
      rating: product.rating || 0,
      brand: product.brand || "",
      stock: product.stock || 0,
      trending: product.trending || false,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };

    res.json(mapped);
  } catch (err) {
    console.error("Error fetching product by ID:", err);
    res.status(500).json({ message: "Server error" });
  }
};
