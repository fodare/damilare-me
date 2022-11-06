import React from "react";

function Resume() {
   return (
      <div className="container">
         <div className="resume-header">
            <h1 className="resume-headers">Damilare Folorunso</h1>
         </div>

         <div className="resume-connections-links medium-margin-btm">
            <span>
               <li>
                  Github -{" "}
                  <a
                     href="https://github.com/fodare"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     fodare
                  </a>
               </li>
               <li>
                  Linkedin -{" "}
                  <a
                     href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Damilare O.
                  </a>
               </li>
               <li className="resume-mail">
                  Email -{" "}
                  <span className="resume-mail-address">
                     hellobosun@outlook.com
                  </span>{" "}
               </li>
            </span>
         </div>

         <div className="resume-experience">
            <h1 className="resume-headers">Experience</h1>
            <hr />

            <div className="resume-experience-job medium-margin-btm">
               <h3 className="resume-experience-title small-padding-top">
                  IT Ops manager
               </h3>
               <p className="resume-experience-details small-padding-top">
                  <strong>BFS Finance Münster</strong> - DEC 2020 - Present
               </p>

               <div className="resume-experience-roles">
                  <li>
                     Responsible for the continuous monitoring, documentation
                     and optimization of IT services.
                  </li>
                  <li>Provsion and manage Azure cloud services. </li>
                  <li>
                     Advise on technical IT requirements or malfunctions and
                     analyze and classify them.
                  </li>
                  <li>
                     Responsible for the conception and implementation of
                     infrastructure changes including their tests in the
                     transition phase.
                  </li>
                  <li>
                     Lead technical projects and control internal project staff
                     as well as external service providers
                  </li>
                  <li>Ensure compliance and IT security regulations.</li>
                  <li>
                     Help develop support processes, plan training and service
                     handover procedures.
                  </li>
                  <li>Identify and develop internal process automation</li>
                  <li>
                     Create collaborative environment with other technical and
                     non-technical stakeholders
                  </li>
               </div>
            </div>

            <div className="resume-experience-job medium-margin-btm">
               <h3 className="resume-experience-title small-padding-top">
                  Support Service Owner
               </h3>
               <p className="resume-experience-details small-padding-top">
                  <strong>AFS IT Services Estonia OÜ.</strong> - JAN 2020 - NOV
                  2020
               </p>

               <div className="resume-experience-roles">
                  <li>
                     Provide expert level support and administration of systems
                     and applications under my care.
                  </li>
                  <li>
                     Responsible and accountable for delivering particular
                     service within the agreed SLA.
                  </li>
                  <li>
                     Responsible for continuous improvement and the management
                     of changes affecting the service under my care that follows
                     change management practice.
                  </li>
                  <li>
                     Create accurate, clear technical documentation and
                     trainning for the support team.
                  </li>
               </div>
            </div>

            <div className="resume-experience-job medium-margin-btm">
               <h3 className="resume-experience-title small-padding-top">
                  Technical Support Analyst
               </h3>
               <p className="resume-experience-details small-padding-top">
                  <strong>AFS IT Services Estonia OÜ.</strong> - FEB 2019 - DEC
                  2019
               </p>

               <div className="resume-experience-roles">
                  <li>
                     Troubleshoot and diagnose availability and performance
                     issues
                  </li>
                  <li>
                     Maintain error logs in coordination with IT departments,
                     and to maintain resolution reports.
                  </li>
                  <li>Incident handling and ensure quick resolution.</li>
                  <li>Identify, monitor applications metrics.</li>
               </div>
            </div>
         </div>
         <div className="resume-skills medium-margin-btm">
            <h1 className="resume-headers ">Skills</h1>
            <hr />
            <div className="resume-skills-list">
               <li>
                  <strong>Languages : </strong>Javascript, Python, C#, SQL,
                  Motoko.
               </li>
               <li>
                  <strong>Concepts:</strong> Cloudification, Version control,
                  Design Patterns (REST API Design, MVC), Testing, monitoring,
                  Systems administration, Web3, Automation / scripting, Internet
                  computer.
               </li>
               <li>
                  <strong>Frameworks / Libraries / Products:</strong> REACTJS,
                  Flask, Django, NodeJS, ASP.NET, MongoDB, SQLlite
               </li>
            </div>
         </div>

         <div className="resume-education">
            <h1 className="resume-headers ">Education</h1>
            <hr />
            <div className="resume-degree">
               <span>
                  <h3>Tallinn University of Technology (MSC)</h3>
                  <p>2019 - 2020</p>
               </span>
               <span>
                  <h3>Bangalore University (BSC)</h3>
                  <p>2014 - 2017</p>
               </span>
            </div>
         </div>
      </div>
   );
}

export default Resume;
