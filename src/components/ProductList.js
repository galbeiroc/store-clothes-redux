import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

import Product from "./Product";

import { setProducts } from '../redux/actions/productsActions'

function ProductList() {
  const products = useSelector(state => state.allProducts.products)
  const dispatch = useDispatch();

  async function fetchProducts() {
    const response = await axios.get('https://fakestoreapi.com/products')
    .catch((err) => console.log(err));

    dispatch(setProducts(response.data))
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="iu grid container">
      {
        products.map((product) => <Product key={product.id} product={product} />)
      }
    </div>
  );
}

export default ProductList;