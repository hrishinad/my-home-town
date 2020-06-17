import React from "react";
import "./Card.css";

const Card = ({ title, body, image }) => {
  return (
    <article className="card-container">
      <div className="clip" />
      <div className="card-showcase">
        <img src={image} alt="card-showcase" />
      </div>
      <h1 className="card-title">{title}</h1>
      <p className="card-body">{body}</p>
    </article>
  );
};

export default Card;
