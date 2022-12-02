import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("login successfull");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">
              {" "}
              <li>Home</li>
            </Link>
            <Link to="/category">
              <li tabIndex={0}>Catagory</li>
            </Link>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
          </ul>
        </div>
        <Link to="/">
          <button className="btn btn-ghost normal-case text-xl text-orange-500">
            FURNITURE-Village
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button className="btn btn-outline btn-info" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-5 hover:text-green-600">
              Login
            </Link>
            <Link to="/signup" className="mr-5">
              <button className="btn btn-outline btn-info">signup</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
