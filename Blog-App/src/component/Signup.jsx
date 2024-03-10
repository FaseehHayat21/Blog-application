import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Signup.css"
export default function Signup() {
    const [credentials, setCredentials] = useState({email: "", password: "", confirmpassword:""}) 
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { email, password, confirmpassword} = credentials;
      const response = await fetch(`${wimdow.location.orgin}/api/auth/register`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({email, password})
      });
      const json = await response.json()
      console.log(json);
      if (json.success){
          console.log(json.authtoken);
          localStorage.setItem('token', json.authtoken); 
            
          navigate("/login");
      }
      else{
          alert("Invalid credentials");
      }
  }
  
  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  
  
    return (
      <div className='signup'>
        
        <form onSubmit={handleSubmit} className='container signup-form'>
          <h1 className='container heading'>Signup</h1>
    {/* <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={onChange}/>
      
    </div> */}
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" name='email'  onChange={onChange} aria-describedby="emailHelp" required/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="passowrd" className="form-label">Password</label>
      <input type="password" className="form-control" id="passowrd" name='password' onChange={onChange}minLength={5} required/>
    </div>
    <div className="mb-3">
      <label htmlFor="confirmpassowrd" className="form-label">Confirm Password</label>
      <input type="password" className="form-control" id="confirmpassowrd" name='confirmpassword' onChange={onChange}minLength={5} required/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
          </div>
    )
  }
