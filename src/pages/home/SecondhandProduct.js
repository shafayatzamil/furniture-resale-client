import React, { useEffect, useState } from "react";
import CategoryItems from "../catetory/CategoryItems";

const SecondhandProduct = () => {
  const [homeCatagy, setHomeCatagory] = useState([]);
  useEffect(() => {
    fetch(`https://furniture-resale-server.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        setHomeCatagory(data);
        // console.log(data._id);
      });
  }, []);
  return (
    <div className="grid lg:grid-cols-3 gap-4 m-6 ">
      {homeCatagy.slice(0, 3).map((product) => (
        <CategoryItems product={product} key={product._id}></CategoryItems>
      ))}
    </div>
  );
};

export default SecondhandProduct;
