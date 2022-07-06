import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import vehicle from '../components/vehicle';
import Candidate from "../components/vehicle";
import Header from "../components/header";
import { getVehicles } from "../services/candidate.service";
import Vehicle from '../components/vehicle';
import Details from './details';

export default function Home() {
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
    <div className="col-12">
      <Header />
      <div className="m-lg-4 p-2 p-md-2 p-sm-3 d-lg-flex d-md-block ">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <p className="fw-bold fs-1 col-sm-12 ">
            Fast and secure management of vehicle{" "}
          </p>
          <Link to="/login">
            <button className="btn bg-text-color col-12 col-lg-6 h-25 bg-app-primary">
              JOIN NOW
            </button>
          </Link>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 d-none d-lg-block mt-md-6">
          <img
            className="w-50 d-block mx-auto"
            src={
              "https://helios-i.mashable.com/imagery/articles/068h03vAKs6zL4S5NYXNd9o/hero-image.fill.size_1248x702.v1640814647.jpg"
            }
          />
        </div>
      </div>
      <div className="d-flex justify-content-center align-content-center mt-md-3 ">
        <p className="d-block mx-auto font-bold fs-4">All vehicles</p>
      </div>
      <div className="row col-12 mx-0 px-0 col-lg-8  mx-lg-auto  ">
        {isLoading ? (
          <div className="d-flex justify-content-center align-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          vehicles.map((vehicle) => (
            <Details
              key={vehicle._id}
              chasisNumber={vehicle.chasisNumber}
              manufactureCompany={vehicle.manufactureCompany}
              manufactureYear={vehicle.manufactureYear}
              modelName={vehicle.modelName}
              price={vehicle.price}
              ownerNames={vehicle.owner.ownerNames}
            />
          ))
        )}
      </div>
    </div>
  );
}
