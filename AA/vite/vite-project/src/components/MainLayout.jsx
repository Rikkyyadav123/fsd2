// MainLayout.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="main-layout">
      <header className="header">
        <h1>Main Layout</h1>
      </header>
      <nav className="nav-bar">
        <Link to="login" className="nav-link">
          Login
        </Link>
        <Link to="registration" className="nav-link">
          Registration
        </Link>
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
