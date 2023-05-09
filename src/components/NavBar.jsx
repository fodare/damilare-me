import React from "react";

function NavBar() {
   return (
      <section className="navigation">
         <div className="container nav-element">
            {/* Logo */}
            <div className="nav-wrapper">
               <a href="/" className="item brand">
                  <span>Damilare F.</span>
               </a>
            </div>

            <div className="nav-section">
               {/* Nav links */}
               <div className="nav-routes">
                  <nav>
                     <div className="routes">
                        {/* Home */}
                        <div className="nav-item-outer home-outer">
                           <a href="/" className="route-links mobile-only">
                              <span>Home</span>
                           </a>
                        </div>
                        {/* Blogs */}
                        <div className="nav-item-outer">
                           <a href="/blogs" className="route-links blogs">
                              <span>Blogs</span>
                           </a>
                        </div>

                        {/* Projects */}
                        <div className="nav-item-outer">
                           <a href="/projects" className="route-links projects">
                              <span>Projects</span>
                           </a>
                        </div>

                        {/* Tools */}
                        <div className="nav-item-outer">
                           <a href="/tools" className="route-links tools">
                              <span>Tools</span>
                           </a>
                        </div>

                        {/* About */}
                        <div className="nav-item-outer">
                           <a href="/about" className="route-links about">
                              <span>About</span>
                           </a>
                        </div>
                     </div>
                  </nav>
               </div>

               {/* padding div */}
               <div className="padding-div">
                  <div className="nav-item-outer ">
                     <a href="/" className="padding-link">
                        <span></span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default NavBar;
