import React from "react";
import self1 from "../../img/self1.JPG";

export default function Top() {
  const titleOne = "<Front-End>";
  const titleTwo = "</Back-End>";

  return (
    <div className="d-flex heighthome container align-items-center justify-content-center">
      <div className="d-flex  justify-content-around flexColumn">
        <div className=" d-flex  flex-column fancyText ">
          <h1 className="textToCenter">{titleOne}</h1>
          <div className="lead d-flex justify-content-center">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
        </div>

        <div className=" marginBig fancyText">
          <div className="d-flex align-items-center  flex-column photo">
            <img
              className="img-fluid mx-auto roundCorners"
              src={self1}
              alt="James"
            />
            <h1 lassName="mt-5 ">James Sgarella</h1>
          </div>
        </div>
        <div className=" d-flex   flex-column fancyText">
          <h1 className="textToCenter">{titleTwo}</h1>
          <div className="lead d-flex justify-content-center">
            <ul>
              <li>Node</li>
              <li>MongoDb</li>
              <li>MySql</li>
              <li>Express</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
