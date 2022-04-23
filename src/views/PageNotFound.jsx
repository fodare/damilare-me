import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
   return (
      <div className="container notfound">
         <h1>404</h1>
         <p>Page you are looking for does not exist</p>
         <Link to={"/"}>
            <button type="button" class="btn notfoundbtn btn-secondary btn-lg">
               Homepage
            </button>
         </Link>
      </div>
   );
}

export default PageNotFound;
