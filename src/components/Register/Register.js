import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Register.css'

const Register = () => {
    const { handleRegistration, handleEmail,handlePass,handleNameChange,isloggedin} = useAuth();
    return (
        <div>
            <h2>Please Register</h2>
            <br/>
            

            <form onSubmit={handleRegistration}>
              
              { !isloggedin && <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <input onBlur={handleNameChange} type="text" className="form-control"   required/>
              </div>
              </div>}
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

              
            <button type="submit" className="btn btn-primary">Register  </button>
       </form>
       <br/>
       <br/>
       <NavLink className="already-reg" to="/login">Already Registered?</NavLink>
        </div>
    );
};

export default Register;