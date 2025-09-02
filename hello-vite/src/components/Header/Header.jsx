import React from "react";
import "./Header.css";

export default function Header({
  onSignInClick,
  onSignUpClick,
  onSignOut,
  currentUser,
  className,
}) {
  return (
    <header className={`header ${className}`}>
      <div className="header__left">
        <h1 className="header__logo">NewsExplorer</h1>
      </div>
      <nav className="header-right">
        {/* {currentUser ? (
          <button onClick={onSignOut}>Sign Out</button>
        ) : (
          <>
            <button onClick={onSignInClick}>Sign In</button>
            <button onClick={onSignUpClick}>Sign Up</button>
          </> */}
        {/* )} */}
        <button>Home</button>
        <button>Nav</button>
      </nav>
    </header>
  );
}
