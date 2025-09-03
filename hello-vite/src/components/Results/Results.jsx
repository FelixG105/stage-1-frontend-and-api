import { useLocation } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

function Results({ results }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  return (
    <main className="results__page">
      <h2>Search results for "{query}"</h2>
      {results.length > 0 ? (
        <div className="results-cards">
          {results.map((article) => (
            <NewsCard key={article.uuid} article={article} />
          ))}
        </div>
      ) : (
        <p>No results found. Try searching again.</p>
      )}
    </main>
  );
}

export default Results;
