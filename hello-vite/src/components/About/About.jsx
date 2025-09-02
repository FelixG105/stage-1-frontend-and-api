import React from "react";
import "./About.css";

function About() {
  return (
    <section className="author__section">
      <div className="author__photo">Photo</div>
      <div className="author">
        <h2 className="author__title">About the author</h2>
        <p className="author__description">Description for author section</p>
      </div>
    </section>
  );
}

export default About;
