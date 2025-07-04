import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">SkillSpots</Link>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        {user && <Link to="/wishlist">Wishlist</Link>}
        {user && <Link to="/profile">Profile</Link>}
        {user ? (
          <button onClick={handleLogout} className="underline">Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
