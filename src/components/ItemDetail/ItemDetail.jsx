import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({id, name, price, img}) => {
  return (
    <div className='containerItem'>
        <h2>Nombre: {name} </h2>
        <h3>Precio: {price} </h3>
        <h3>ID: {id} </h3>
        <img src={img} alt={name} />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, eum.</p>
    </div>
  )
}

export default ItemDetail