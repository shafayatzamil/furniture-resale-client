import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mb-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4 gap-5">
      <div className="bg-white w-3/4 shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-bold text-black">
            Your Profile Info
          </h3>
        </div>
        {/* {currentUser?.photoURL && (
          <div className="avatar px-2 flex items-center justify-center">
            <div className=" w-full  lg:w-72 rounded-full ring ring-primary ring-offset-base-200 ring-offset-2">
              <img
                src={user?.photoURL ? "image is fount" : "image not fount"}
                alt=""
              />
            </div>
          </div>
        )} */}
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-black">Full name</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                {/* {currentUser.displayName} */}
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-black">email address</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                {/* {user.email} */}
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-black">Phone</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                {/* {displayUser.phone} */}
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-black">Location</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                {/* {displayUser.location} */}
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-black">education</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                {/* {displayUser.education} */}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      {/* <div className="w-3/4">
        <h1 className="text-2xl font-bold text-primary">Update Your Profile</h1>
        <form
        // onSubmit={handleUpdate}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              disabled
              //   value={user?.email || ""}
              className="input input-bordered "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              disabled
              //   value={user?.displayName || ""}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Phone Number</span>
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="your location"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">education</span>
            </label>
            <input
              type="text"
              name="education"
              placeholder="your education"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">linkedin</span>
            </label>
            <input
              type="text"
              name="linkedin"
              placeholder="your linkedin"
              className="input input-bordered"
              required
            />
          </div>

          <input
            type="submit"
            value="update"
            className="btn bg-primary text-white w-full max-w-xs mt-6"
          />
        </form>
      </div> */}
    </div>
  );
};

export default MyProfile;
