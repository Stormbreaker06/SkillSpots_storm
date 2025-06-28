import React from "react";
import { Link } from "react-router-dom";

export default function WorkshopCard({ workshop }) {
  return (
    <div className="border rounded shadow p-4">
      <h3 className="font-semibold text-lg">{workshop.title}</h3>
      <p className="text-sm text-gray-600">{workshop.category}</p>
      <p>Date: {new Date(workshop.time).toLocaleDateString()}</p>
      <p>Price: {workshop.price === 0 ? "Free" : `Rs. ${workshop.price}`}</p>
      <Link
        to={`/workshops/${workshop.id}`}
        className="mt-2 inline-block text-blue-600 underline"
      >
        View Details
      </Link>
    </div>
  );
}
