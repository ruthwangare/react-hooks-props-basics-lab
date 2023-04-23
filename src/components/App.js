import React, { useReducer } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";
import user from "../data/user";

// pass this data down as props to the child component(s) that need it!



function App() {

  return (
    <div>
      <NavBar />
      <Home user={user} />
      <About bio={user.bio} githubLink={user.links.githubLink} linkedinLink={user.links.linkedinLink} />
    </div>
  );
}

export default App;
