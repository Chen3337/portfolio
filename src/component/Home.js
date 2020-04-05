import React from 'react';


function Home() {

  return (
    <div>
      <h3>About Me</h3>
      <div className="row">

        <div className="col-md-4">
          <img style={{ maxWidth: "100%" }} src="/portfolio/image/Me.jpeg" alt="This is me" />
        </div>
        <div className="col-md-8" style={{ padding: "15px", textAlign:"left" }}>
          <p>Full stack web developer(MERN stack) and was educated at University of Minnesota’s continue education program.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
