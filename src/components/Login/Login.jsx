import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "./login.css";

const Login = ({ setStudent }) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email,password)
    try {
      setLogin({ ...login, email: email, password: password });
      let Login = { email: email, password: password };
      let res = await axios.post("http://localhost:5000/api/v1/login", Login);
      let data = res.data;
      // console.log(data.data1);
      setStudent(data.data1);
      if (data.status === "success") {
        localStorage.setItem("authtoken", data.token);
        localStorage.setItem("id", data.data1._id);
        alert("User login Successfull");
        navigate("/Home");
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert("User not registered");
      console.log(error);
    }
  };

  return (
    <>
      <div className="login">
        <form className="loginform" onSubmit={handleSubmit}>
        <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" ></i>
          <h1>Login</h1>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              spellCheck="false"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              spellCheck="false"
              required
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="buttons">
            <button type="submit" className="btn">
              Login
            </button>

            
          </div>
          <div className="text-center">
            <div className="bottom-head-top">
            <p>
                Not a member? 
              </p>
              <Link to="/register">
              {/* <button type="submit" className="btn btn-secondary mx-3">
                SignUp
              </button> */}
              <a href="/register">Register</a>
            </Link>
            </div>
            
              <p>or sign up with:</p>
              <hr className="my-4"/>
              <div className="d-flex justify-content-space-between text-center ">
                <a href="#!" className="text-white"><img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google"/></a>
                <a href="#!" className="text-white"><img src="https://img.icons8.com/fluency/48/000000/meta.png" alt="google"/></a>
                <a href="#!" className="text-white"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="google"/></a>
                <a href="#!" className="text-white"><img src="https://img.icons8.com/ios-filled/50/000000/mac-os.png" alt="google"/></a>
              </div>
            </div>
        </form>
      </div>
    </>
  );
};

export default Login;
