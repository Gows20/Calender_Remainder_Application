import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      navigate("/home");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" value={credentials.username} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} />
        </div>
        <button className="login-button" type="submit">Login</button>
        <p className="forgot-password" onClick={() => alert("Reset your password!")}>Forgot Password?</p>
      </form>
    </div>
  );
}

export default Login;
