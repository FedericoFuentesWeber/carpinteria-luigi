import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, price, img, stock}) => {
  return (
    <div className='cardProduct'>
        <img src={img} alt={name} />
        <h3>Nombre: {name} </h3>
        <p>Precio: ${price} </p>
        <p>ID: {id} </p>
        <p>Stock: {stock} </p>
        <Link to={`/item/${id}`} > Ver detalles </Link>
    </div>
  )
}

export default Item