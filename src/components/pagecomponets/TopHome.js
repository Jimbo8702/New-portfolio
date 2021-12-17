import React from "react";
import photo from "../../img/placeholder.png";

export default function Top() {
  return (
    <div className=" container backgroundBlue setPadding roundCorners">
      <div className="row">
        <div className="col-md-7 ">
          <h1>Welcome!</h1>
          <p class="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
        </div>

        <div className="col-md-5">
          <div>
            <img className="image" src={photo} alt="James" />
          </div>
        </div>
      </div>
    </div>
  );
}
