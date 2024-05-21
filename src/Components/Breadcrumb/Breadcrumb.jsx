import React from "react";
import "./Breadcrumb.scss";
import { RiArrowRightSLine } from "react-icons/ri";

const Breadcrumb = ({ product }) => {
  return (
    <div className="breadcrumb">
      HOME <RiArrowRightSLine />
      SHOP <RiArrowRightSLine />
      {product.title} <RiArrowRightSLine />
      {product.price} <RiArrowRightSLine />
    </div>
  );
};

export default Breadcrumb;
