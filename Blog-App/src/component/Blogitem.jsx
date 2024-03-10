import React, { useContext } from "react";
import blogcontext from "../context/blogs/BlogContext";
import "./Blogitem.css";

const Blogitem = (props) => {
  const context = useContext(blogcontext);
  const { deleteblog } = context;
  const { blog, updateBlog } = props;
  console.log(blog.image)
  return (
    <div className=" blog-item">
        <div className="card my-3">
            <div className="card-body
            "
            style={{
                color: props.Mode === "dark" ? "white" : "black",
                backgroundColor: props.Mode === "dark" ? "black" : "white"
              }}>
                <div className="d-flex align-items-center">
                
                <h5 className="card-title">{blog.title}</h5>
                </div>
                <p className="card-text">{blog.description}</p>
                <p className="card-text">{blog.tag}</p>
                <i className="far fa-trash-alt mx-2" onClick={()=>{deleteblog(blog._id)}}></i>
                <i className="far fa-edit mx-2" onClick={()=>{updateBlog(blog)}}></i>
            </div>
        </div>
    </div>

  );
};

export default Blogitem;
