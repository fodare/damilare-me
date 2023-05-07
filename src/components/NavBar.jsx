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
                        {/* Blogs */}
                        <div className="nav-item-outer">
                           <a href="/" className="route">
                              <span>Blogs</span>
                           </a>
                        </div>

                        {/* Projects */}
                        <div className="nav-item-outer" k>
                           <a href="/" className="">
                              <span>Projects</span>
                           </a>
                        </div>

                        {/* Tools */}
                        <div className="nav-item-outer" k>
                           <a href="/" className="">
                              <span>Tools</span>
                           </a>
                        </div>

                        {/* About */}
                        <div className="nav-item-outer" k>
                           <a href="/" className="">
                              <span>About</span>
                           </a>
                        </div>
                     </div>
                  </nav>
               </div>

               {/* padding div */}
               <div>
                  <div className="nav-item-outer ">
                     <a href="/" className="padding-div">
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
