import React from "react";
import PostList from "../components/Postlist";
import Greetings from "../helpers/date";

function Home() {
   return (
      <div className="container">
         <div className="intro row ">
            <div className="col-lg-8 col-sm-8 col-md-8">
               <h2 className="introGreetings">
                  <Greetings />, I'm Däre.
               </h2>
               <p className="introParagraph">
                  I'm an IT Operations manager based in Münster Germany. I love
                  building APIs and documenting solutions to technical related
                  problems / what I learn. This page is a digital garden of
                  things I've learned.
               </p>
               <div className="introRedirectdiv">
                  <a className="introRedirect" href="/about">
                     <img
                        alt="about logo"
                        src="https://img.icons8.com/dotty/30/000000/about.png"
                     />{" "}
                     More about me
                  </a>
               </div>
            </div>

            <div className="col-lg-4 col-sm-4 col-md-4">
               <img
                  className="introPic"
                  alt="damilare.png"
                  src="https://avatars.githubusercontent.com/u/41299452?v=4"
               />
            </div>
         </div>

         <div className="articles">
            <div className="articlesHeader">
               <h2 className="articleHead">Latest Articles</h2>
               <a className="articleLink" href="/blogs">
                  View All
               </a>
            </div>
            <div className="postlist">
               <PostList />
            </div>
         </div>
      </div>
   );
}

export default Home;
