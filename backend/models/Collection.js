import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  image: String,
});

export default mongoose.model("Collection", collectionSchema);
