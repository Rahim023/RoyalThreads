// src/pages/WishlistContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const BASE_URL = "http://localhost:5000/api";

  // Always attach token to axios
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Interceptor attaches token every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

  // Fetch wishlist
  useEffect(() => {
    if (!token) {
      setWishlist([]);
      setLoading(false);
      return;
    }

    const fetchWishlist = async () => {
      try {
        const res = await axiosInstance.get("/wishlist");
        setWishlist(res.data.items);
      } catch (err) {
        console.error("Error fetching wishlist:", err.response?.data);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, [token]);

  // ADD TO WISHLIST
  const addToWishlist = async (product) => {
    if (!token) return alert("Login required");

    try {
      const payload = {
        id: product._id || product.id,
        title: product.title,
        price: product.price,
        img: product.img,
      };

      const res = await axiosInstance.post("/wishlist/add", payload);

      setWishlist(res.data.items);
    } catch (err) {
      console.error("Add to wishlist failed:", err.response?.data || err);
    }
  };

  // REMOVE FROM WISHLIST
  const removeFromWishlist = async (productId) => {
    if (!token) return alert("Login required");

    try {
      const res = await axiosInstance.delete(`/wishlist/${productId}`);
      setWishlist(res.data.items);
    } catch (err) {
      console.error("Remove wishlist failed:", err.response?.data);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, loading, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
