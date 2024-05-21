import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../Components/Assets/data";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Loader from "../../Components/Loader/Loader";
import ProductDisplay from "../../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await fetchProductById(productId);
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading product:", error);
        setLoading(false);
      }
    };

    getProduct();
  }, [productId]);

  console.log(product);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
