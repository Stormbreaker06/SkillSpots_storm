import React, { useEffect, useState } from "react";
import axios from "axios";
import WorkshopCard from "../components/WorkshopCard";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchWishlist() {
    try {
      const res = await axios.get("http://localhost:8000/wishlist");
      setWishlist(res.data);
    } catch (error) {
      alert("Failed to load wishlist");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Wishlist</h1>
      {loading ? (
        <p>Loading wishlist...</p>
      ) : wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {wishlist.map((w) => (
            <WorkshopCard key={w.id} workshop={w} />
          ))}
        </div>
      )}
    </div>
  );
}
