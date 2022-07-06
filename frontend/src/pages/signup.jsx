import axios from 'axios';
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";

export default function SignUp() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [names, setFullNames] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [national_id, setNationalId] = React.useState("");
  
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/users",
        { names, email, password, phone, national_id }
      );
      alert("Account created successfully");
      navigate("/login");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="col-12">
      <Header />
      <div className="col-12 col-lg-4 mx-auto border  p-5 mt-5">
        <p className="font-bold fs-1">Sign up</p>
        <form onSubmit={
            handleSubmit
          } >
          <div className="mb-3">
            <label htmlFor="exampleInputNames" className="form-label">
              Full names
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputNames"
              aria-describedby="exampleInputNames"
              onChange={(e) => setFullNames(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputNationalId" className="form-label">
              National id
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputNationalId"
              aria-describedby="exampleInputNationalId"
              onChange={(e) => setNationalId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPhone"
              aria-describedby="exampleInputPhone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn bg-app-primary bg-text-color col-12"
          >
            Submit
          </button>
          <div className="d-flex flex-row justify-content-center gap-2 mt-2 ">
            <p>Already have an account ? </p>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
