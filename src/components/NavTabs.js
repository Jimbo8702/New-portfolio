import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <div className="z-index">
      <div>
        <div className="p-4 p-md-5  text-white rounded marginBottom backgroundBlack borderBottomBlue">
          <div>
            <ul className="nav  nav-justified">
              <li className="nav-item">
                <Link className="btn  btn-block btn-squared" to={`/`}>
                  <div className="fancyText borderBottomBlue">Home</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn  btn-block btn-squared" to={`/Projects`}>
                  <div className="fancyText borderBottomBlue">Projects</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn  btn-block btn-squared" to={`/Portfolio`}>
                  <div className="fancyText borderBottomBlue">Portfolio</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn  btn-block btn-squared" to={`/Contact`}>
                  <div className="fancyText borderBottomBlue">Contact</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavTabs;
