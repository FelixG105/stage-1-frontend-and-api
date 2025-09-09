import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header({
  onSignInClick,
  onSignOut,
  currentUser,
  className,
}) {
  const location = useLocation();
  const headerClass =
    location.pathname === "/" || location.pathname === "/results"
      ? "header--transparent"
      : "header--solid";

  return (
    <header className={`header ${headerClass}`}>
      <div className="header__left">
        <h1 className="header__logo">NewsExplorer</h1>
      </div>
      <nav className="header__right">
        <NavLink to="/" className="header__home-btn">
          Home
        </NavLink>

        {currentUser ? (
          <button className="header__signout-btn" onClick={onSignOut}>
            Sign Out
          </button>
        ) : (
          <button className="header__signin-btn" onClick={onSignInClick}>
            Sign In
          </button>
        )}
      </nav>
    </header>
  );
}
