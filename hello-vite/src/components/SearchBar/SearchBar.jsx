import React from "react";
import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ setResults }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    setError(""); // clear error when typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError("Please enter a keyword");
      return;
    }

    try {
      const today = new Date().toISOString().split("T")[0];
      const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0];

      const url = `${BASE_URL}?q=${query}&apiKey=${NEWS_API_KEY}&from=${lastWeek}&to=${today}&pageSize=100`;

      const response = await fetch(url);
      const data = await response.json();

      setResults(data.articles || []); // send results up to parent
    } catch (err) {
      console.error("Error fetching articles:", err);
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <div>
      <SearchBar
        value={query}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {error && <p className="search__error">{error}</p>}
    </div>
  );
}

export default SearchBar;
