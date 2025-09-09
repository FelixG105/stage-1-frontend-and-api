import { useLocation } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import "./ResultsList.css";

function ResultsList({ results }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  return (
    <section className="results__section">
      <h2 className="results__section-title">Search results for "{query}"</h2>
      {results.length > 0 ? (
        <div className="results__cards">
          {results.map((article) => (
            <NewsCard key={article.uuid} article={article} />
          ))}
        </div>
      ) : (
        <p>No results found. Try searching again.</p>
      )}
    </section>
  );
}

export default ResultsList;
