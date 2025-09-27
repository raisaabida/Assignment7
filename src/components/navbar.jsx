import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">CS — Ticket System</a>
      </div>
      <div className="flex-none gap-4">
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
          <button className="btn btn-primary">+ New Ticket</button>
        </ul>
        
      </div>
    </div>
  );
}
