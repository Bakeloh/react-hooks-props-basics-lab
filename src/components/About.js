import React from "react";



function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && <p>{props.bio} </p>}
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      {/* <Links github={github} linkedin={linkedin} /> */}
      <a href={props.github}> Github </a>
      <a href={props.linkedin}> LinkedIn </a>
    </div>
  );
}

export default About;
