import React from "react";

export default function FilterPanel({ filters, setFilters }) {
  const categories = ["Music", "Tech", "Art", "Fitness", "Cooking"];
  const times = ["Today", "This Weekend", "Next Week"];
  const prices = ["Free", "Paid"];

  return (
    <div className="mb-4 p-4 border rounded">
      <div>
        <strong>Category:</strong>
        <div className="flex space-x-2 mt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setFilters({
                  ...filters,
                  category: filters.category === cat ? "" : cat,
                })
              }
              className={`px-3 py-1 rounded border ${
                filters.category === cat ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <strong>Time:</strong>
        <div className="flex space-x-2 mt-1">
          {times.map((time) => (
            <button
              key={time}
              onClick={() =>
                setFilters({
                  ...filters,
                  time: filters.time === time ? "" : time,
                })
              }
              className={`px-3 py-1 rounded border ${
                filters.time === time ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <strong>Price:</strong>
        <div className="flex space-x-2 mt-1">
          {prices.map((price) => (
            <button
              key={price}
              onClick={() =>
                setFilters({
                  ...filters,
                  price: filters.price === price ? "" : price,
                })
              }
              className={`px-3 py-1 rounded border ${
                filters.price === price ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              {price}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
