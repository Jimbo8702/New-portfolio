import React from "react";
import photo from "../../img/placeholder.png";
import GreenTrip from "../../img/Greentrip.png";
import Note from "../../img/Note.png";
export default function Bottom() {
  return (
    <div className="container  roundCorners marginTop marginBottom whiteText d-flex">
      <div className="row ">
        <div className="col-lg-4 ">
          <div className="d-flex justify-content-center marginTop marginBottom">
            <div>
              <img
                className="imageSmaller img-fluid"
                src={GreenTrip}
                alt="James"
              />
            </div>
          </div>

          <h2>Project One</h2>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p>
            <a className="btn btn-secondary" href="#">
              View details »
            </a>
          </p>
        </div>
        <div className="col-lg-4 ">
          <div className="d-flex justify-content-center marginTop marginBottom">
            <img className="imageSmaller img-fluid" src={Note} alt="James" />
          </div>

          <h2>Project Two</h2>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p>
            <a className="btn btn-secondary" href="#">
              View details »
            </a>
          </p>
        </div>
        <div className="col-lg-4 ">
          <div className="d-flex justify-content-center marginTop marginBottom ">
            <img className="imageSmaller img-fluid" src={photo} alt="James" />
          </div>

          <h2>Project Three</h2>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p>
            <a className="btn btn-secondary" href="#">
              View details »
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
