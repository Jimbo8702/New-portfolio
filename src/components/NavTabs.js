import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <div>
        <div className="p-4 p-md-5 mb-4 text-white rounded backgroundBlack">
          <div>
            <ul className="nav nav-tabs nav-justified">
              <li className="nav-item">
                <a
                  href="#home"
                  onClick={() => handlePageChange("Home")}
                  className={
                    currentPage === "Home" ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  onClick={() => handlePageChange("About")}
                  className={
                    currentPage === "About" ? "nav-link active" : "nav-link"
                  }
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#blog"
                  onClick={() => handlePageChange("Blog")}
                  className={
                    currentPage === "Blog" ? "nav-link active" : "nav-link"
                  }
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={() => handlePageChange("Contact")}
                  className={
                    currentPage === "Contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavTabs;
