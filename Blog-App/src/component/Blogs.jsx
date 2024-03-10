import React, { useContext, useEffect, useRef, useState } from "react";
import Blogitem from "./Blogitem";

import blogcontext from "../context/blogs/BlogContext";
import { useNavigate } from 'react-router-dom';

import "./Blogs.css";
const Blogs = (props) => {
    const navigate = useNavigate();
  const context = useContext(blogcontext);
  const { blogs, getBlogs, editBlog } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
        getBlogs();
    }
    else{
        navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const [blog, setBlog] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateBlog = (currentBlog) => {
    ref.current.click();
    setBlog({
      id: currentBlog._id,
      etitle: currentBlog.title,
      edescription: currentBlog.description,
      etag: currentBlog.tag,
    });
  };

  const handleClick = (e) => {
    editBlog(blog.id, blog.etitle, blog.edescription, blog.etag);
    refClose.current.click();
  };

  const onChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modwl
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Blog
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={blog.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={blog.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={blog.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  blog.etitle.length < 5 || blog.edescription.length < 5
                }
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update BLOG
              </button>
            </div>
          </div>
        </div>
      </div>

<div className="column container my-3 blog-display scroll-box "
style={{ color: `${props.Mode === "dark" ? "white" : "black"}` }}>
  <h2
  >Your BLOGS</h2>
  <div className="container mx-2">
    {blogs.length === 0 && 'No notes to display'}
  </div>
  <div className="myblog border overflow-auto">
    {blogs.map((blog) => (
      <Blogitem key={blog._id} updateBlog={updateBlog} blog={blog} Mode={props.Mode} />
    ))}
  </div>
</div>
    </>
  );
};

export default Blogs;
