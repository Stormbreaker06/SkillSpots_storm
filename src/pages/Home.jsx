import React, { useEffect, useState } from "react";
import axios from "axios";

import WorkshopCard from "../components/WorkshopCard";
import FilterPanel from "../components/FilterPanel";

export default function Home() {
  const [workshops, setWorkshops] = useState([]);
  const [filters, setFilters] = useState({ category: "", time: "", price: "" });
  const [loading, setLoading] = useState(false);

  async function fetchWorkshops() {
    setLoading(true);
    try {
      let query = [];
      if (filters.category) query.push(`category=${filters.category}`);
      if (filters.price) query.push(`price=${filters.price === "Free" ? 0 : "gt0"}`);
      // Time filtering logic is simplified here, adjust in backend accordingly
      if (filters.time) query.push(`date=${filters.time}`);

      const queryString = query.length > 0 ? `?${query.join("&")}` : "";
      const res = await axios.get(`http://localhost:8000/workshops${queryString}`);
      setWorkshops(res.data);
    } catch (error) {
      alert("Failed to fetch workshops");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchWorkshops();
  }, [filters]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Discover Local Workshops</h1>
      <FilterPanel filters={filters} setFilters={setFilters} />
      {loading ? (
        <p>Loading workshops...</p>
      ) : workshops.length === 0 ? (
        <p>No workshops found matching your criteria.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {workshops.map((w) => (
            <WorkshopCard key={w.id} workshop={w} />
          ))}
        </div>
      )}
    </div>
  );
}
