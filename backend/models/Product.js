import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },  // example: "women", "accessories"
    description: { type: String },                // optional
    isFeatured: { type: Boolean, default: false }, // for homepage
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
