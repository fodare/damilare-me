import React from "react";

function NavBar() {
   return (
      <div className="header-div">
         <header className="d-flex flex-wrap align-items-center container justify-content-center justify-content-md-between py-3 mb-4 ">
            <a
               href="/"
               className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
            >
               <h4>Damilare F.</h4>
            </a>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
               <li>
                  <a href="/" className="nav-link px-2 link-secondary">
                     Home
                  </a>
               </li>
               <li>
                  <a href="/about" className="nav-link px-2 link-secondary">
                     About
                  </a>
               </li>
               <li>
                  <a href="/projects" className="nav-link px-2 link-secondary">
                     Projects
                  </a>
               </li>
            </ul>

            <div className="col-md-3 text-end">
               <a className="me-2" href="/">
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
