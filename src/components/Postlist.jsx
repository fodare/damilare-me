import React from "react";
import postlist from "../posts.json";
import { Link } from "react-router-dom";

const PostList = () => {
   return (
      postlist.length &&
      postlist.map((post, i) => {
         return (
            <div key={i} className="post">
               <Link className="postlink" to={`/blogpost/${post.id}`}>
                  <div className="postitems">
                     <h3>{post.title}</h3>
                     <p>{post.date}</p>
                  </div>
               </Link>
            </div>
         );
      })
   );
};

export default PostList;
