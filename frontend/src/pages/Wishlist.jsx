import React from "react";
import Header from "../components/Header";
import { useWishlist } from "./WishlistContext";
import { motion } from "framer-motion";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="min-h-screen flex flex-col bg-brand-mist">
      {/* Header */}
      <Header />

      <section className="py-16 px-6 md:px-20 flex-1">
        <h1 className="text-4xl font-serif font-bold text-center text-brand-navy mb-10">
          My Wishlist ❤️
        </h1>

        {wishlist.length === 0 ? (
          <p className="text-center text-lg text-brand-charcoal">
            Your wishlist is empty. Add products by clicking on the heart ❤️
          </p>
        ) : (
          <div>
            {/* Wishlist Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {wishlist.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-brand-gold text-lg mt-2 font-bold">
                      {item.price}
                    </p>

                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="mt-4 px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
                    >
                      Remove ❌
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-brand-ivory py-8 text-center">
        <p className="text-sm">© 2025 MyClothing. All rights reserved.</p>
      </footer>
    </div>
  );
}
