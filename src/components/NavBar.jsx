import React from "react";
import { NavLink } from "react-router-dom";

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
                           <NavLink
                              to="/"
                              activeClassName="active"
                              className="route-links mobile-only home-route"
                           >
                              <span>Home</span>
                           </NavLink>
                        </div>
                        {/* Blogs */}
                        <div className="nav-item-outer">
                           <NavLink
                              to="/blogs"
                              activeClassName="active"
                              className="route-links blogs blogs-route"
                           >
                              <span>Blogs</span>
                           </NavLink>
                        </div>

                        {/* Projects */}
                        <div className="nav-item-outer">
                           <NavLink
                              to="/projects"
                              activeClassName="active"
                              className="route-links projects projects-route"
                           >
                              <span>Projects</span>
                           </NavLink>
                        </div>

                        {/* About */}
                        <div className="nav-item-outer">
                           <NavLink
                              to="/about"
                              activeClassName="active"
                              className="route-links about about-route"
                           >
                              <span>About</span>
                           </NavLink>
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
