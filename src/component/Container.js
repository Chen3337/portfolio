import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Contact from "./Contact";
import Project from "./Project";
import Footer from "./Footer";
import Follower from "./Follower";
function Container() {
    return (
        <Router>
            <Follower />
            <Nav />
            <div className="container" style={{backgroundColor:"#13a8ed", padding:"30px"}}>
                <Switch>
                    <Route exact path="/portfolio/" component={Home} />
                    <Route exact path="/portfolio/project" component={Project} />
                    <Route exact path="/portfolio/contact" component={Contact} />
                    <Route component={Home} />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default Container;
