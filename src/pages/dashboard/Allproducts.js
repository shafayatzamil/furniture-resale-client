import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const Allproducts = () => {
  const { user } = useContext(AuthContext);
  const [refresh, setRefresh] = useState(false);
  const [myproduct, setMyproduct] = useState([]);
  useEffect(() => {
    // fetch(``)
    fetch(`https://furniture-resale-server.vercel.app/myproduct/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyproduct(data);
      });
  }, [myproduct]);
  const handleDelete = (id) => {
    fetch(`https://furniture-resale-server.vercel.app/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          setRefresh(!refresh);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary">
        Manage products:{myproduct.length}
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>avatar</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myproduct ? (
              <>
                {myproduct.map((myproduct, index) => (
                  <tr key={myproduct._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={myproduct.image} alt="tool" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{myproduct.name}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(myproduct._id)}
                        className="btn btn-xs btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <>
                <h2 className="text-2xl">
                  the seller is not added any product
                </h2>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allproducts;
