import "./NewsCard.css";

function NewsCard({ article }) {
  return (
    <div className="news__card">
      <img src={article.image_url} alt={article.title} />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
}

export default NewsCard;
