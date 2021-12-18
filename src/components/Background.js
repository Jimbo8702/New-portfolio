import React from "react";
import Top from "./pagecomponets/TopHome";
import Bottom from "./pagecomponets/bottomHome";
import "../animate.css";
export default function Background() {
  return (
    <div className="height starbody d-flex flex-wrap container  ">
      <div className="zindex d-flex flex-column ">
        <Top />
        <Bottom />
      </div>
      <div className="night container ">
        <div className="d-flex ">
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
    </div>
  );
}
