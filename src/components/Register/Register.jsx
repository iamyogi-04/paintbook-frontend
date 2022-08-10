import React from 'react'
import './register.css'
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Register = () => {
  let navigate = useNavigate();

  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [registers, setRegisters] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(email,password)
    try {
      setRegisters({...registers,firstname:firstname,lastname:lastname,email:email,password:password});
        let register={firstname:firstname,lastname:lastname,email:email,password:password}
        let res = await axios.post("http://localhost:5000/api/v1/register", register);
        let data = res.data;
        console.log(data);
        if(data.status==="success"){
            alert("User Added Successfully")
            navigate("/");
        }else{
            alert(data.error)

        }
    } catch (error) {
        alert("User not registered")
        console.log(error)
    }
}

  return (

    <>
      <div className="register">
        <form className="registerform" onSubmit={handleSubmit}>
          <h1>Signup</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">First Name</label>
            <input type="name" spellCheck='false'
                required onChange={(e)=>setFirstname(e.target.value)} name="name" className="form-control" id="inputname" aria-describedby="name" />

          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Last Name</label>
            <input type="name" spellCheck='false'
                required onChange={(e)=>setLastname(e.target.value)} name="name" className="form-control" id="inputname" aria-describedby="name" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" spellCheck='false'
                required onChange={(e)=>setEmail(e.target.value)} name="email" className="form-control" id="innputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" spellCheck='false'
                required onChange={(e)=>setPassword(e.target.value)} name="password" class="form-control" id="inputPassword" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-secondary">SignUp</button>

        </form>
      </div>

    </>
  )
}

export default Register