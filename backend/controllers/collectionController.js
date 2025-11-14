import Collection from "../models/collection.js";

export const getCollections = async (req, res) => {
  const col = await Collection.find();
  res.json(col);
};
