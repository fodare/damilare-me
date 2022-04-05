import React from "react";
import { Greetings } from "../helpers/date";

function About() {
   return (
      <div className="container about">
         <div className="aboutIntro">
            <h3>Projects</h3>
            <p>
               IT Operations Manager, Systems Engineer and a DevOps enthusiast.
            </p>
         </div>

         <div className="aboutMessage">
            <p>
               <Greetings /> I'm Däre. I'm an IT Operations manager based in
               Münster Germany. Welcome to my corner of the internet for
               solutions on technical related how to's, projects I've created
               and worked on, solutions to everyday technical problems at work
               and other things I'd like to share with the universe.
            </p>
         </div>
      </div>
   );
}

export default About;
