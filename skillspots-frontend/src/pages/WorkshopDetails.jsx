import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../AuthContext";

export default function WorkshopDetails() {
  const { id } = useParams();
  const [workshop, setWorkshop] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  async function fetchWorkshop() {
    try {
      const res = await axios.get(`http://localhost:8000/workshops/${id}/`);
      setWorkshop(res.data);
    } catch (error) {
      alert("Failed to fetch workshop");
    }
    setLoading(false);
  }

  async function handleRegister() {
    if (!user) {
      alert("Please login to book a workshop");
      return;
    }
    try {
      await axios.post(`http://localhost:8000/bookings/${id}`);
      alert("Successfully registered!");
    } catch (error) {
      alert("Failed to register for workshop");
    }
  }

  useEffect(() => {
    fetchWorkshop();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!workshop) return <p>Workshop not found</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold">{workshop.title}</h2>
      <p className="italic text-gray-600">{workshop.category}</p>
      <img
        src={workshop.image || "https://via.placeholder.com/400x200"}
        alt={workshop.title}
        className="my-4 rounded"
      />
      <p>{workshop.description}</p>
      <p><strong>Date:</strong> {new Date(workshop.time).toLocaleString()}</p>
      <p><strong>Price:</strong> {workshop.price === 0 ? "Free" : `Rs. ${workshop.price}`}</p>
      <p><strong>Location:</strong> {workshop.location}</p>
      <button
        onClick={handleRegister}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Register
      </button>
    </div>
  );
}
