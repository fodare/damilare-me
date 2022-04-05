import React from "react";
import FullYear from "../helpers/date";

function Footer() {
   return (
      <footer className="py-4">
         <div className="container d-flex flex-wrap footer-div justify-content-between align-items-center">
            <p className="col-md-4 mb-0 text-muted">
               &copy; <FullYear />. With love Damilare F.
            </p>

            <ul className="nav col-md-4 justify-content-end">
               <li className="nav-item">
                  <a href="/blogs" className="nav-link px-2 text-muted">
                     Blogs
                  </a>
               </li>
               <li className="nav-item">
                  <a href="/projects" className="nav-link px-2 text-muted">
                     Projects
                  </a>
               </li>
               <li className="nav-item">
                  <a href="/about" className="nav-link px-2 text-muted">
                     About
                  </a>
               </li>
            </ul>
         </div>
      </footer>
   );
}

export default Footer;
