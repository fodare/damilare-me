import React from "react";

function NavBar() {
   return (
      <div className="header-div">
         <header className="d-flex flex-wrap align-items-center container justify-content-center justify-content-md-between py-3 mb-4 ">
            {/* Logo */}
            <a
               href="/"
               className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none logo"
            >
               <h2 className="logo">Damilare F.</h2>
            </a>

            <ul className="nav col-12 col-md-auto mb-6 navigation-bar justify-content-center mb-md-0">
               {/* Blogs */}
               <li>
                  <a
                     href="/blogs"
                     className="nav-link px-4 link-secondary blog-link"
                  >
                     Blogs
                  </a>
               </li>

               {/* Projects */}
               <li>
                  <a
                     href="/projects"
                     className="nav-link px-4 link-secondary project-link"
                  >
                     Projects
                  </a>
               </li>

               {/* Tools */}
               <li>
                  <a
                     href="/tools"
                     className="nav-link px-4 link-secondary project-link"
                  >
                     Tools
                  </a>
               </li>

               {/* Abouts */}
               <li>
                  <a
                     href="/about"
                     className="nav-link px-4 link-secondary about-link"
                  >
                     About
                  </a>
               </li>
            </ul>

            {/* Github Hyperlink */}
            <div className="col-md-3 text-end">
               <a
                  className="me-2"
                  href="https://github.com/fodare"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img
                     src="https://img.icons8.com/dusk/30/000000/github.png"
                     alt="Github logo"
                  />
               </a>
            </div>
         </header>
      </div>
   );
}

export default NavBar;
