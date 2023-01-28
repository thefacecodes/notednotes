import React from "react";

function Hero() {
  return (
    <div className="hero">
        <div className="hero-text">
            <h1>Enjoy note taking with your friends</h1>
      <p>
        Put down your thoughts down in one app, share with your friends and
        loved ones.
      </p>
      <div className="flex gap-6">
        <img src="playstore.png" alt="" />
        <img src="appstore.png" alt="" />
      </div>
        </div>
      
      <div className="hero-image">
        <img src="note-app.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
