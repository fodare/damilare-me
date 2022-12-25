import React from "react";

function ProjectCard(props) {
   return (
      <div className="col-sm-12 col-md-6 col-lg-4 mb-1 mb-sm-0 ">
         <div className="card projectCard">
            <div className="card-body">
               <a
                  href={props.projectLink}
                  className="projectTitle small-margin-top"
                  target={"_blank"}
                  rel="noreferrer"
               >
                  {props.projectTitle}
               </a>
               <p className="project-text small-margin-top">
                  {props.projectDescription}
               </p>
               <a
                  href={props.projectSourceCode}
                  target={"_blank"}
                  className="projectSoureCodeLink"
                  rel="noreferrer"
               >
                  Source code
               </a>

               <a
                  style={{
                     visiblity: props.demoVisiblity,
                     display: props.demoDisplay,
                  }}
                  href={props.demoLink}
                  target={"_blank"}
                  className="projectSoureCodeLink"
                  rel="noreferrer"
               >
                  {props.demo}
               </a>
            </div>
         </div>
      </div>
   );
}

export default ProjectCard;
