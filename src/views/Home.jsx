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
                  I'm an IT Ops manager and a hobbyist developer based in
                  Germany. This web page is a digital garden of tech-related
                  projects, solutions and documentation for some of my day - day
                  problems.
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
