import React from "react";
import FullYear from "../helpers/date";

function Footer() {
   return (
      <div className="footer-div fixed-bottom">
         <footer className="d-flex flex-wrap container justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-muted">
               &copy; <FullYear />. With love Damilare F.
            </p>

            <ul className="nav col-md-4 justify-content-end">
               <li className="nav-item">
                  <a href="/" className="nav-link px-2 text-muted">
                     Home
                  </a>
               </li>
               <li className="nav-item">
                  <a href="/about" className="nav-link px-2 text-muted">
                     About
                  </a>
               </li>
               <li className="nav-item">
                  <a href="/projects" className="nav-link px-2 text-muted">
                     Projects
                  </a>
               </li>
            </ul>
         </footer>
      </div>
   );
}

export default Footer;
