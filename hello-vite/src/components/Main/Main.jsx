import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import About from "../About/About";

function Main({ onSearch }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    onSearch(query); // trigger API fetch in App
    navigate(`/results?query=${encodeURIComponent(query)}`); // redirect
  };

  return (
    <main className="main">
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSubmit={handleSubmit}
      />

      <About />
    </main>
  );
}

export default Main;
