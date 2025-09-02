import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Results from "../Results/Results";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { signIn, signUp, validateToken, signOut } from "../../utils/auth";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const headerStyle =
    location.pathname === "/" ? "header--transparent" : "header--solid";

  // This determines if the search container should show
  const [searchResults, setSearchResults] = useState([]);

  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Modal controls
  const handleSignInClick = () => setActiveModal("login");
  const handleSignUpClick = () => setActiveModal("signup");
  const closeModal = () => setActiveModal("");

  // Auth
  const handleLogin = ({ email, password }) => {
    return signIn({ email, password })
      .then(({ token }) => {
        localStorage.setItem("jwt", token);
        return validateToken(token);
      })
      .then((user) => {
        setCurrentUser(user);
        closeModal();
      })
      .catch(console.error);
  };

  const handleSignup = ({ name, email, password }) => {
    return signUp({ name, email, password })
      .then(() => handleLogin({ email, password }))
      .catch(console.error);
  };

  const handleSignOut = () => {
    signOut().then(() => {
      setCurrentUser(null);
      localStorage.removeItem("jwt");
    });
  };

  // Restore user on reload
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      validateToken(token)
        .then((user) => setCurrentUser(user))
        .catch(() => localStorage.removeItem("jwt"));
    }
  }, []);

  // Search
  const handleSearch = (query) => {
    setSearchQuery(query);
    //  TODO: fetch news API with query
    setSearchResults([]);

    navigate(`/results?query=${encodeURIComponent(query)}`);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header
        onSignInClick={handleSignInClick}
        onSignUpClick={handleSignUpClick}
        onSignOut={handleSignOut}
        currentUser={currentUser}
        className={headerStyle}
      />

      <Routes>
        <Route
          path="/"
          element={<Main onSearch={handleSearch} results={searchResults} />}
        />
        <Route path="/results" element={<Results results={searchResults} />} />
      </Routes>

      {/* Modals */}
      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeModal}
        onLogin={handleLogin}
        onSwitchToSignup={handleSignUpClick}
      />
      <RegisterModal
        isOpen={activeModal === "signup"}
        onClose={closeModal}
        onSignup={handleSignup}
        onSwitchToLogin={handleSignInClick}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
