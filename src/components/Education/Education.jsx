import React, { useState } from "react";
import "./Education.scss";
import education from "./education.js";

const Education = () => {
  const [clicked, setClicked] = useState("ironhack");

  function handleClick(e) {
    if (!e.target.id) return;
    const clicked = e.target.id;
    const schools = document.querySelectorAll(".one_education");
    schools.forEach(school => {
      school.classList.remove("active");
      if (school.id === clicked) {
        school.classList.add("active");
      }
    });

    setClicked(clicked);
  }

  return (
    <div className="Education">
      <div className="Education__container" id="education">
        <h1>Education</h1>
        {/* <div className="Education__selected">
          <h2>{education[clicked].name}</h2>
          <br />
          <h3>{education[clicked].date}</h3>
          <br />
          <h4>{education[clicked].text}</h4>
          <h4>{education[clicked].text2}</h4>
          <h4>{education[clicked].text2b}</h4>
          <br />
          <h4>{education[clicked].text3}</h4>
          <h4>{education[clicked].text3b}</h4>
          <br />
          <h4>{education[clicked].text4}</h4>
          <h4>{education[clicked].text5}</h4>
          <h4>{education[clicked].text6}</h4>
          <br />
          <h4>{education[clicked].text7}</h4>
          <h4>{education[clicked].text8}</h4>
          <h4>{education[clicked].text9}</h4>
        </div> */}

        {/* <div class="scrollbar">
          <span class="scrollbar_line"></span>
          <span class="circle">
            <i class="fas">
              <img
                src="/images/ironhack.png"
                width="50px"
                height="50px"
                alt=""
                className="one_education"
                onClick={handleClick}
                id="ironhack"
              />
            </i>
          </span>

          <span class=" circle">
            <i class="fas ">
              {" "}
              <img
                src="/images/42.png"
                className="one_education"
                width="50px"
                height="50px"
                alt=""
                id="42"
                onClick={handleClick}
              />
            </i>
          </span>
          <span class=" circle">
            <i class=" fas ">
              {" "}
              <img
                src="/images/ucp.svg"
                className="one_education"
                width="50px"
                height="50px"
                alt=""
                id="ucp"
                onClick={handleClick}
              />
            </i>
          </span>
        </div> */}

        <div class="container">
          <div class="tabs">
            <p
              class="tab tab-1 active one_education"
              data-tab="1"
              onClick={handleClick}
              id="ironhack"
            >
              Ironhack
            </p>
            <p
              class="tab tab-2 one_education"
              data-tab="2"
              id="42"
              onClick={handleClick}
            >
              42
            </p>
            <p
              class="tab tab-3 one_education"
              data-tab="3"
              id="ucp"
              onClick={handleClick}
            >
              UCP
            </p>

            <span class="highlighter"></span>
          </div>

          <div class="content">
            <div
              class="content__section visible one_education"
              data-tab="1"
              onClick={handleClick}
              id="ironhack"
            >
              <p>
                <h2>{education[clicked].name}</h2>
                <br />
                <h3>{education[clicked].date}</h3>
                <br />
                <h4>{education[clicked].text}</h4>
              </p>
            </div>

            <div
              class="content__section one_education"
              data-tab="2"
              id="42"
              onClick={handleClick}
            >
              <p>
                Wayfarers small batch brooklyn, pabst godard flannel blog
                authentic fingerstache salvia disrupt kombucha pickled. Actually
                hammock semiotics DIY cold-pressed lo-fi swag franzen chia
                locavore. Biodiesel venmo irony, salvia shaman plaid photo booth
                keffiyeh VHS slow-carb chillwave knausgaard vape occupy.
              </p>
            </div>

            <div
              class="content__section one_education"
              data-tab="3"
              id="ucp"
              onClick={handleClick}
            >
              <p>
                Gluten-free you probably haven't heard of them jianbing
                pitchfork pabst. Kombucha occupy iPhone live-edge beard iceland
                freegan small batch before they sold out DIY marfa chillwave
                sustainable taiyaki bushwick. Meggings franzen kogi, next level
                fingerstache +1 kitsch YOLO activated charcoal craft beer
                adaptogen twee. Yuccie tumeric irony heirloom, shoreditch
                kinfolk swag cold-pressed 90's chicharrones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
