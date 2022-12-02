import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ product }) => {
  const { user } = useContext(AuthContext);
  // const [userName, setUserName] = useState([]);

  // useEffect(() => {
  //   fetch(`https://furniture-resale-server.vercel.app/user?email=${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserName(data);
  //     });
  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { condition, mobile, location, orginalprice, resaleprice } = product;
  //   handle
  let bookingError;
  console.log(user);

  const handleBooking = (data) => {
    const booking = {
      name: user?.email.split("@")[0],
      email: user.email,
      itemName: product.name,
      orginalprice,
      phoneNumber: data.number,
      location: data.location,
    };

    fetch("https://furniture-resale-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("item is booked", { id: "zamil" });
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });

    console.log(booking);
  };

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit(handleBooking)}>
            {/* name */}
            <div className="form-control w-full ">
              <label className="label">
                {" "}
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.email.split("@")[0]}
                disabled
                {...register("name", {
                  //   required: "Name is Required",
                })}
                className="input input-bordered w-full "
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            {/* email */}
            <div className="form-control w-full ">
              <label className="label">
                {" "}
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                disabled
                {...register("email", {
                  //   required: true,
                })}
                className="input input-bordered w-full "
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            {/* item name */}
            <div className="form-control w-full ">
              <label className="label">
                {" "}
                <span className="label-text">Item name</span>
              </label>
              <input
                type="text"
                value={product.name}
                disabled
                {...register("itemName", {
                  //   required: "itemName is required",
                })}
                className="input input-bordered w-full "
              />
              {errors.itemName && (
                <p className="text-red-500">{errors.itemName.message}</p>
              )}
            </div>
            {/* price */}
            <div className="form-control w-full ">
              <label className="label">
                {" "}
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                value={resaleprice}
                disabled
                {...register("price", {
                  //   required: "Price is required",
                })}
                className="input input-bordered w-full "
              />
              {errors.price && (
                <p className="text-red-500">{errors.price.message}</p>
              )}
            </div>
            {/* number */}
            <div className="form-control w-full ">
              <label className="label">
                {" "}
                <span className="label-text">Number</span>
              </label>
              <input
                type="number"
                {...register("number", {
                  required: "Number is required",
                })}
                className="input input-bordered w-full "
              />
              {errors.number && (
                <p className="text-red-500">{errors.number.message}</p>
              )}
            </div>
            {/* location */}
            <div className="form-control w-full ">
              <label className="label">
                {" "}
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                {...register("location", {
                  required: "Location is required",
                })}
                className="input input-bordered w-full "
              />
              {errors.Location && (
                <p className="text-red-500">{errors.Location.message}</p>
              )}
            </div>
            <input
              className="btn btn-accent w-full mt-4"
              value="Book Now"
              type="submit"
            />
            {bookingError && <p className="text-red-600">{bookingError}</p>}
          </form>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
