import React from "react";
import { ButtonComponents } from "./ButtonComponents";
import "./Hero.css";
import "../App.css";

function HeroComponents() {
  return (
    <div className="hero-container">
      <video src="/videos/oke.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <ButtonComponents
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </ButtonComponents>
        <ButtonComponents
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </ButtonComponents>
      </div>
    </div>
  );
}

export default HeroComponents;
