import blogcontext from "./BlogContext";
import { useState } from "react";

const BlogState = (props) => {

  const blogsInitial = []
  const [blogs, setBlogs] = useState(blogsInitial)


  const getBlogs= async () => {
    const response = await fetch(`${wimdow.location.orgin}/api/blogs/fetchallblogs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    setBlogs(json)
  }
  
  
  
  const getBlogss= async () => {
    const response = await fetch(`${wimdow.location.orgin}/api/blogs/fetchallblogss`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await response.json() 
    setBlogs(json)
  }

  // Add a Blog
  const addblog = async (title, description, tag, image) => {
    
    const response = await fetch(`${wimdow.location.orgin}/api/blogs/addblog`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag, image})
    });

    const blog = await response.json();
    setBlogs(blogs.concat(blog))
  }

  // const addblog = async (title, description, tag, image) => {
  //   const formData = new FormData();
  //   formData.append('title', title);
  //   formData.append('description', description);
  //   formData.append('tag', tag);
  //   formData.append('image', image);
  // console.log(title);
  // console.log(description);
  // console.log(tag);
  // console.log(image);
  //   const response = await fetch(`${host}/api/blogs/addblog`, {
  //     method: 'POST',
  //     headers: {
  //       // 'Content-Type': 'application/json', // Omit this header when using FormData
  //       'auth-token': localStorage.getItem('token'),
  //     },
  //     body: formData,
  //   });
  
  //   const blog = await response.json();
  //   setBlogs(blogs.concat(blog));
  // };




  // Delete a Blog
  const deleteblog = async (id) => {
    try {
      // API Call
      const response = await fetch(`${wimdow.location.orgin}/api/blogs/deleteblog/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const json = await response.json();
  
      // Assuming the response is a success message or any relevant data
      console.log(json);
  
      // Update the state after successful deletion
      const newBlogs = blogs.filter((blog) => blog._id !== id);
      setBlogs(newBlogs);
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  }
  // const deleteblog = async (id) => {
  //   // API Call
  //   const response = await fetch(`${host}/api/blogs/deleteblog/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4MThlY2I1ZTY1YWI1ZWMwYzI0MGU0In0sImlhdCI6MTcwMjk4OTcyN30.csJPW86eL0ZfSVo8cUQARmLPMO6-9QAMxG2hkklLaYQ"
  //     }
  //   });
  //   const json = response.json(); 
  //   const newBlogs = blogs.filter((blog) => { return blogs._id !== id })
  //   setBlogs(newBlogs)
  // }

  // Edit a Blog
  const editBlog = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${wimdow.location.orgin}/api/blogs/updateblog/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    // const json = await response.json(); 

     let newBlogs = JSON.parse(JSON.stringify(blogs))
    // Logic to edit in client
    for (let index = 0; index < newBlogs.length; index++) {
      const element = newBlogs[index];
      if (element._id === id) {
        newBlogs[index].title = title;
        newBlogs[index].description = description;
        newBlogs[index].tag = tag; 
        break; 
      }
    }  
    setBlogs(newBlogs);
  }

  return (
    <blogcontext.Provider value={{ blogs, addblog, deleteblog, editBlog, getBlogs, getBlogss }}>
      {props.children}
    </blogcontext.Provider>
  )

}
export default BlogState;