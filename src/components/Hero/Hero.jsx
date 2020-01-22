//  import React from "react";
//  import "./Hero.scss";
//  import 'aos/dist/aos.css';

//  const Hero = ({ greetings, id, role }) => {

//    return (
//      <div className="Hero">
//        <div className="Hero__container">
//          <p className="greetings">{greetings}</p>
//          <h2>
//            {id}
//            <span>.</span>
//          </h2>
//          <h3>
//            {role}
//            <span>.</span>
//          </h3>

//          <div className="Hero__paragraph">
//            <p>
//              I'm a web developer based in Paris, FR focusing in building web
//              applications with a passion for front-end technologies.{" "}
//            </p>
//          </div>
//        </div>
//      </div>
//    );
//  };

//  Hero.defaultProps = {
//    greetings: "Hello, my name is",
//    id: "Julie Carra",
//    role: "I'm a web developer"
//  };
//  export default Hero;

import React, { Component } from "react";
import "./Hero.scss";

export class Hero extends Component {
  render() {
    const { greetings, id, role } = this.props;
    return (
      <div className="Hero">
        <div className="Hero__container">
          <p className="greetings">{greetings}</p>
          <h2>{id}.</h2>
          <h3>{role}.</h3>

          <div className="Hero__paragraph">
            <p>
              I'm a web developer based in Paris, FR focusing in building
              websites and web applications with a passion for front-end
              technologies.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Hero.defaultProps = {
  greetings: "Hello, my name is",
  id: "Julie Carra",
  role: "I'm a web developer"
};
export default Hero;
