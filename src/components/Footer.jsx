import React from "react";
import FullYear, { currentyear } from "../helpers/date";

function Footer() {
   return (
      <footer class="footer mt-auto py-3">
         <div class="container">
            <span class="text-muted">
               With Love. Damilare F. {<FullYear />}.
            </span>
         </div>
      </footer>
   );
}

export default Footer;
