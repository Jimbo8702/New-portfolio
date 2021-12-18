import React from "react";
import photo from "../../img/placeholder.png";

export default function Top() {
  const titleOne = "<Front-End>";
  const titleTwo = "</Back-End>";

  return (
    <div className=" container  setPadding roundCorners d-flex topheight align-items-center flex-row justify-content-around">
      <div className=" d-flex  ">
        <div className="p-2 fancyText">
          <h1>{titleOne}</h1>
          <div className="lead d-flex justify-content-center">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
        </div>

        <div className="p-2 marginBig">
          <div className="d-flex align-items-center marginBig">
            <img className="img-fluid mx-auto " src={photo} alt="James" />
          </div>
        </div>
        <div className="p-2 fancyText">
          <h1>{titleTwo}</h1>
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
