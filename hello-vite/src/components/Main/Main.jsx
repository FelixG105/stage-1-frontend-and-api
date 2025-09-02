import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import About from "../About/About";

function Main() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Navigate to results page with query
      navigate(`/results?query=${encodeURIComponent(query)}`);
    }
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
