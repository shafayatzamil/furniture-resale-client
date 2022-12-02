import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryItems from "./CategoryItems";

const Category = () => {
  const [products, setAllProducts] = useState([]);
  const [categories, setAllCatagories] = useState([]);

  useEffect(() => {
    fetch(`https://furniture-resale-server.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));

    fetch("https://furniture-resale-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        setAllCatagories(data);
      });
  }, []);

  return (
    <div className="flex ">
      <div className="flex-none mr-4">
        <div className="p-2 font-semibold bg-slate-200 ">
          <h2 className="underline underline-offset-1 font-semibold ">
            Catagory
          </h2>
          {categories.map((singleCategory, i) => (
            <Link to={`/category/${singleCategory.category}`} key={i}>
              <p className="my-2 font-bold text-xl uppercase  ">
                <button className=" btn btn-ghost ">
                  {singleCategory.category}
                </button>
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-slate-400  p-6">
        <div className="grid lg:grid-cols-2 gap-4 ">
          {/* {products.map((product) => (
            <CategoryItems key={product._id} product={product}></CategoryItems>
          ))} */}
          <h2 className="text-4xl font-bold text-blue-500 flex justify-center items-center">
            click the category button{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
