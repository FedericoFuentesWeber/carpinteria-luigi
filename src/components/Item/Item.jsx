import React from 'react'
import './Item.css';

const Item = ({id, name, price, img}) => {
  return (
    <div className='cardProduct'>
        <img src={img} alt={name} />
        <h3>Nombre: {name} </h3>
        <p>Precio: {price} </p>
        <p>ID: {id} </p>
        <button> Ver Detalles </button>
    </div>
  )
}

export default Item