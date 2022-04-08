import React from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import postlist from "../posts.json";

const BlogPost = () => {
   let { query } = useParams();

   const validQuery = parseInt(query);

   if (!validQuery) {
      return <Navigate to="*" />;
   }

   const fetchedPost = {};

   let postExists = false;

   postlist.forEach((post, i) => {
      if (validQuery === post.id) {
         fetchedPost.title = post.title ? post.title : "No title given";
         fetchedPost.date = post.date ? post.date : "No date given";
         fetchedPost.author = post.author ? post.author : "No author given";
         fetchedPost.content = post.content ? post.content : "No content given";
         postExists = true;
      }
   });
   if (postExists === false) {
      return <Navigate to="*" />;
   }
   return <Markdown children={fetchedPost.content} />;
};

export default BlogPost;
