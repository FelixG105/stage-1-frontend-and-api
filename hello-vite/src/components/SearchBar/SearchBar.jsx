import React from "react";
import "./SearchBar.css";
import searchBackground from "../../assets/images/search-background.jpg";

function SearchBar({ onSearch, value, onChange }) {
  return (
    <div
      className="search__section"
      style={{ backgroundImage: `url(${searchBackground})` }}
    >
      <h1 className="search__title">What's going on in the world?</h1>
      <p className="search__caption">
        Find the latest news on any topic and save articles in your personal
        account.
      </p>
      <div className="search__bar">
        <input
          className="search__text-input"
          type="text"
          placeholder="Search news..."
          value={value}
          onChange={onChange}
        />
        <button className="search__btn" type="submit" onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
