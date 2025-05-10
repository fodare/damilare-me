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
               projectLink="https://github.com/fodare/Germany_lang_flashcard_APP"
               projectTitle="German Flash Card"
               projectDescription="An Android flashcard application help users memorize common German words."
               projectSourceCode="https://github.com/fodare/Germany_lang_flashcard_APP"
               demo=""
               demoLink=""
               demoVisiblity="hidden"
               demoDisplay="none"
            />

            <ProjectCard
               year="2023"
               projectLink="https://github.com/fodare/Boris"
               projectTitle="Boris"
               projectDescription="Python GUI windows to help run personalized applications locally."
               projectSourceCode="https://github.com/fodare/Boris"
               demo=""
               demoLink=""
               demoVisiblity="hidden"
               demoDisplay="none"
            />

            <ProjectCard
               year="2025"
               projectLink="https://github.com/fodare/bravectl"
               projectTitle="bravectl"
               projectDescription="A .NET tool / cli app that performs web searches using the Brave API."
               projectSourceCode="https://github.com/fodare/bravectl"
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
