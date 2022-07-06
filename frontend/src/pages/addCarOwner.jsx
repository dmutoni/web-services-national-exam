import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';

export default function AddCarOwner() {
    const [ownerNames, setOwnerNames] = useState('');
    const [ownerAddress, setOwnerAddress] = useState('');
    const [ownerPhoneNumber, setOwnerPhone] = useState('');
    const [ownerNationalId, setOwnerNationalId] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/car-owners",
        { ownerNames, ownerAddress, ownerNames, ownerPhoneNumber, ownerNationalId }, {
              headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        }
      );
      const data = response.data;
      alert("Car Owner created successfully");
      navigate("/view-car-owners");
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
            <h3>Add Car Owner</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="carOwner">Owner name</label>
                <input
                  type="text"
                  className="form-control"
                  id="carOwner"
                  onChange={(e) => setOwnerNames(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="ownerNationalId">Owner national id</label>
                <input
                  type="text"
                  className="form-control"
                  id="ownerNationalId"
                  onChange={(e) => setOwnerNationalId(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="ownerPhoneNumber">Owner phone number</label>
                <input type={"text"} className="form-control" id="ownerPhoneNumber" onChange={(e) => setOwnerPhone(e.target.value) } />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="ownerAddress">Owner address</label>
                <input
                  type="text"
                  className="form-control"
                  id="ownerAddress"
                  onChange={(e) => setOwnerAddress(e.target.value)}
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
    )
}
