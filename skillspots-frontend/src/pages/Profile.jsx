import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchBookings() {
    try {
      const res = await axios.get("http://localhost:8000/bookings/me");
      setBookings(res.data);
    } catch (error) {
      alert("Failed to load bookings");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Bookings</h1>
      {loading ? (
        <p>Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p>You have not booked any workshops yet.</p>
      ) : (
        <ul>
          {bookings.map((b) => (
            <li key={b.id} className="border p-2 rounded mb-2">
              <strong>{b.workshop.title}</strong> — {new Date(b.booking_time).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
