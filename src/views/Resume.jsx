import React from "react";

function Resume() {
   return (
      <div className="container">
         <div className="resume-header">
            <h1 className="resume-headers">Damilare O. Folorunso</h1>
            <p>
               I am a results-driven IT professional with expertise in
               integration management, DevOps practices, and project execution.
               I excel in fast-paced environments, designing scalable solutions
               and improving operations between development teams and IT
               services.
            </p>
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
                  IT Service Expert
               </h3>
               <p className="resume-experience-details small-padding-top">
                  <strong>Riverty Administration Services GmbH</strong> - SEP
                  2024 - Present
               </p>

               <div className="resume-experience-roles">
                  <li>
                     Implement new customer integrations, configure technical
                     settings and support tests based on business requirements.
                  </li>
                  <li>
                     Ensure timely and accurate processing of data while
                     providing service and monitoring applications.
                  </li>
                  <li>
                     Develop and implement strategies to enhance IT service
                     delivery, including the optimization of processes.
                  </li>
                  <li>
                     Maintain a detailed catalog of knowledge, documentation,
                     and CMDB structure for effective IT service management.
                  </li>
               </div>
            </div>

            <div className="resume-experience-job medium-margin-btm">
               <h3 className="resume-experience-title small-padding-top">
                  IT Service Manager
               </h3>
               <p className="resume-experience-details small-padding-top">
                  <strong>Riverty Administration Services GmbH</strong> - DEC
                  2020 - SEP 2024
               </p>

               <div className="resume-experience-roles">
                  <li>
                     Responsible for the continuous monitoring, documentation
                     and optimization of IT services.
                  </li>
                  <li>Provision and manage Azure cloud services.</li>
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
                  <li>Ensure compliance and IT security regulations</li>
                  <li>
                     Help develop support processes, plan training and service
                     handover procedures.
                  </li>
                  <li>Identify and develop internal process automation.</li>
                  <li>
                     Create collaborative environment with other technical and
                     non-technical stakeholders.
                  </li>
               </div>
            </div>

            <div className="resume-experience-job medium-margin-btm">
               <h3 className="resume-experience-title small-padding-top">
                  Support Service Owner
               </h3>
               <p className="resume-experience-details small-padding-top">
                  <strong>AFS IT SERVICES ESTONIA OÜ</strong> - JAN 2020 - NOV
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
                     Create accurate, clear technical documentation and training
                     for the support team.
                  </li>
               </div>
            </div>

            <div className="resume-experience-job medium-margin-btm">
               <h3 className="resume-experience-title small-padding-top">
                  TECHNICAL SUPPORT ANALYST
               </h3>
               <p className="resume-experience-details small-padding-top">
                  <strong>AFS IT SERVICES ESTONIA OÜ</strong> - FEB 2019 - DEC
                  2019
               </p>
               <div className="resume-experience-roles">
                  <li>
                     Troubleshoot and diagnose availability and performance
                     issues.
                  </li>
                  <li>
                     Maintain error logs in coordination with IT departments,
                     and to maintain resolution reports.
                  </li>
                  <li>Handle incidents and ensure quick resolutions.</li>
                  <li>Identify, monitor applications metrics.</li>
               </div>
            </div>
         </div>
         <div className="resume-skills medium-margin-btm">
            <h1 className="resume-headers ">Skills</h1>
            <hr />
            <div className="resume-skills-list">
               <li>
                  <strong>Natural languages : </strong>English, German(A2)
               </li>
               <li>
                  <strong>Languages : </strong>Javascript, Python, C#,
                  SQL,MongoDB.
               </li>
               <li>
                  <strong>Concepts:</strong> Cloud computing, Version control,
                  Design Patterns, Testing, monitoring, Systems administration
                  and integrations, Web3, Automation / scripting, Mobile and
                  Desktop application developments.
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
