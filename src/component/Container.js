import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Contact from "./Contact";
import Project from "./Project";
function Container() {
    return (
        <Router>
            <Nav />
            <div className="container" style={{backgroundColor:"silver", padding:"30px"}}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/project" component={Project} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default Container;
