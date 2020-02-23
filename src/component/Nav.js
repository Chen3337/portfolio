import React from 'react';
import { Link } from "react-router-dom";
import PDF from "../data/Resume.pdf";
function Nav(props) {

    return (
        <div style={{backgroundColor:"blue"}}>
            <h1>Zhen Yong Chen</h1>
            <ul>
                <li className="btn btn-link">
                    <Link to="/portfolio/" style={{textDecoration: "none",color:"white"}}>Home</Link>
                </li>
                <li className="btn btn-link">
                    <Link to="/portfolio/contact" style={{textDecoration: "none",color:"white"}}>Contacts</Link>
            </li>
                <li className="btn btn-link">
                    <Link to="/portfolio/project" style={{textDecoration: "none",color:"white"}}>Projects</Link>
            </li>
            <li className="btn btn-link">
                    <Link to={PDF} target="_blank" style={{textDecoration: "none",color:"white"}}>Resume</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
