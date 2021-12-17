import React from "react";
import photo from "../../img/placeholder.png";
export default function Bottom() {
  return (
    <div className="container  roundCorners marginTop marginBottom whiteText">
      <div className="row ">
        <div className="col-lg-4 ">
          <div className="d-flex justify-content-center marginTop marginBottom">
            <img className="imageSmaller" src={photo} alt="James" />
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
            <img className="imageSmaller" src={photo} alt="James" />
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
            <img className="imageSmaller" src={photo} alt="James" />
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
