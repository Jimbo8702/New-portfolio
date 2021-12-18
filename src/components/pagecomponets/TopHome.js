import React from "react";
import photo from "../../img/placeholder.png";

export default function Top() {
  return (
    <div className=" container backgroundBlue setPadding roundCorners d-flex topheight ">
      <div className="row d-flex ">
        <div className="col-md-3 ">
          <h1>Welcome!</h1>
          <p class="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
        </div>

        <div className="col-md-6">
          <div className="d-flex align-items-center">
            <img className="img-fluid mx-auto " src={photo} alt="James" />
          </div>
        </div>
        <div className="col-md-3 ">
          <h1>Welcome!</h1>
          <p class="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
        </div>
      </div>
    </div>
  );
}
