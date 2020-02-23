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
          <p>Hello, My name is Zhen Yong Chen and go by the name Danny.</p>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
