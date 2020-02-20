import React, { Component } from 'react';
import Nav from "./Nav";
import Home from "./Home";
import Contact from "./Contact";
import Project from "./Project";

class Container extends Component {
    state = {
        navPage: "home"
    };

    handlePageChange = page => {
        this.setState({ navPage: page });
    };

    renderPage = () => {
        if (this.state.navPage === "project") {
            return <Project />
        }
        else if (this.state.navPage === "contact") {
            return <Contact />
        }
        else {
            return <Home />
        }
    }
    render() {
        return (
            <div>
                <Nav whichPageOn={this.handlePageChange} />
                <div className="container">
                {this.renderPage()}
                </div>
            </div>
        );
    }
}

export default Container;
