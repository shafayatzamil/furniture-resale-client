import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";

const Users = () => {
  const [users, setAllUser] = useState([]);

  useEffect(() => {
    fetch("https://furniture-resale-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUser(data);
      });
  }, [users]);
  return (
    <div>
      <h2 className="text-2xl font-bold">All Users:{users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users
              .map((user) => <UserRow key={user._id} user={user}></UserRow>)
              .reverse()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
