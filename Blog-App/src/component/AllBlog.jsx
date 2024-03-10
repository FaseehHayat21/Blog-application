import React, { useContext, useEffect,  } from "react";
import blogcontext from "../context/blogs/BlogContext";
import Blogitem from "./Blogitem";
import { useNavigate } from 'react-router-dom';

import "./Blogs.css";
export default function AllBlog(props) {
    const navigate = useNavigate();
    const context = useContext(blogcontext);
    const { blogs, getBlogss } = context;
  
    useEffect(() => {
      if(localStorage.getItem('token')){
          getBlogss();
      }
      else{
          navigate("/login");
      }
      // eslint-disable-next-line
    }, []);
  
    return (
      <>
        <div className="column container my-3 w-40 blog-display scroll-box">
          <h1>EXPLORE</h1>
          {blogs.map((blog) => (
            <Blogitem key={blog._id} blog={blog}  />
          ))}
        </div>
      </>
    );
}
