import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import BlurText from "../components/blurtext";
import ShinyText from "../components/ShinyText";
import ProductCard from "../components/ProductCard"; // <-- fallback
import CircularGallery from "../components/CircularGallery"; // <-- your gallery component

// Example product data (10+ items)
const trendingProducts = [
  { image: "https://picsum.photos/seed/1/400/300", text: "Silk Dress" },
  { image: "https://picsum.photos/seed/2/400/300", text: "Leather Jacket" },
  { image: "https://picsum.photos/seed/3/400/300", text: "Wedding Gown" },
  { image: "https://picsum.photos/seed/4/400/300", text: "Casual Shirt" },
  { image: "https://picsum.photos/seed/5/400/300", text: "Formal Pants" },
  { image: "https://picsum.photos/seed/6/400/300", text: "Evening Gown" },
  { image: "https://picsum.photos/seed/7/400/300", text: "Men's Suit" },
  { image: "https://picsum.photos/seed/8/400/300", text: "Jumpsuit" },
  { image: "https://picsum.photos/seed/9/400/300", text: "Blazer" },
  { image: "https://picsum.photos/seed/10/400/300", text: "Cocktail Dress" },
  { image: "https://picsum.photos/seed/11/400/300", text: "Summer Dress" },
];

const otherProducts = [
  { id: 4, title: "Casual Shirt", img: "https://picsum.photos/id/1018/400/400", price: 70 },
  { id: 5, title: "Formal Pants", img: "https://picsum.photos/id/1019/400/400", price: 90 },
  { id: 6, title: "Evening Gown", img: "https://picsum.photos/id/1020/400/400", price: 300 },
  { id: 7, title: "Men's Suit", img: "https://picsum.photos/id/1021/400/400", price: 400 },
];

export default function Home() {
  const navigate = useNavigate();

  const handleAnimationComplete = () => {
    console.log("BlurText animation finished!");
  };

  return (
    <div className="min-h-screen flex flex-col px-2">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-44 flex flex-col items-center text-center bg-gradient-to-b from-brand-mist to-white">
        <BlurText
          text="Discover Your Royal Style!"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl md:text-5xl font-serif font-bold text-brand-navy"
        />

        <ShinyText
          text="Curated collections crafted for elegance."
          disabled={false}
          speed={3}
          className="mt-4 text-lg"
        />

        <a
          href="#collections"
          className="inline-block mt-6 px-6 py-3 bg-brand-navy text-white font-semibold rounded-2xl border-2 border-brand-gold hover:bg-brand-gold hover:text-brand-navy transition"
        >
          Shop Now
        </a>
      </section>

      {/* Women & Men Collections */}
      <section id="collections" className="relative">
        <div className="relative flex w-full h-[60vh] md:h-[80vh] rounded-lg overflow-hidden shadow-lg">
          {/* Women */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-1/2 h-full relative cursor-pointer"
            onClick={() => navigate("/women")}
          >
            <img
              src="https://picsum.photos/id/1011/1200/800"
              className="w-full h-full object-cover"
              alt="Women Fashion"
            />

            <p
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl font-bold text-white drop-shadow-lg cursor-pointer hover:underline"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/women");
              }}
            >
              Explore Women’s Fashion
            </p>
          </motion.div>

          {/* Men */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-1/2 h-full relative cursor-pointer"
            onClick={() => navigate("/men")}
          >
            <img
              src="https://picsum.photos/id/1012/1200/800"
              className="w-full h-full object-cover"
              alt="Men Fashion"
            />

            <p
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl font-bold text-white drop-shadow-lg cursor-pointer hover:underline"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/men");
              }}
            >
              Explore Men’s Fashion
            </p>
          </motion.div>

          {/* Center Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg font-serif">
              Destination: Cozy
            </h2>
            <p className="mt-2 text-lg md:text-xl text-white drop-shadow-md">
              Your curated style experience awaits
            </p>
          </motion.div>
        </div>
      </section>

     <section id="trending" className="relative w-full h-[90vh] bg-gray-50 flex flex-col items-center justify-center px-4 md:px-16">
  {/* Section title */}
  <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-8 text-center">
    Trending Now
  </h2>

  {/* CircularGallery container */}
  <div className="w-full h-full rounded-2xl shadow-xl overflow-hidden">
    <CircularGallery
      items={trendingProducts}
      bend={2}             // big dramatic curve
      borderRadius={0.08}  // slightly rounded images
      scrollSpeed={3}      // faster scroll for effect
      font="bold 36px Figtree" // bigger titles on images
    />
  </div>

  {/* Optional caption below carousel */}
  <p className="mt-4 text-lg text-center text-brand-charcoal/80">
    Curated collections you’ll love, all in one place.
  </p>
</section>



      {/* Other Products */}
      <section id="other-products" className="py-16 bg-white px-2 md:px-16">
        <h2 className="text-3xl font-bold text-brand-navy mb-8">Other Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {otherProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl font-serif font-bold text-brand-navy">Stay in the Loop</h2>
        <p className="mt-2 text-brand-charcoal/80">
          Subscribe for updates, offers, and exclusive collections.
        </p>

        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg border border-gray-300 w-72 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
          <button className="px-6 py-2 rounded-r-lg bg-brand-gold text-brand-charcoal font-semibold hover:bg-brand-navy hover:text-white transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-brand-ivory py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>Women</li>
              <li>Men</li>
              <li>Wedding</li>
              <li>Discover</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>Contact Us</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>Our Story</li>
              <li>Careers</li>
              <li>Sustainability</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm mt-6">
          © 2025 MyClothing. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
