import React from "react";

export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="card bg-gradient-to-tr from-purple-500 to-indigo-500 text-white shadow-lg">
        <div className="card-body items-center text-center">
          <h2 className="card-title">In-Progress</h2>
          <p className="text-3xl font-bold">{inProgressCount}</p>
        </div>
      </div>

      <div className="card bg-gradient-to-tr from-green-500 to-emerald-600 text-white shadow-lg">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Resolved</h2>
          <p className="text-3xl font-bold">{resolvedCount}</p>
        </div>
      </div>
    </div>
  );
}
