import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CategoryItems from "./CategoryItems";

const CardDetails = () => {
  const { id } = useParams();
  const [categoryItems, setCategoryItems] = React.useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://furniture-resale-server.vercel.app/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryItems(data);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <div className="w-6 h-6 border-2 border-dashed rounded-full animate-spin border-green-900"></div>
        </div>
      ) : (
        <div className="grid  grid-cols-3 gap-4">
          {categoryItems.map((categoryItem, i) => (
            <CategoryItems key={i} product={categoryItem}></CategoryItems>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardDetails;
