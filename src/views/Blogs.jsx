import React from "react";
import PostList from "../components/Postlist";

function Blog() {
   return (
      <div className="articlediv">
         <div className="articlesIntro">
            <h3 className="Ariclehead">Articles</h3>
            <p>
               Below you can brwose, techical articles, snippets, development
               related materials i have collected over time.
            </p>
         </div>
         <div className="postdiv container">
            <PostList />
         </div>
      </div>
   );
}

export default Blog;
