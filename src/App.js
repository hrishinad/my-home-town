import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="reasons">
        <h1>Why you should visit Mumbai..</h1>
      </div>
      <Main />
      <Footer />
    </div>
  );
}
