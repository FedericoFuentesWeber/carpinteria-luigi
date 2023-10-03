import React from 'react'
import './CartWidget.css'
import cartIcon from '../../resources/shopping-cart.svg'

const CartWidget = () => {
    return (
        <div>
            <img src={cartIcon} alt="Icono del carrito de compras" />
            <strong> 1 </strong>
        </div>
    )
}

export default CartWidget