import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
   return (
      <section className="projectListSection container">
         <h1 className="projectHeader">Projects</h1>
         <div className=" projectPreview row gy-3">
            <ProjectCard
               year="2022"
               projectLink="/"
               projectTitle="damilaref.dev"
               projectDescription="Source code for this website."
               projectSourceCode="https://github.com/fodare/damilare-me"
               demo=""
               demoLink=""
               demoVisiblity="hidden"
               demoDisplay="none"
            />

            <ProjectCard
               year="2022"
               projectLink="https://github.com/fodare/FileShare"
               projectTitle="FileShare"
               projectDescription="WebApp to store and share files."
               projectSourceCode="https://github.com/fodare/FileShare"
               demo=""
               demoLink=""
               demoVisiblity="hidden"
               demoDisplay="none"
            />

            <ProjectCard
               year="2023"
               projectLink="https://github.com/fodare/FinanceManager"
               projectTitle="Boris"
               projectDescription="Python GUI to help track spending and savings habit."
               projectSourceCode="https://github.com/fodare/Boris"
               demo=""
               demoLink=""
               demoVisiblity="hidden"
               demoDisplay="none"
            />
         </div>
      </section>
   );
}

export default Projects;
