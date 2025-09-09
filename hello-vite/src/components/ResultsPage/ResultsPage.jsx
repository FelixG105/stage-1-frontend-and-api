import SearchBar from "../SearchBar/SearchBar";
import About from "../About/About";
import ResultsList from "../ResultsList/ResultsList";

function ResultsPage({ onSearch, results }) {
  return (
    <main className="results__page">
      <SearchBar onSearch={onSearch} />
      <ResultsList results={results} />
      <About />
    </main>
  );
}

export default ResultsPage;
