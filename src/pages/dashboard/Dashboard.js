import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useSeller from "../../hooks/useSeller";
import Addproducts from "./addproducts/AddProducts";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [admin] = useAdmin(user);
  const [seller] = useSeller(user);

  return (
    // this is start
    <div className="drawer drawer-mobile ">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h1 className="font-bold text-primary  text-3xl">
          {admin ? "WELCOME TO ADMIN DASHBOARD" : "WELCOME TO DASHBOARD"}
        </h1>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-primary mr-6 text-white font-semibold">
          {!admin && !seller && (
            <li>
              <Link to="/dashboard/myorder">My Orders</Link>
            </li>
          )}
          {!admin && seller && (
            <>
              <li>
                <Link to="/dashboard/allproduct">All product</Link>
              </li>
              <li>
                <Link to="/dashboard/addproduct">Add Product</Link>
              </li>
            </>
          )}

          {admin && !seller && (
            <>
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>

              <li>
                <Link to="/dashboard/manageproduct">Manage Product</Link>
              </li>
              {/* <li>
                <Link to="/dashboard/manageorders">Manage Orders</Link>
              </li> */}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
