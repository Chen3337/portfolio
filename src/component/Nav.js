import React from 'react';
import { Link } from "react-router-dom";

function Nav(props) {

    return (
        <div>
            <h1>Zhen Yong Chen</h1>
            <ul>
                <li className="btn btn-link">
                    <Link to="/" >Home</Link>
                </li>
                <li className="btn btn-link">
                    <Link to="/contact" >Contacts</Link>
            </li>
                <li className="btn btn-link">
                    <Link to="/project" >Projects</Link>
            </li>
            </ul>
        </div>
    );
}

export default Nav;
