import React from "react";
import ExternalIcon from "../Icons/ExternalIcon";
import GitHub from "../Icons/GitHub";
import "./Work.scss";
const Work = ({ projects }) => {
  return (
    <div className="Projects">
      <div className="Projects__container" id="projects">
        <h1>Projects</h1>
        {projects.map(
          ({
            id,
            label,
            title,
            details,
            technologie,
            technologie2,
            technologie3,
            technologie4,

            url,
            link,
            gh
          }) => (
            <div key={id} className="Projects__list">
              <div class="project-container">
                <div class="project">
                  <div class="project-content">
                    <div class="project-label">{label}</div>
                    <a
                      href={link}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <h4 class="project-title">{title}</h4>
                    </a>
                    <div class="project-details">
                      <p className="details">{details}</p>
                      <ul>
                        <li>{technologie}</li>
                        <li>{technologie2}</li>
                        <li>{technologie3}</li>
                        <li>{technologie4}</li>
                      </ul>
                      <div style={{ display: "flex" }}>
                        {" "}
                        <a
                          href={gh}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        >
                          {" "}
                          <GitHub />
                        </a>
                        <a
                          href={link}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        >
                          <ExternalIcon />
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="project-img">
                    <img src={url} alt="" />
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

Work.defaultProps = {
  projects: [
    {
      id: "01",
      label: "Featured Project",
      title: "Crown",
      details:
        "Crown is a responsive hotel  website which includes a  booking system. Each user has the possibility to book a room, a table at the hotel's restaurant and  an activity at the hotel's spa.",
      technologie: "React",
      technologie2: "Sass",
      url: "/images/crown.png",
      link: "https://crown.juliecarra.now.sh/",
      gh: "https://github.com/juliecarra/crown"
    },
    {
      id: "02",
      label: "Featured Project",
      title: "Slack Clone",
      details:
        "A Slack clone which gather the following features of the original app: public channels, direct messages possibility to add channels to favorite, change the sidebar theme and the profile picture, see  users status, a typing indicator, receive notifications when new messages are added to public channels.",
      technologie: "Firebase",
      technologie2: "React",
      technologie3: "Redux",
      url: "/images/slack-v2.png",
      link: "https://slack-v2.firebaseapp.com/",
      gh: "https://github.com/juliecarra/slack-v2"
    },
    {
      id: "03",
      label: "Featured Project",
      title: "Freelancer",
      details:
        "A social network which enables freelancers to connect with each other. The app has the following features: create a professional profile, add/delete posts, commentaries and likes. The app is also fetching the user's latest repositories thanks to the GitHub API.",
      technologie: "React Redux",
      technologie2: "Node.js MongoDB",
      technologie3: " Express.js",

      url: "/images/freelancer.png",
      link: "https://freelancer-front.herokuapp.com/",
      gh: "https://github.com/juliecarra/Freelancer"
    },

    {
      id: "04",
      label: "Featured Project",
      title: "GitHub finder",
      details:
        "A responsive web application which can be used to find GitHub users and fetch GitHub datas thanks the GitHub API.",
      link: " https://github-finder.juliecarra.now.sh/",
      gh: "https://github.com/juliecarra/GitHub-finder",
      technologie: "React",
      technologie2: "Scss",
      url: "/images/gf.png"
    },
    {
      id: "05",
      label: "Featured Project",
      title: "Hizzy.Learn",
      details:
        "An e-learning platform which aims at allowing people to learn programmation through courses and videos. The app gather the following features: create a profile and choose a level and a course, watch tutorials and keep track of your progression.",
      technologie: "Node.js",
      technologie2: "Express.js",
      technologie3: "MongoDB",
      technologie4: "HBS",

      url: "/images/hizzy-learn.png",
      link: "http://hizzy-learn.herokuapp.com/",
      gh: "https://github.com/juliecarra/Hizzy-Learn"
    },
    {
      id: "06",
      label: "Featured Project",
      title: "Tic Tac Toe",
      details:
        "Tic Tac Toe is the first project game that I've developed during the first module at the Ironhack bootcamp.",
      technologie: "HTML",
      technologie2: "CSS",
      technologie3: "JavaScript",
      url: "/images/tic.png",
      link: "https://juliecarra.github.io/game/",
      gh: "https://github.com/juliecarra/juliecarra.github.io/tree/master/game"
    }
  ]
};

export default Work;
