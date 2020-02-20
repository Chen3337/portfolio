import React from 'react';


function Nav(props) {

    return (
        <div>
            <h1>Zhen Yong Chen</h1>
        <ul>
            <li className="btn btn-link" onClick={() => props.whichPageOn("home")}>
                Home
            </li>
            <li className="btn btn-link" onClick={() => props.whichPageOn("contact")}>
                Contacts
            </li>
            <li className="btn btn-link" onClick={() => props.whichPageOn("project")}>
                Projects
            </li>
        </ul>
        </div>
  );
}

export default Nav;
