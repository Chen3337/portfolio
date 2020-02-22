import React from 'react';

var styleSheet = {
  borderRadius: "25px",
  backgroundColor: "#3492eb",
  padding: "15px"
};
var styleSheet2 = {
  borderRadius: "25px",
  backgroundColor: "White",
  padding: "5px"
};
function Contact() {

  return (
    <div>
      <h3>Contact Me</h3>
      <div style={{ textAlign: "left", margin: "auto", width: "50%" }}>

        <div style={styleSheet}>
          <b>Name :</b>
          <div style={styleSheet2}>
            Zhen Yong Chen
          </div>
        </div>

        <div style={styleSheet}>
          <b>Phone Number:</b>
          <div style={styleSheet2}>
            952-905-9050
          </div>
        </div>

        <div style={styleSheet}>
          <b> Email :</b>
          <div style={styleSheet2}>
            <a href="mailto:dannychen111@yahoo.com">dannychen111@yahoo.com</a>
          </div>
        </div>

        <div style={styleSheet}>
          <b> Linkin :</b>
          <div style={styleSheet2}>
            <a href="https://www.linkedin.com/in/zhen-yong-chen-696607191/">https://www.linkedin.com/in/zhen-yong-chen-696607191/</a>
          </div>
        </div>

        <div style={styleSheet}>
          <b> Github :</b>
          <div style={styleSheet2}>
            <a href="https://github.com/Chen3337">https://github.com/Chen3337</a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Contact;
