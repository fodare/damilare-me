import React from "react";
import PostList from "../components/Postlist";

function Blog() {
   return (
      <div className="articlediv container">
         <div className="articlesIntro">
            <h3 className="Ariclehead">Articles</h3>
         </div>
         <div className="postdiv container">
            <PostList />
         </div>
      </div>
   );
}

export default Blog;
