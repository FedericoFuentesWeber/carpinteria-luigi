import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, amountOfItems, total, emptyCart} = useContext(CartContext);


  if(amountOfItems === 0) {
    return (
      <>
        <h2>No hay productos en el carrito</h2>
        <Link to="/">Ver productos</Link>
      </>
    )
  }

  return (
    <div>
      {
        cart.map(product => <CartItem key={product.id} {...product}/>)
      }
      <h3> Total: ${total} </h3>
      <h3> Cantidad de items: {amountOfItems} </h3>
      <button onClick={() => emptyCart()}> Vaciar carrito </button>
      <Link to="/checkout"> Finalizar compra </Link>

    </div>
  )
}

export default Cart