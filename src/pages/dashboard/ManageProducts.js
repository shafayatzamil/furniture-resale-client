import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ManageProducts = () => {
  const [tools, setTools] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch("https://furniture-resale-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, []);

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
        Manage products:{tools.length}
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
            {tools.map((tool, index) => (
              <tr key={tool._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={tool.image} alt="tool" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{tool.name}</td>
                <td>
                  <button
                    onClick={() => handleDelete(tool._id)}
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
