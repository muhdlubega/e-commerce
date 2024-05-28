import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import "./Breadcrumb.scss";

const Breadcrumb = ({ product }) => {
  return (
    <div className="breadcrumb">
      HOME <RiArrowRightSLine />
      SHOP <RiArrowRightSLine />
      {product.category.toUpperCase()}
      <RiArrowRightSLine />
      {product.title.toUpperCase()}
    </div>
  );
};

export default Breadcrumb;
