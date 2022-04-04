import React from "react";
import { Greetings } from "../helpers/date";

function Home() {
   return (
      <div className="container">
         <div className="intro row ">
            <div className="col-lg-8 col-sm-8 col-md-8">
               <h2 className="introGreetings">
                  <Greetings />, I'm Däre.
               </h2>
               <p className="introParagraph">
                  I'm an IT Operations manager in Münster Germany. I love
                  building APIs and documenting solutions to technical related
                  problems / what I learn. This page is a digital garden of
                  things I've learned.
               </p>
            </div>

            <div className="col-lg-4 col-sm-4 col-md-4">
               <img
                  className="introPic"
                  alt="damilare.png"
                  src="https://www.taniarascia.com/static/me-b7a38ffc7e22e2ba4f70d96ac79642de.jpg"
               />
            </div>
         </div>
      </div>
   );
}

export default Home;
