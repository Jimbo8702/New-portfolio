import React from "react";
import photo from "../../img/placeholder.png";
import css from "../../img/css-3.png";
import html from "../../img/html5.png";
import js from "../../img/js.png";
export default function Portfolio() {
  return (
    <div className="height d-flex container">
      <div className="d-flex container topheight">
        <div className="" style={{ width: "20%" }}>
          <img className="img-fluid roundCorners" src={photo} />
          <h1 className="fancyText smallText text-center ">James Sgarella</h1>
          <div className=" d-flex justify-content-center container">
            <img className="icons" src={css} />
            <img className="icons" src={html} />
            <img className="icons" src={js} />
          </div>
        </div>

        <div
          className="fancyText d-flex d-block justify-content-center marginBig roundCorners"
          style={{ width: "80%" }}
        >
          <div className="container">
            <h1 className="text-center">About Me</h1>
            <p className="p-2">
              {" "}
              My name is James Sgarella. I am an entry level Web Developer with
              Full stack expierence. 19 and still new to the game, I enrolled in
              the Columbia Enginnering Coding BootCamp in Octuber 2021. With a
              long list of working projects to futher improve my skills, my time
              in the development world has just begun, with a lot ahead.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
