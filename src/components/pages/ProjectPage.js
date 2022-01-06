import React from "react";
import photo from "../../img/placeholder.png";
import GreenTrip from "../../img/Greentrip.png";
import Note from "../../img/Note.png";

export default function Projects() {
  const arrow = "<-----";
  return (
    <div className=" container fancyText paddingTop">
      <div className="row rowHeight noOverLap">
        <div className="col-md-7 ">
          <h2 className="">
            GreenTrip Planner.
            <span className="text-muted">Know your carbon foot print.</span>
          </h2>
          <p className="lead">
            GreenTrip Planner was made for those who want to see their carbon
            footprint while traveling. Given two locations, GreenTrip Planner
            uses the Positionstack API to get a laditude and longitude. Then
            takes them and uses the Here developer API to draw a map on the main
            page. Along with some JavaScript logic, you get a map with a route
            of your trip and the carbon emissions based on a nation average for
            standard travel.
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

      <div className="row rowHeight noOverLap">
        <div className="col-md-7 order-md-2">
          <h2 className="">
            Note. <span className="text-muted">Meet through music.</span>
          </h2>
          <p className="lead">
            Music connects people, and with Note we hope to make more
            connections through music. Note uses a restful API along with Mysql
            for creating accounts and passing login authenfication. The user can
            select genre groupchats and see all posts associated with that
            genre. Adding/making private chats was a goal in the future of
            development for Note.
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

      <div className="row rowHeight noOverLap">
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
