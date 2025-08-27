import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import NewsCard from "../NewsCard/NewsCard";
import searchBackground from "../../assets/images/search-background.jpg";

function App() {
  return (
    <>
      {/* Header + Search background */}
      <div
        className="header-search-background"
        style={{ backgroundImage: `url(${searchBackground})` }}
      >
        <header className="header">
          <div className="logo">NewsExplorer</div>
          <nav className="nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              News
            </NavLink>
            <button className="sign-in-btn">Sign in</button>
          </nav>
        </header>

        {/* Search Section + About Author */}
        <Main />
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/news" element={<NewsCard />} />
      </Routes>
    </>
  );
}

export default App;
