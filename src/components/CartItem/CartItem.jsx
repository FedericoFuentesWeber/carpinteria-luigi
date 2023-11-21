import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CartItem.css';

const CartItem = ({item, amount}) => {
    const {removeItem} = useContext(CartContext);

  return (
    <div className='cartItem'>
        <h4> {item.name} </h4>
        <p> Cantidad: {amount} </p>
        <p> Precio: ${item.price} </p>
        <button onClick={() => removeItem(item.id)}> Eliminar </button>
        <hr />
    </div>
  )
}

export default CartItem