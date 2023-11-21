import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import { db } from "../../services/config";
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const {itemId} = useParams();

    useEffect(() => {
      const newDoc = doc(db, "products", itemId);

      getDoc(newDoc)
        .then(res => {
          const data = res.data();
          const newProduct = {id: res.id, ...data};
          setItem(newProduct);
        })
        .catch(error => console.log(error))
    }, [itemId])

  return (
    <div>
        <ItemDetail {...item} />
    </div>
  )
}

export default ItemDetailContainer