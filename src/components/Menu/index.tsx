import React from "react";
import Div from "../Div";
import useFetchData from "../../hooks/api/useFetchData";
import MenuItem from "./MenuItem";

const Menu = () => {
  const { data } = useFetchData("categories");
  return (
    <div>
      <Div marginTop="70px">
        {data.map((item, i) => (
          <MenuItem key={i} title={item.title} slug={item.slug} />
        ))}
      </Div>
    </div>
  );
};

export default Menu;
