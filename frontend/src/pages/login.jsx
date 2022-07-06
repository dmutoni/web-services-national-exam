import axios from 'axios';
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import jwtDecode from "jwt-decode";
import { Toast } from '../components/Toast';
import toast, { Toaster } from 'react-hot-toast';
import { AppContext, GlobalContext } from '../context/GlobalContext';

export default function Login() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/auth",
        { email, password }
      );
        const token = response.data.token;
        localStorage.setItem("token", token);
        const user = jwtDecode(token);
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="col-12">
      <Header />
      {
        !error ? (
          <Toaster status={"error"} message={"Invalid credentials"} />
        ) : (
          <Toaster status={"success"} message={"Login successful"} />
        )
      }


      <div className="d-block col-12 col-lg-4 mx-auto border  p-5 mt-5">
        <p className="font-bold fs-1">Login</p>
        <form
          onSubmit={
            handleSubmit
          }
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          {/* <Link to={"/dashboard"}> */}
          <button
            type="submit"
            className="btn bg-app-primary bg-text-color col-12"
          >
            Submit
          </button>
          {/* </Link> */}
          <div className="d-flex flex-row justify-content-center gap-2 mt-2 ">
            <p>Don't have an account ? </p>
            <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
