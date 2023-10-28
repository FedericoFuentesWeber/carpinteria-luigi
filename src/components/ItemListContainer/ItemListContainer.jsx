import React from 'react';
import { useState, useEffect } from 'react';
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(answer => setProducts(answer))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <h2 style={{ textAlign: "center" }}> Mis Productos </h2>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer