import Product from "../models/Product.js";

export const getFeaturedProducts = async (req, res) => {
  const products = await Product.find({ featured: true }).limit(8);
  res.json(products);
};

export const getProductsByCategory = async (req, res) => {
  const { slug } = req.params;
  const products = await Product.find({ category: slug });
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};
