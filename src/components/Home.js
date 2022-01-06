import React from "react";
import Top from "./pages/TopHome";
import "../animate.css";
export default function Home() {
  return (
    <div className="height starbody d-flex flex-wrap  ">
      <div className="zindex flex-column widthplus container">
        <Top />
      </div>
      <div className="night overflowHidden ">
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
