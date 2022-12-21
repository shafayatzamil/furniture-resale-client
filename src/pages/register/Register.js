import { async } from "@firebase/util";
import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image1 from "../../assets/image2.avif";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const [accountType, setAcccountType] = useState("user");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: accountType,
    };

    // fetch da user
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message, { id: "zamil" });
          navigate(from, { replace: true });
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });

    console.log(user.name);

    createUser(user.email, user.password)
      .then(async (result) => {
        const Newuser = result.user;
        updateProfile({ displayName: user.name });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    form.reset();
  };
  return (
    <div className="hero w-full my-20 bg-gray-100 py-5 rounded-lg">
      <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            className=" hidden md:block ml-5 w-3/4 rounded-lg"
            src={image1}
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Register</h1>

          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">CHOOSE USER OR SELLER</span>
              </label>
              <select
                className="select select-bordered"
                value={accountType}
                onChange={(e) => setAcccountType(e.target.value)}
              >
                <option defaultValue={accountType}>user</option>
                <option>seller</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="full-name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-3">
              <input
                className="btn btn-primary"
                type="submit"
                value="Register"
              />
            </div>
          </form>

          <div className="flex items-center pt-2 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4"></div>

          <p className="text-center">
            already have an account?
            <Link className="text-orange-600 font-bold" to="/login">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
