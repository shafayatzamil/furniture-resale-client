import {
  faMessage,
  faPeopleCarry,
  faSackDollar,
  faToolbox,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-primary text-center mt-6">
        Business Summary
      </h2>
      <p className="text-center">Our record over the here is shown here</p>
      <div className="px-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
        <div className="m-4  card card-compact border-none bg-red-200">
          <div className="card-body gap-0 text-center">
            <p className="text-4xl text-primary">
              <FontAwesomeIcon icon={faPeopleCarry} />
            </p>
            <h2 className="card-title justify-center ">Total Customers</h2>
            <p className="text-2xl font-bold">
              <CountUp end={1000} />+
            </p>
          </div>
        </div>
        <div className="m-4 card card-compact bg-yellow-200 border-none">
          <div className="card-body gap-0 text-center">
            <p className="text-4xl text-primary-focus">
              <FontAwesomeIcon icon={faTruck} />
            </p>
            <h2 className="card-title justify-center">Delivery Record</h2>
            <p className="text-2xl font-bold">
              <CountUp end={1200} />+
            </p>
          </div>
        </div>
        <div className="m-4 card card-compact bg-green-300">
          <div className="card-body gap-0 text-center ">
            <p className="text-4xl text-primary">
              <FontAwesomeIcon icon={faMessage} />
            </p>
            <h2 className="card-title justify-center">Reviews</h2>
            <p className="text-2xl font-bold">
              <CountUp end={900} />+
            </p>
          </div>
        </div>
        <div className="m-4 card card-compact bg-blue-300 ">
          <div className="card-body text-center">
            <p className="text-4xl text-primary">
              <FontAwesomeIcon icon={faToolbox} />
            </p>
            <h2 className="card-title justify-center">Products</h2>
            <p className="text-2xl font-bold">
              <CountUp end={300} />+
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
