import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Myorder = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://furniture-resale-server.vercel.app/myorder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  return (
    <div>
      this is order page {orders.length}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>pickup location</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
            {orders ? (
              <>
                {orders.map((order, i) => (
                  <tr key={i}>
                    <th>{i}</th>
                    <td>{order.itemName}</td>
                    <td>{order.location}</td>
                    <td>{order.phoneNumber}</td>
                  </tr>
                ))}
              </>
            ) : (
              <>
                <h2 className="text-2xl">there are no order yet</h2>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myorder;
