import React from "react";
import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-10">
      <Item Links={PRODUCTS} title="COMPANY" />
      <Item Links={RESOURCES} title="USEFUL LINKS" />
      <Item Links={COMPANY} title="ROOMS & SUITES" />
      <Item Links={SUPPORT} title="CONTACT US" />
    </div>
  );
};

export default ItemsContainer;