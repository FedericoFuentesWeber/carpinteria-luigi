import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {
  const { cart, amountOfItems, total, emptyCart} = useContext(CartContext);


  if(amountOfItems === 0) {
    return (
      <>
        <h2>No hay productos en el carrito</h2>
        <Link className='linkProductos' to="/">Ver productos</Link>
      </>
    )
  }

  return (
    <div className='purchaseDetail'>
      <div className='cartItemDetail'>
        {
          cart.map(product => <CartItem key={product.item.id} {...product}/>)
        }
      </div>
      
      <h3> Total: ${total} </h3>
      <h3> Cantidad de items: {amountOfItems} </h3>
      
      <div>
        <button onClick={() => emptyCart()}> Vaciar carrito </button>
        <Link className='finishPurchase' to="/checkout"> Finalizar compra </Link>
      </div>
    </div>
  )
}

export default Cart