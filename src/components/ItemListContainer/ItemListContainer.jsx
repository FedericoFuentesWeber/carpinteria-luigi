import React from 'react';
import { useState, useEffect } from 'react';
import { getProducts, getProductsByCateogry } from "../../asyncmock";
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    const productsFunction = categoryId ? getProductsByCateogry : getProducts;

    productsFunction(categoryId)
      .then(res => setProducts(res))

  }, [categoryId])

  return (
    <>
      <h2 style={{ textAlign: "center" }}> Mis Productos </h2>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer