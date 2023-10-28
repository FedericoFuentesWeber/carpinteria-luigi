import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div>
            <img className='cart' src={"../img/shopping-cart.svg"} alt="Icono del carrito de compras" />
            <strong> 1 </strong>
        </div>
    )
}

export default CartWidget