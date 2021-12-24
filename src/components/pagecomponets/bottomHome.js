import React from "react";
import photo from "../../img/placeholder.png";
import GreenTrip from "../../img/Greentrip.png";
import Note from "../../img/Note.png";
import { Link } from "react-router-dom";
export default function Bottom() {
  return (
    <div className="container roundCorners marginTop marginBottom whiteText paddingZero">
      <div className="row ">
        <div className="  col-lg-4 ">
          <div className="d-flex justify-content-center marginTop marginBottom">
            <div>
              <img
                className="imageSmaller img-fluid"
                src={GreenTrip}
                alt="James"
              />
            </div>
          </div>

          <h2>GreenTrip Planner</h2>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p>
            <Link className="btn  btn-block btn-squared" to={`/Projects`}>
              <div className=" fancyText borderBottomBlue">Details</div>
            </Link>
          </p>
        </div>
        <div className="col-lg-4 ">
          <div className="d-flex justify-content-center marginTop marginBottom">
            <img className="imageSmaller img-fluid" src={Note} alt="James" />
          </div>

          <h2>Note</h2>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p>
            <Link className="btn  btn-block btn-squared" to={`/Projects`}>
              <div className="fancyText borderBottomBlue">Details</div>
            </Link>
          </p>
        </div>
        <div className="col-lg-4 ">
          <div className="d-flex justify-content-center marginTop marginBottom ">
            <iframe
              src="https://giphy.com/embed/6uHMqz86ArfkcbTC3N"
              width="250"
              height="250"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>

            {/* <img className="imageSmaller img-fluid" src={photo} alt="James" /> */}
          </div>

          <h2>Project Three</h2>
          <p>Coming soon! Still on the grind for this one!</p>
          <p>
            <Link className="btn  btn-block btn-squared" to={`/Projects`}>
              <div className="fancyText borderBottomBlue">Details</div>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
