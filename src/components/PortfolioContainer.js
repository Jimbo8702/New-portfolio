import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./Home";
import Projects from "./pages/ProjectPage";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./footer";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default function PortfolioContainer() {
  return (
    <div className="fancybackground overflowHidden">
      <Router>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/New-portfolio" component={Home} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
      </Router>

      <Footer className="footer" />
    </div>
  );
}
