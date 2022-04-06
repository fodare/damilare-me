import React from "react";
import PostList from "../components/Postlist";

function Blog() {
   return (
      <div className="">
         <div className="articlesIntro">
            <h3 className="Ariclehead">Articles</h3>
            <p>
               Below you can brwose, techical articles, snippets, development
               related materials i have collected over time.
            </p>
         </div>
         <div className="post container">
            <PostList />
         </div>
      </div>
   );
}

export default Blog;
