import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div className='item-list'> {props.greeting} </div>
  )
}

export default ItemListContainer