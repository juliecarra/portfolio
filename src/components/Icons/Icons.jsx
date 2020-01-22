import React from "react";
import GitHubIcon from "./GitHubIcon";
import LinkedinIcon from "./LinkedinIcon";

const Icons = ({ name }) => {
  if (name === "GitHub") return <GitHubIcon />;
  else if (name === "Linkedin") return <LinkedinIcon />;

  return <div></div>;
};

export default Icons;
