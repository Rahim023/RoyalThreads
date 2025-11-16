import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  title: { type: String },
  name: { type: String },        // fallback
  description: { type: String }, // add description
  brand: { type: String },       // optional
  category: { type: String, required: true },
  img: { type: String },
  image: { type: String },       // fallback
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  rating: { type: Number, default: 0 }, // add rating
  trending: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.model("Product", productSchema);