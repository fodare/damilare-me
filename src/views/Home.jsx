import React from "react";
import ColorDiv from "../components/ColorfulDiv";
import PostList from "../components/Postlist";
import Greetings from "../helpers/date";

function Home() {
   return (
      <div className="container">
         <div className="intro row ">
            <div className="col-lg-7 col-sm-12 col-md-12">
               <h2 className="introGeetings">
                  <Greetings />, I'm Däre.
               </h2>
               <p className="introParagraph">
                  I'm an IT Ops manager. This web page is a digital garden of
                  tech-related projects, solutions, and documentation for some
                  of my daily problems.
               </p>

               <p className="introParagraph">
                  You and read more on{" "}
                  <a href="/blogs" className="article-redirects">
                     some of my articles
                  </a>{" "}
                  and{" "}
                  <a href="/projects" className="article-redirects">
                     projects
                  </a>{" "}
                  or{" "}
                  <a href="/about" className="article-redirects">
                     about me
                  </a>
               </p>
            </div>

            <div className="col-lg-5 col-sm-12 col-md-12 intro-colors">
               <ColorDiv />
            </div>
         </div>

         <div className="articles">
            <div className="articlesHeader">
               <h2 className="articleHead">Latest Articles</h2>
               <a className="articleLink" href="/blogs">
                  View all
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
