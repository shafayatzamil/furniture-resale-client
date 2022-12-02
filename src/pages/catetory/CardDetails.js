import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryItems from "./CategoryItems";

const CardDetails = () => {
  const { id } = useParams();
  const [categoryItems, setCategoryItems] = React.useState([]);

  useEffect(() => {
    fetch(`https://furniture-resale-server.vercel.app/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryItems(data);
      });
  }, [id]);

  return (
    <div className="grid  grid-cols-3 gap-4">
      {categoryItems.map((categoryItem, i) => (
        <CategoryItems key={i} product={categoryItem}></CategoryItems>
      ))}
    </div>
  );
};

export default CardDetails;
