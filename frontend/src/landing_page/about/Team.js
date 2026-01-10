import React from "react";

function Team() {
  return (
    <div className="container">
      {/* Heading */}
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      {/* PERSON 1 */}
      <div
        className="row p-3 text-muted align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-md-6 p-3 text-center">
          <img
            src="media\images\Shubham.jpeg"
            alt="Your Photo"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-4">Shubham Fartade</h4>
          <h6>Frontend Developer</h6>
        </div>

        <div className="col-md-6 p-3">
          <p>
            I am a MERN stack developer working on modern web applications and
            trading platforms.
          </p>
          <p>
            I specialize in React, UI design, and frontend architecture.
          </p>
          <p>
            Connect on{" "}
            <a href=" https://github.com/ShubhamFartade">GitHub</a> / <a href="https://www.linkedin.com/in/shubham-fartade-6732b2360/?originalSubdomain=in ">LinkedIn</a> /{}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>

      {/* PERSON 2 */}
      <div
        className="row p-3 text-muted align-items-center border-top"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-md-6 p-3 text-center">
          <img
            src="media/images/Shivtej.jpeg"
            alt="Friend Photo"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-4">Shivtej Bhukan</h4>
          <h6>Backend Developer</h6>
        </div>

        <div className="col-md-6 p-3">
          <p>
            Backend developer focused on Node.js, MongoDB, and REST APIs.
          </p>
          <p>
            Passionate about scalable systems and clean backend architecture.
          </p>
          <p>
            Connect on{" "}
            <a href="https://github.com/Shivtejbhukan">GitHub</a> / <a href=" https://in.linkedin.com/in/shivtej-bhukan-8668232b1 ">LinkedIn</a> /{""}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
