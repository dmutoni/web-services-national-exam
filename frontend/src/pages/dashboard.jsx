import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { getVehicles } from '../services/candidate.service';

export default function Dashboard() {

  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getVehicles()
      .then((info) => {
        setVehicles(info.data);
        console.log(info.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="col-12 d-flex flex-row gap-4">
      <div className="col-2 ">
        <Sidebar />
      </div>
      <div className="col-12 col-lg-8 mt-5">
        <div className="d-block d-lg-flex flex-row justify-content-between ">
          <h2>All vehicles</h2>
          <Link to="/add-candidate">
            <button type="button" className="btn bg-app-primary bg-text-color ">
              Add vehicle
            </button>
          </Link>
        </div>
        <table className="table table-hover table-bordered mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Chasis number</th>
              <th scope="col">Manufacture company</th>
              <th scope="col">Manufacture year</th>
              <th scope="col">Price</th>
              <th scope="col">Vehicle Plate NUmber</th>
              <th scope="col">Owner names</th>
            </tr>
          </thead>
          {isLoading ? (
            <div className="d-flex justify-content-center align-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          ) : (
            vehicles.map((vehicle, index) => (
              <tbody key={index + 1}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{vehicle.chasisNumber}</td>
                  <td>{vehicle.manufactureCompany}</td>
                  <td>{vehicle.manufactureYear}</td>
                  <td>{vehicle.price}</td>
                  <td>{vehicle.vehiclePlateNumber}</td>
                  <td>{vehicle.owner.ownerNames}</td>
                </tr>
              </tbody>
            ))
          )}
        </table>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
