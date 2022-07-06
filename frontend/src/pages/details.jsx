import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";

export default function Details(props) {
  return (
    <div className="col-12">
      <Header />
      <div className="row mx-0 px-0 my-3 mx-lg-auto mt-lg-5 ">
        <div className="col-12 col-lg-6">
          <div className="d-flex flex-row ">
            <p className="fw-bold fs-2 me-1 ">Chasis Number: </p>
            <p className="fw-bold fs-2">{props.chasisNumber}</p>
          </div>
          <div className="d-flex flex-row ">
            <p className="">Manufacture Company: </p>
            <p className="">{props.manufactureCompany}</p>
          </div>
          <div className="d-flex flex-row ">
            <p className="">Manufacture Year: </p>
            <p className="">{props.manufactureYear}</p>
          </div>
          <div className="d-flex flex-row ">
            <p className="">Model Name </p>
            <p className="">{props.modelName}</p>
          </div>
          <div className="d-flex flex-row ">
            <p className="">Price: </p>
            <p className="">{props.price}</p>
          </div>
          <div className="d-flex flex-row ">
            <p className="">Owner: </p>
            <p className="">{props.ownerNames}</p>
          </div>
          <button className="btn col-12 bg-app-primary bg-text-color me-2">
            {" "}
            Vote{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
