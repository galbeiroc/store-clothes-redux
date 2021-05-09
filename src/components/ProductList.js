import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

import Product from "./Product";

import { setProducts } from '../redux/actions/productsActions'

function ProductList() {
  const products = useSelector(state => state.allProducts.products)
  const dispatch = useDispatch();
  console.log(products);

  async function fetchProducts() {
    const response = await axios.get('https://fakestoreapi.com/products')
    .catch((err) => console.log(err));

    dispatch(setProducts(response.data))
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log('products', products);
  return (
    <div className="iu grid container">
        <Product />
    </div>
  );
}

export default ProductList;