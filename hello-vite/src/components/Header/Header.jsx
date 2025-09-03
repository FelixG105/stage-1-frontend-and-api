import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header({
  onSignInClick,
  onSignUpClick,
  onSignOut,
  currentUser,
  className,
}) {
  const navigate = useNavigate();
  return (
    <header className={`header ${className}`}>
      <div className="header__left">
        <h1 className="header__logo">NewsExplorer</h1>
      </div>
      <nav className="header-right">
        {/* ✅ Home always visible */}
        <button onClick={() => navigate("/")}>Home</button>

        {currentUser ? (
          // Logged in
          <button onClick={onSignOut}>Sign Out</button>
        ) : (
          // Logged out
          <>
            <button onClick={onSignInClick}>Sign In</button>
          </>
        )}
      </nav>
    </header>
  );
}
