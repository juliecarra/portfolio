import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="About">
      <div className="About__container" id="about">
        <h1>About Me</h1>
        <div>
          <section>
            <p>I'm Julie, a web developer based in Paris,FR.</p>
            <br />
            <p>
              Following studies in foreign languages and tourism, I've decided
              to take up a new challenge by learning web development.
            </p>
            <br />
            <p>
              Recently graduated from the{" "}
              <a
                href="https://www.ironhack.com/en"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Ironhack
              </a>{" "}
              bootcamp, <br />I am now looking for a job as a web developer.
            </p>
            <br />
            <p>Here are the technologies I've worked with:</p>
            <ul>
              <li>HTML/HBS </li>
              <li>React</li>
              <li>Git</li>
              <li>CSS/SASS</li>
              <li>Redux</li>
              <li>Netlify</li>
              <li>JavaScript(ES6)</li>
              <li>Node.js</li>
              <li>Heroku</li>
              <li>C</li>
              <li>Express.js</li>
              <li>Firebase</li>
              <li>Postman</li>
              <li>MongoDB</li>
              <li>API</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
