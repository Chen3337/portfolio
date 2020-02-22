import React from 'react';
import Projectdata from "../data/Projectdata.json";

function Project() {

  return (
    <div>
      <h3>Project</h3>
      <img src={Projectdata[1].image} alt="preveiw of the site linked"/>
    </div>
  );
}

export default Project;
