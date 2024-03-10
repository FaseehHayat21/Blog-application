import React, {useContext, useState} from 'react'
import blogcontext from "../context/blogs/BlogContext"
export default function AddingBlog() {
    const context = useContext(blogcontext);
    const {addblog} = context;

    const [blog, setBlog] = useState({title: "", description: "", tag: "", image: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addblog(blog.title, blog.description, blog.tag, blog.image);
        setBlog({title: "", description: "", tag: "", image:""})
    }

    const onChange = (e)=>{
        setBlog({...blog, [e.target.name]: e.target.value})
    }
  return (
    <>
    <div className="container my-3">
            <h2>WRITE YOUR OWN BLOG</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={blog.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={blog.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={blog.tag} onChange={onChange} minLength={5} required />
                    </div>
                           {/*image  */}
                           <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input type="file" className="form-control" id="image" name="image" value={blog.image} onChange={onChange} accept="image/*" />
          </div>
                <button disabled={blog.title.length<5 || blog.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Blog</button>
            </form>
        </div>
    </>
  )
}
