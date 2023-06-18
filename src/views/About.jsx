import React from "react";
import { Greetings } from "../helpers/date";

function About() {
   return (
      <div className="container about">
         <div className="aboutIntro">
            <h3>About me</h3>
            <p>IT Ops manager and hobbyist developer.</p>
         </div>

         <div className="aboutMessage">
            <p>
               <Greetings />, I'm Däre. I'm an IT Ops manager. Welcome to my
               corner of the internet for solutions on technical-related
               how-to's, projects I've created and worked on, answers to
               everyday technical problems, and other things I'd like to share.
            </p>

            <div id="connect" className="connect-div">
               <h4>
                  Connect <hr />
               </h4>

               <p>You can always reach me via the channels below.</p>
               <span className="connectLinks">
                  <span>
                     <a
                        href="https://github.com/fodare"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Github.
                     </a>
                  </span>

                  <br />

                  <span>
                     <a
                        href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Linkedin.
                     </a>
                  </span>
               </span>
            </div>

            <div className="miscellaneous">
               <h4>
                  Miscellaneous <hr />
               </h4>
               <li>
                  <a className="miscellaneous-link" href="/about/resume">
                     Resume
                  </a>
               </li>
            </div>
         </div>
      </div>
   );
}

export default About;
