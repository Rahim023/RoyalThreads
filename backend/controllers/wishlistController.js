import Wishlist from "../models/Wishlist.js";

export const getWishlist = async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.user._id });

  if (!wishlist) return res.json({ items: [] });

  res.json({ items: wishlist.items });
};

export const addToWishlist = async (req, res) => {
  const { id, title, price, img } = req.body;

  let wishlist = await Wishlist.findOne({ user: req.user._id });

  if (!wishlist) {
    wishlist = new Wishlist({ user: req.user._id, items: [] });
  }

  // Prevent duplicates
  const exists = wishlist.items.find((item) => item.id === id);
  if (!exists) {
    wishlist.items.push({ id, title, price, img });
  }

  await wishlist.save();
  res.json({ items: wishlist.items });
};

export const removeWishlistItem = async (req, res) => {
  let wishlist = await Wishlist.findOne({ user: req.user._id });

  if (!wishlist) return res.json({ items: [] });

  wishlist.items = wishlist.items.filter(
    (item) => item.id !== req.params.id
  );

  await wishlist.save();
  res.json({ items: wishlist.items });
};
