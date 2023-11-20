import { useState, useContext } from 'react';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({id, name, price, img, stock}) => {
  const [addAmount, setAddAmount] = useState(0);

  const { addItem } = useContext(CartContext);

  const amountHandler = (amount) => {
    setAddAmount(amount);

    const item = { id, name, price };
    addItem(item, amount);
  }

  return (
    <div className='containerItem'>
        <h2>Nombre: {name} </h2>
        <h3>Precio: ${price} </h3>
        <h3>ID: {id} </h3>
        <img src={img} alt={name} />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, eum.</p>

        {
          addAmount > 0 ? (<Link to="/cart">Finalizar compra</Link>) : 
            (<Counter initialAmount={1} stock={stock} addFunction={amountHandler}/>)
        }

    </div>
  )
}

export default ItemDetail