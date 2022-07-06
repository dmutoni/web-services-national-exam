import axios from 'axios';
import { Alert } from 'bootstrap';
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";

export default function AddVehicle() {

  const [chasisNumber, setChasisNumber] = React.useState("");
  const [manufactureCompany, setManufactureCompany] = React.useState("");
  const [manufactureYear, setManufactureYear] = React.useState("");
  const [modelName, setModelName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [owner, setOwnerId] = React.useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/vehicles",
        { chasisNumber, manufactureCompany, manufactureYear, modelName, price, owner }, {
              headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        }
      );
      const data = response.data;
      alert("vehicle created successfully");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("error in creating a vehicle");
    }
  };

  return (
    <div className="col-12 d-block d-lg-flex flex-row gap-lg-4 ">
      <div className="col-2 ">
        <Sidebar />
      </div>
      <div className="col-10 col-lg-4 m-3">
        <h3>Add Vehicle</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="chasisNumber">Chasis Number</label>
            <input
              type="text"
              className="form-control"
              id="chasisNumber"
              onChange={(e) => setChasisNumber(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="manufactureCompany">Manufacture Company</label>
            <input
              type="text"
              className="form-control"
              id="manufactureCompany"
              onChange={(e) => setManufactureCompany(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="manufactureYear">Manufacture Year</label>
            <input type={"number"} className="form-control" id="manufactureYear" onChange={(e) => setManufactureYear(e.target.value) } />
          </div>
          <div className="form-group">
            <label htmlFor="modelName">Model Name</label>
            <input
              type="text"
              className="form-control"
              id="modelName"
              onChange={(e) => setModelName(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="ownerNames">Owner Id</label>
            <input
              type="text"
              className="form-control"
              id="ownerId"
              onChange={(e) => setOwnerId(e.target.value)}
            />
          </div>
            <button
              type="submit"
              className="btn bg-app-primary bg-text-color col-12"
            >
              Submit
            </button>
        </form>
      </div>
    </div>
  );
}
