import "./NewsCard.css";

function NewsCard({ article }) {
  return (
    <div className="news__card">
      <img
        className="news__card-img"
        src={article.image_url}
        alt={article.title}
      />
      <h3 className="news__card-title">{article.title}</h3>
      <p className="news__card-description">{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
}

export default NewsCard;
