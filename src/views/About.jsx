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
               <Greetings />
               I'm Däre. I'm an IT Ops manager based in Münster Germany. Welcome
               to my corner of the internet for solutions on technical related
               how to's, projects I've created and worked on, answers to
               everyday technical problems, and other things I'd like to share.
            </p>

            <div id="connect" className="connect-div">
               <h4>
                  Connect <hr />
               </h4>

               <p>We can connect via the channels below:</p>
               <span className="connectLinks">
                  <li>
                     <a
                        href="https://github.com/fodare"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Github.
                     </a>
                  </li>

                  <li>
                     <a
                        href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Linkedin.
                     </a>
                  </li>
               </span>
            </div>

            <div className="experience">
               <span>
                  <h4>
                     Experience <hr />
                  </h4>
               </span>

               <div className="experice-div">
                  <div className="experience-heading">
                     <h3>IT Operations Manager</h3>
                     <p>DEC 2020 - Present</p>
                  </div>

                  <span className="company-name">
                     <p>BFS Finance Münster.</p>
                  </span>
               </div>

               <div className="experice-div">
                  <div className="experience-heading">
                     <h3>Support Service Owner</h3>
                     <p>JAN 2020 - NOV 2020</p>
                  </div>

                  <span className="company-name">
                     <p>AFS IT Services Estonia OÜ.</p>
                  </span>
               </div>

               <div className="experice-div">
                  <div className="experience-heading">
                     <h3>Technical Support Analyst</h3>
                     <p>FEB 2019 - DEC 2019</p>
                  </div>

                  <span className="company-name">
                     <p>AFS IT Services Estonia OÜ.</p>
                  </span>
               </div>
            </div>

            <div className="skills">
               <h4>
                  Skills <hr />
               </h4>
               <span>
                  <li>Languages: Javascript, Java, Python, C#.</li>
                  <li>
                     Concepts: DB administration(SQL Lite, MongoDB, SQL), API
                     Testing & creation, Systems administration, Web3, Data
                     processing, Risk analysis, Virtualization, Dev OPS,
                     Cloudification, Web development.
                  </li>
               </span>
            </div>

            <div className="education">
               <h4>
                  Education <hr />
               </h4>
               <div className="experience-heading">
                  <h5>Tallinn University of Technology (MSc)</h5>
                  <p>SEP 2019 - JUN 2020</p>
               </div>
               <div className="experience-heading">
                  <h5>Bangalore University(BSc)</h5>
                  <p>SEP 2014 - JUN 2017</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;
