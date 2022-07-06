import React, {useEffect, useState} from 'react'
import Sidebar from '../components/sidebar';
import { getCarOwners } from '../services/candidate.service';
import { Link } from "react-router-dom";

export default function ViewCarOwners() {
 
    const [carOwners, setCarOwners] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      getCarOwners()
        .then((info) => {
          setCarOwners(info.data);
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
          <Sidebar/>
        </div>
        <div className="col-12 col-lg-8 mt-5">
          <div className="d-block d-lg-flex flex-row justify-content-between ">
            <h2>All Car Owners</h2>
            <Link to="/add-owner">
              <button type="button" className="btn bg-app-primary bg-text-color ">
                Add Car Owner
              </button>
            </Link>
          </div>
          <table className="table table-hover table-bordered mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Owner names</th>
                <th scope="col">Owner address</th>
                <th scope="col">Owner Phone </th>
                <th scope="col">Owner national id</th>
              </tr>
            </thead>
            {isLoading ? (
              <div className="d-flex justify-content-center align-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            ) : (
              carOwners.map((owner, index) => (
                <tbody key={index + 1}>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{owner.ownerNames}</td>
                    <td>{owner.ownerAddress}</td>
                    <td>{owner.ownerPhoneNumber}</td>
                    <td>{owner.ownerNationalId}</td>
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
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
}
