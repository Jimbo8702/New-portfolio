import React from "react";
import Top from "./pagecomponets/TopHome";
import Bottom from "./pagecomponets/bottomHome";
import "../animate.css";
export default function Background() {
  return (
    <div className="height starbody   d-flex flex-wrap">
      <div className="zindex ">
        <Top />
        <Bottom />
      </div>
      <div className="night container ">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
    </div>
  );
}
