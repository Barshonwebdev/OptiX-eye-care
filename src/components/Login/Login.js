import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle, handleSignIn, handleEmail,handlePass} = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <br/>
            <button onClick={signInUsingGoogle} className= "btn-primary">Google Sign In</button>
            <br/> <br/>
            
            <h3>OR,</h3>
            <br/>

            <form onSubmit={handleSignIn}>
              
              
              <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="inputEmail3" onBlur={handleEmail} required/>
              </div>
              </div>
              
              <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="inputPassword3" onBlur={handlePass} required/>
                </div>
              </div>

             
              
            <button type="submit" className="btn btn-primary">Login </button>
       </form>
       <br/>
       <br/>
       <NavLink className="new-user-link" to="/register" >New User?</NavLink>
        </div>
    );
};

export default Login;