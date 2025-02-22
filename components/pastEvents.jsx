import React, { useEffect } from "react";

const PastEvents = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const style = document.createElement("style");
      style.textContent = `
        @keyframes slideLoop {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .past-events-wrapper {
          position: relative;
          width: 1908px;
          height: 1015px;
          overflow: hidden;
          background-image: url('/pastevents/background.svg');
          background-repeat: no-repeat;
          background-size: contain;
          transform: scale(0.81);
          transform-origin: top left;
        }
        .group {
          position: absolute;
          width: 272px;
          height: 49px;
          left: 1514px;
          top: 205px;
          z-index: 2;
        }
        .past-events {
          position: absolute;
          width: 674px;
          height: 207px;
          left: 130px;
          top: 87px;
          z-index: 2;
        }
        .slider-container {
          position: absolute;
          width: 100%;
          height: 620px;
          top: 250px;
          overflow: hidden;
        }
        .slider-track {
          display: flex;
          width: 200%;
          height: 100%;
          animation: slideLoop 15s linear infinite;
        }
        .slider-track:hover {
          animation-play-state: paused;
        }
        .slide {
          display: flex;
          width: 50%;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 0 10px;
        }
        .logo {
          position: absolute;
          width: 103px;
          height: 50.76px;
          left: 79px;
          top: 876px;
          z-index: 2;
        }
      `;
      document.head.appendChild(style);
      return () => document.head.removeChild(style);
    }
  }, []);

  return (
    <div className="past-events-wrapper">
      <img
        src="/pastevents/Group 9885.svg"
        alt="passt events logo"
        className="group"
      />
      <img
        src="/pastevents/PAST EVENTS.svg"
        alt="our past events logo"
        className="past-events"
      />

      <div className="slider-container">
        <div className="slider-track">
          <div className="slide">
            <img
              src="/pastevents/Frame 9871.svg"
              alt="Frame 9871"
              style={{ width: "920px", height: "620px" }}
            />
            <img
              src="/pastevents/image 10 (5).svg"
              alt="skin maker"
              style={{ width: "967px", height: "555px" }}
            />
          </div>
          <div className="slide">
            <img
              src="/pastevents/Frame 9871.svg"
              alt="cad 2.0"
              style={{ width: "920px", height: "620px" }}
            />
            <img
              src="/pastevents/image 10 (5).svg"
              alt="skin maker"
              style={{ width: "967px", height: "555px" }}
            />
          </div>
        </div>
      </div>

      <img src="/pastevents/logo.svg" alt="Logo 10x" className="logo" />
    </div>
  );
};

export default PastEvents;