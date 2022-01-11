import React from "react";
import self2 from "../../img/self2.JPG";

export default function Portfolio() {
  return (
    <div className=" mobileHieght d-flex justify-content-center overflowHidden heightInherit">
      <div className="d-flex container topheight  mobilePortfolio mb-5 heightInherit ">
        <div className="d-flex flex-column" style={{ width: "20%" }}>
          <img className="img-fluid roundCorners photo" src={self2} />
          <h1 className="fancyText smallText text-center ">James Sgarella</h1>
        </div>

        <div
          className="fancyText d-flex justify-content-center marginBig "
          style={{ width: "80%" }}
        >
          <div className="container mb-3 mt-5">
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

        <div
          className="fancyText d-flex justify-content-center mt-5 flex-column"
          style={{ width: "80%" }}
        >
          <h1 className="text-center">Tech Skills</h1>
          <p className="text-center">
            This is a running list of all the technologies I've worked with.
            Examples of what I've built are on the Project page.
          </p>
          <div className="d-flex justify-content-around">
            <div className="d-flex flex-column align-items-center">
              <h3>Front-End</h3>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React+React-native</li>
                <li>Handlebars</li>
              </ul>
            </div>
            <div className="list d-flex flex-column align-items-center">
              <h3>Back-End</h3>
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Grapql</li>
                <li>Node.js + Express.js</li>
                <li>Socket.io</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="fancyText d-flex justify-content-center mt-5 flex-column"
          style={{ width: "80%" }}
        >
          <h1 className="text-center">Contact me</h1>
          <h3 className="text-center">Email: Jimbo8702@gmail.com</h3>
          <div className="container"></div>

          <div className="container">
            <div className="d-flex justify-content-center ">
              <a
                href="https://github.com/Jimbo8702"
                className="backgroundBlue roundCorners atagDecor"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/james-sgarella-35a8b8197/"
                className="backgroundBlue roundCorners atagDecor"
              >
                LinkedIn
              </a>
              <a className="backgroundBlue roundCorners atagDecor">Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
