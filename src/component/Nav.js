import React from 'react';
import { Link } from "react-router-dom";

function Nav(props) {

    return (
        <div style={{backgroundColor:"blue"}}>
            <h1>Zhen Yong Chen</h1>
            <ul>
                <li className="btn btn-link">
                    <Link to="/" style={{textDecoration: "none",color:"white"}}>Home</Link>
                </li>
                <li className="btn btn-link">
                    <Link to="/contact" style={{textDecoration: "none",color:"white"}}>Contacts</Link>
            </li>
                <li className="btn btn-link">
                    <Link to="/project" style={{textDecoration: "none",color:"white"}}>Projects</Link>
            </li>
            </ul>
        </div>
    );
}

export default Nav;
