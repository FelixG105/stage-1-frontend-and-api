import "./NewsCard.css";

export default function NewsCard() {
  return (
    <section className="results__section">
      <h2>Search results</h2>
      <div className="card__list">
        <div className="card">
          <img
            className="card__image"
            src="https://placehold.co/400x272"
            alt="Result 1"
          />
          <h3 className="card__title">
            Everyone Needs a Special Sit Spot in Nature
          </h3>
          <p className="card__caption">
            Ever since I read Richard Louv’s book Last Child in the Woods...
          </p>
          <span className="card__tag">Yosemite</span>
        </div>
        <div className="card">
          <img
            className="card__image"
            src="https://placehold.co/400x272"
            alt="Result 2"
          />
          <h3 className="card__title">Nature makes you better</h3>
          <p className="card__caption">
            We often spend our free time in nature parks, along the
            riverbanks...
          </p>
          <span className="card__tag">National Park</span>
        </div>
        <div className="card">
          <img
            className="card__image"
            src="https://placehold.co/400x272"
            alt="Result 3"
          />
          <h3 className="card__title">
            Grand Teton Reserves Historic Crest Trail
          </h3>
          <p className="card__caption">
            Visitors can now walk along the same trails as explorers once did...
          </p>
          <span className="card__tag">Grand Teton</span>
        </div>
      </div>
      <button className="show-more">Show more</button>
    </section>
  );
}
