import React from "react";
import photo from "../../img/placeholder.png";
import GreenTrip from "../../img/Greentrip.png";
import Note from "../../img/Note.png";
//project page not yet updated names for loading
export default function About() {
  const arrow = "<-----";
  return (
    <div className="container fancybackground fancyText paddingTop">
      <div className="row rowHeight ">
        <div className="col-md-7 ">
          <h2 className="">
            GreenTrip Planner.{" "}
            <span className="text-muted">Know your carbon foot print.</span>
          </h2>
          <p className="lead  ">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
          <div>
            <div className="d-flex ">
              <a href="https://github.com/Jimbo8702/Project-One">GitHub Repo</a>
              <div className="noUnderline marginLeft">{arrow}</div>
            </div>
            <div className="d-flex ">
              <a href="https://jimbo8702.github.io/Project-One/">
                GreenTrip Planner
              </a>
              <div className="noUnderline marginLeft">{arrow}</div>
            </div>
          </div>
        </div>
        <div className="col-md-5 ">
          <img className=" img-fluid mx-auto" alt="500x500" src={GreenTrip} />
        </div>
      </div>

      <div className="row rowHeight">
        <div className="col-md-7 order-md-2">
          <h2 className="">
            Note. <span className="text-muted">Meet through music.</span>
          </h2>
          <p className="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
          <div>
            <div className="d-flex ">
              <a href="https://github.com/sagegrayson/PR2-Note">GitHub Repo</a>
              <div className="noUnderline marginLeft">{arrow}</div>
            </div>
            <div className="d-flex ">
              <a href="https://note-deploy.herokuapp.com">Note</a>
              <div className="noUnderline marginLeft">{arrow}</div>
            </div>
          </div>
        </div>
        <div className="col-md-5 order-md-1">
          <img className=" img-fluid mx-auto" alt="500x500" src={Note} />
        </div>
      </div>

      <div className="row rowHeight">
        <div className="col-md-7">
          <h2 className="">
            Third Project. <span className="text-muted">Simply the best.</span>
          </h2>
          <p className="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
          <div>
            <div className="d-flex ">
              <a href="">Coming soon...</a>
              <div className="noUnderline marginLeft">{arrow}</div>
            </div>
            <div className="d-flex ">
              <a href="">Coming soon...</a>
              <div className="noUnderline marginLeft">{arrow}</div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <img className=" img-fluid mx-auto" alt="500x500" src={photo} />
        </div>
      </div>
    </div>
  );
}
