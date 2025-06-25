
import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";

export default function Navbar() {
  const watchLater = JSON.parse(sessionStorage.getItem("watchLater")) || [];

  return (
    <nav className="flex justify-between items-center p-4 bg-red-600 text-white">
      <Link to="/" className="text-xl font-bold">Mini YouTube</Link>
      <input type="text" placeholder="Search" className="p-1 rounded" />
      <div className="flex items-center gap-4">
        <Link to="/watch-later">
          Watch Later ({watchLater.length})
        </Link>
        <Timer />
      </div>
    </nav>
  );
}
