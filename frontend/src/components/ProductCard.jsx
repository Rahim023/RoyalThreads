import { useWishlist } from "../pages/WishlistContext";
import { useState } from "react";
import React from "react";

export default function ProductCard({ product }) {
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

  const isWishlisted = wishlist.some((p) => p.id === product.id);
  const [heart, setHeart] = useState(isWishlisted);

  const toggleWishlist = (e) => {
    e.stopPropagation();

    if (heart) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }

    setHeart(!heart);
  };

  return (
    <div className="relative bg-white shadow rounded-xl p-3 cursor-pointer">
      <img
        src={product.img}
        className="w-full h-60 object-cover rounded-lg"
        alt={product.title}
      />

      {/* Heart Icon */}
      <button
        className="absolute top-3 right-3 text-3xl transition"
        onClick={toggleWishlist}
      >
        {heart ? "💖" : "🤍"}
      </button>

      <div className="mt-3">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="text-gray-600">{product.price}</p>
      </div>
    </div>
  );
}
