import React from "react";
import "./Navbar.css";
import SmoothScrolling from "./SmoothScrolling";

const Navbar = () => {
  const handleScroll = () => {
    SmoothScrolling.scrollTo("about");
  };

  const handleScroll2 = () => {
    SmoothScrolling.scrollTo("education");
  };

  const handleScroll3 = () => {
    SmoothScrolling.scrollTo("projects");
  };

  const handleScroll4 = () => {
    SmoothScrolling.scrollTo("contacts");
  };
  return (
    <div className="Navbar">
      <header>
        <a class="logo" href="/">
          <svg
            id="hexagon"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            style={{
              width: "50px",
              fill: "transparent"
            }}
          >
            <g>
              <g
                id="J"
                transform="translate(36, 33)"
                fill="rgb(204, 214, 246)"
                style={{ fontSize: "30px" }}
              >
                <text>
                  <tspan x="0.141666985" y="33">
                    J
                  </tspan>
                </text>
              </g>
              <path
                stroke="#ff2e97"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M 50, 5
         L 11, 27
         L 11, 72
         L 50, 95
         L 89, 73
         L 89, 28 z"
              />
            </g>
          </svg>
        </a>

        <input id="nav" type="checkbox" />
        <label for="nav"></label>

        <nav>
          <ul>
            <li>
              <a href="#about" onClick={handleScroll}>
                <span>01.</span> About
              </a>
              <a href="#education" onClick={handleScroll2}>
                <span>02.</span> Education
              </a>
              <a href="#projects" onClick={handleScroll3}>
                <span>03.</span> Projects
              </a>
              <a href="#contacts" onClick={handleScroll4}>
                <span>04.</span> Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
