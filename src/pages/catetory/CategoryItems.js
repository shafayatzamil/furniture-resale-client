import {
  faCheckCircle,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";

const CategoryItems = ({ product }) => {
  // const {user}= useAuthState(auth)
  const [openModal, setOpenModal] = React.useState(false);

  const handleBooking = () => {
    console.log(openModal);
    setOpenModal(true);
  };

  const {
    _id,
    name,
    image,
    description,
    category,
    condition,
    mobile,
    location,
    orginalprice,
    resaleprice,
    year,
    seller,
  } = product;

  // console.log("book this product", product);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>

          <div className="flex justify-between">
            <div>
              <p className="text-2xl font-bold ">${resaleprice}</p>
              <p>
                <small>${orginalprice}</small>
              </p>
            </div>
            <div>
              <p>
                <small> year of use:{year}</small>
              </p>
              <p>
                <small>
                  seller name:{seller?.split("@")[0]}
                  {seller ? <FontAwesomeIcon icon={faCheckCircle} /> : ""}
                </small>
              </p>
              <p>
                <small>pickup location:{location}</small>
              </p>
            </div>
          </div>

          <div className="card-actions justify-end">
            {/* <Link to={`/products/${_id}`}>
              <button className="btn btn-primary">Book Now</button>
              
            </Link> */}
            <label htmlFor="my-modal-6" className="btn" onClick={handleBooking}>
              Book now
            </label>
          </div>
        </div>
      </div>
      {openModal && <BookingModal product={product}></BookingModal>}
    </div>
  );
};

export default CategoryItems;
