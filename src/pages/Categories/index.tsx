import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/api/useFetchData";

const Categories = () => {
  const { data: products } = useFetchData("products");
  const { slug } = useParams();
  console.log("slug: ", slug);

  const categoryProducts = products.filter(
    (item) => item.category.title === slug
  );
  console.log("categoryProducts: ", categoryProducts);

  return <div>Categories</div>;
};

export default Categories;
