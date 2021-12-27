import React from "react";
import photo from "../../img/placeholder.png";
import css from "../../img/css-3.png";
import html from "../../img/html5.png";
import js from "../../img/js.png";
export default function Portfolio() {
  return (
    <div className="height d-flex flex-wrap">
      <div className="d-flex container topheight">
        <div className="" style={{ width: "20%" }}>
          <img className="img-fluid roundCorners" src={photo} />
          <h1 className="fancyText smallText text-center ">James Sgarella</h1>
          <div className=" d-flex justify-content-center">
            <img className="icons" src={css} />
            <img className="icons" src={html} />
            <img className="icons" src={js} />
          </div>
        </div>

        <div
          className="fancyText d-flex d-block justify-content-center marginBig roundCorners"
          style={{ width: "80%" }}
        >
          <div>
            <h1 className="text-center">About Me</h1>
            <p className="p-2">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
              purus in mollis nunc sed id. Maecenas pharetra convallis posuere
              morbi leo urna molestie. Vestibulum mattis ullamcorper velit sed
              ullamcorper morbi. Morbi tristique senectus et netus et malesuada
              fames ac turpis. Vitae purus faucibus ornare suspendisse sed nisi
              lacus sed. Auctor urna nunc id cursus metus. Neque ornare aenean
              euismod elementum. Sollicitudin tempor id eu nisl nunc mi ipsum
              faucibus. Tincidunt dui ut ornare lectus sit amet est placerat.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
