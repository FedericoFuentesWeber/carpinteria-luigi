import React from 'react';
import { useState, useEffect } from 'react';
import { getProduct } from '../../asyncmock';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const {itemId} = useParams();

    useEffect(() => {
        getProduct(itemId)
            .then(answer => setItem(answer))
    }, [itemId])

  return (
    <div>
        <ItemDetail {...item} />
    </div>
  )
}

export default ItemDetailContainer