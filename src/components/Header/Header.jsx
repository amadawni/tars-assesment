import React from "react";
import "./Header.scss";

export default function Header({ onSubmit }) {
  return (
    <div className="header">
      <h3>Download High Quality Images by creators</h3>
      <p>Over 2.4 million+ stock Images by our talented community</p>
      <form onSubmit={onSubmit} className="search-bar">
        <button type="submit" className="search-icon">
          <img src="/images/search.svg" alt="search" />
        </button>
        <input
          type="text"
          name="query"
          placeholder="Search high resolution Images, categories, wallpapers"
          className="search-input"
          required
        />
      </form>
    </div>
  );
}
