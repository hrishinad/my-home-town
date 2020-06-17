import React from "react";
import "./Main.css";
import { cardData } from "./data.js";
import Card from "./Card";

const Main = () => {
  return (
    <main className="main-container">
      {cardData.map(el => {
        return (
          <Card key={el.id} title={el.title} body={el.body} image={el.img} />
        );
      })}
    </main>
  );
};

export default Main;
