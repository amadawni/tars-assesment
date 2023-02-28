import React from "react";
import "./Navbar.scss";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

export default function Navbar({ onSubmit }) {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>

      <form onSubmit={onSubmit} className="search-bar">
        <button type="submit" className="search-icon">
          <img src="/images/search.svg" alt="search" />
        </button>
        <input
          type="text"
          name="query"
          placeholder="Search for images here"
          className="search-input"
          required
        />
      </form>
      <span>Explore</span>
      <span>Collection</span>
      <span>Community</span>
      <div className="dark-mode">
        <p>Dark Mode</p>
        <Switch color="default" />
      </div>
    </div>
  );
}
