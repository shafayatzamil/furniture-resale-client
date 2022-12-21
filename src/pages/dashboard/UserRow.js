import React, { useState } from "react";
import toast from "react-hot-toast";

const UserRow = ({ user, refe }) => {
  const { email, role, _id } = user;
  const [refresh, setRefresh] = useState(false);

  const deletUser = (_id) => {
    console.log(_id);
    // fetch(`https://furniture-resale-server.vercel.app/products/${id}`, {
    //         method: "DELETE",
    //       })
    //         .then((res) => res.json())
    //         .then((data) => {
    //           if (data.success) {
    //             toast.success(data.message);
    //           } else {
    //             toast.error(data.error);
    //           }
    //         })
    //         .catch((err) => toast.error(err.message));
    //     };

    fetch(`https://furniture-resale-server.vercel.app/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setRefresh(!refresh);
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const makeAdmin = (email) => {
    fetch(`https://furniture-resale-server.vercel.app/user/admin/${email}`, {
      method: "PUT",
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          // refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };

  return (
    <tr>
      <th>{email}</th>
      <th>
        {user.role !== "admin" && (
          <button className="btn btn-sm" onClick={() => makeAdmin(email)}>
            make admin
          </button>
        )}
      </th>
      <th>
        {role !== "admin" && (
          <button onClick={() => deletUser(_id)} className="btn btn-xs">
            Delet user
          </button>
        )}
      </th>
    </tr>
  );
};

export default UserRow;
