import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import axios from 'axios';
import Product from "./Product";

function ProductList() {
  const products = useSelector(state => state)
  console.log(products);

  async function fetchProducts() {
    const response = await axios.get('https://fakestoreapi.com/products')
    .catch((err) => console.log(err));

    console.log('Response', response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div className="iu grid container">
        <Product />
    </div>
  );
}

export default ProductList;