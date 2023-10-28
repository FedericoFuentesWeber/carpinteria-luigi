import React from 'react';
import { useState, useEffect } from 'react';
import { getProducts, getProductsByCateogry } from "../../asyncmock";
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {idCategory} = useParams();

  useEffect(() => {
    const productsFunction = idCategory ? getProductsByCateogry : getProducts;

    productsFunction(idCategory)
      .then(res => setProducts(res))

  }, [idCategory])

  return (
    <>
      <h2 style={{ textAlign: "center" }}> Mis Productos </h2>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer