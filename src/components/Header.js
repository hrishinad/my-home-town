import React from "react";
import "./Header.css";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";
import bg5 from "../assets/bg5.jpg";

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <div className="clip" />
        <div className="image-wrapper">
          <div className="image-container">
            <img src={bg1} alt="mumbai-1" />
          </div>
          <div className="image-container">
            <img src={bg2} alt="mumbai-2" />
          </div>
          <div className="image-container">
            <img src={bg3} alt="mumbai-3" />
          </div>
          <div className="image-container">
            <img src={bg4} alt="mumbai-4" />
          </div>
          <div className="image-container">
            <img src={bg5} alt="mumbai-5" />
          </div>
        </div>
        <div className="text-wrapper">
          <h1>Mumbai</h1>
          <h2>The City of Dreams</h2>
        </div>
      </header>
    );
  }
}

export default Header;
