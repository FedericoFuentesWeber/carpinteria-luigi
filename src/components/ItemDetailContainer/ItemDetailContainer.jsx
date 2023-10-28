import React from 'react';
import { useState, useEffect } from 'react';
import { getProduct } from '../../asyncmock';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const {itemId} = useParams();

    useEffect(() => {
        getProduct(itemId)
            .then(answer => setProduct(answer))
    }, [itemId])

  return (
    <div>
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer