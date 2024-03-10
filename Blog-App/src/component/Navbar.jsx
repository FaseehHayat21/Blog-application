import React from 'react'
import { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    let location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
      console.log(location)
    }, [location]);
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
      };

    return (
        <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/" aria-current="page">PUBLIC BLOG</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                           {!localStorage.getItem('token')? <li className="nav-item"><Link className={`nav-link ${location.pathname==="/home"? "active": ""}`}  to="/home">Home</Link></li>:
                           <>
                          <li className="nav-item"> <Link className={`nav-link ${location.pathname==="/home"? "active": ""}`}  to="/home">BLOGS</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="/about" aria-current="page">PUBLIC BLOG</Link></li>
                           </>}
                        
                        

                    </ul>
                    <form className="d-flex"> 

  
                {/* IF USER IS NOT LOGIN TO USAY LOGIN AND SIGNUP SHOW HOGA AND AGAR WO LOGIN HAI TO USAY LOGOUT AnD ADD BUTTON SOW HOGA */}
                {
                !localStorage.getItem('token')?
                <>
                <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                </>
                :
                <>
                <Link className="btn btn-primary mx-1" to="/addingBlog" role="button">ADD</Link>
                <button className="btn btn-primary mx-1" onClick={handleLogout}>Logout</button>
                
                </>
                }
                    </form>
                </div>
            </div>
        </nav>
</>
)
}

export default Navbar