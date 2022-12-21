import React, { useEffect, useState } from "react";
import CategoryItems from "../catetory/CategoryItems";

const SecondhandProduct = () => {
  const [homeCatagy, setHomeCatagory] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://furniture-resale-server.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        setHomeCatagory(data);
        setLoading(false);
        // console.log(data._id);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <div className="w-6 h-6 border-2 border-dashed rounded-full animate-spin border-green-900"></div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-4 m-6 ">
          {homeCatagy.slice(0, 3).map((product) => (
            <CategoryItems product={product} key={product._id}></CategoryItems>
          ))}
        </div>
      )}
    </div>
  );
};

export default SecondhandProduct;
