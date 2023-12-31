import { useState, useContext } from 'react';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({id, name, price, img, stock, description}) => {
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
        <p>Stock: {stock}</p>
        <img src={img} alt={name} />
        <p>{description}</p>

        {
          addAmount > 0 ? (
            <ul className='buttonsPurchase'>
              <li><Link to="/cart">Finalizar compra</Link></li>
              <li><Link to="/">Seguir comprando</Link></li>
            </ul>
          ) : 
            (<Counter initialAmount={1} stock={stock} addFunction={amountHandler}/>)
        }

    </div>
  )
}

export default ItemDetail