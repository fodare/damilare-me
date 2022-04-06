import React from "react";
import postlist from "../posts.json";

const PostList = () => {
   return (
      postlist.length &&
      postlist.map((post, i) => {
         return (
            <a key={post.id} className="post" href="{/}">
               <span className="flex">
                  <h3>{post.title}</h3>
               </span>
               <div className="datediv">{post.date}</div>
            </a>
         );
      })
   );
};

export default PostList;
