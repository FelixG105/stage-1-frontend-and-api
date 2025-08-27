import "./Main.css";

export default function Main() {
  return (
    <main>
      {/* Search Section */}
      <section className="search__section">
        <div className="search__content">
          <h1 className="search__title">What's going on in the world?</h1>
          <p className="search__caption">
            Find the latest news on any topic and save articles in your personal
            account.
          </p>
          <div className="search__bar">
            <input
              className="search__text-input"
              type="text"
              placeholder="Enter topic"
            />
            <button className="search__btn">Search</button>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="author__section">
        <div className="author__photo">Photo</div>
        <div className="author">
          <h2 className="author__title">About the author</h2>
          <p className="author__description">Description for author section</p>
        </div>
      </section>
    </main>
  );
}
