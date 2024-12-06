import React, { useState } from 'react'


function login() {

    const [email, setEmail] = useState('');
    const [pwd, setPwd]  = useState('');

    const regDataLogin = { email: "test@example.com", pwd: "12345" };

    function verification(e){
        e.preventDefault();
        if(regDataLogin.email == email && regDataLogin.pwd == pwd){
            alert("Login Succesful");
        }
        else{
            alert("Login failed");
        }
    }

    return (
        <div>
      <h2>Login</h2>
      <form onSubmit={verification}>
        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password:</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    )
}

export default login