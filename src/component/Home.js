import React from 'react';


function Home() {

  return (
    <div>
      <h3>About Me</h3>
      <div className="row">

        <div className="col-md-4">
          <img style={{ maxWidth: "100%" }} src="https://avatars3.githubusercontent.com/u/54197127?s=300&u=96e22f65b89ffc738b1b830fd7faa1febf84e908&v=4" alt="This is me" />
        </div>
        <div className="col-md-8" style={{ padding: "15px", textAlign:"left" }}>
          <p>Hello, My name is Zhen Yong Chen and go by the name Danny.</p>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
