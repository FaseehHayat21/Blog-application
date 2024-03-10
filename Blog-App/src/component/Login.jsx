import React, { useState, useEffect } from 'react'
import "./Login.css"
import Aos from 'aos'
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom';
export default function Login() {
    useEffect(()=> {
        Aos.init({duration: 2000});
    })
    
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${wimdow.location.orgin}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, password: password})
        });
        const json = await response.json()
        console.log(json)
        if (json.success){
            console.log(json.authtoken);
            console.log("HOFAyA LOGIn")
            localStorage.setItem('token', json.authtoken); 
            
            navigate("/about");
        }
        else{
            alert("Invalid credentials");
        }

    }


    return (
        <>
        <div className='login'>
          <form  onSubmit={handleSubmit} className='container login-form' data-aos= "fade-right">
              <div className="mb-3">
                  <h1 className='container heading'>Login</h1>
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control"  onChange={(e)=>setEmail(e.target.value)} id="email" name="email" aria-describedby="emailHelp" required/>
                  <div id="emailHelp" className="form-text text-below text-wrap">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control"   onChange={(e)=>setPassword(e.target.value)}  name="password" id="password" required/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>
      </>    
  )
}
