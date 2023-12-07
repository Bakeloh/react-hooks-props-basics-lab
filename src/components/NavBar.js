import React from "react";

function NavBar(props) {
  const {user} = props;
  console.log(user);
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  );
}

export default NavBar;
