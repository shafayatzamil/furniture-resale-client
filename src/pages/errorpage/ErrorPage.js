import React from "react";
import errimage from "../../assets/errorpage.jpg";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center ">
      <div>
        <h2 className="flex justify-center text-3xl font-bold">
          this route is not found
        </h2>
        <img src={errimage} className="w-2/3 mx-auto" alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
