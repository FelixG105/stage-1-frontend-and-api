import { Routes, Route, NavLink } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <nav className="nav">
          <NavLink to="/" className="logo">
            News Explorer
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/saved-news"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Saved News
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
