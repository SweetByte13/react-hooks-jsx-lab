import React from "react";
import { name, city } from "../data/data.js";

function Home() {

  const myColor = {
    color: "firebrick"
  };

  return (
    <div id="home">
      <h1 style={myColor}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}


export default Home;