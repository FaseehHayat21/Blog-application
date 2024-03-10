import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import About from "./component/About";
import BlogState from "./context/blogs/BlogState";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Signup from "./component/Signup";
import AddingBlog from "./component/AddingBlog";
import LandingPage from "./component/LandingPage";
import Experience from "./component/Experience"

function App() {
  return (
    <>
      <Router>
        <BlogState>
  <Navbar/>
          <div>
            <Routes>
              <Route path="/About" element={<About />} />
            </Routes>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
            <Routes>
              <Route path="/signup" element={<Signup />} />
            </Routes>
            <Routes>
              <Route path="/home" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/" element={<LandingPage />} />
            </Routes>
            <Routes>
              <Route path="/addingBlog" element={<AddingBlog />} />
            </Routes>
            
            <Routes>
              <Route path="/expereince" element={<Experience/>} />
            </Routes>
          </div>
        </BlogState>
      </Router>
    </>
  );
}

export default App;
