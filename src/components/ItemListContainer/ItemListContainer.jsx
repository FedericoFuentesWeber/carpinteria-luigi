import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom';
import { db } from "../../services/config"
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    const myProducts = categoryId ? query(collection(db, "products"), 
      where("idCat", "==", categoryId)) : collection(db, "products");

    getDocs(myProducts)
      .then(res => {
        const newProducts = res.docs.map(doc => {
          const data = doc.data()
          return {id:doc.id, ...data}
        })
        setProducts(newProducts);
      })
      .catch(error => console.log(error))
  }, [categoryId])

  return (
    <>
      <h2 style={{ textAlign: "center" }}> Mis Productos </h2>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer